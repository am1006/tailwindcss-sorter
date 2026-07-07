# frozen_string_literal: true

module RuboCop
  module Tailwindcss
    # The order oracle: Tailwind's design system, bundled into a single JS file
    # and evaluated inside an embedded engine - warm for the life of the
    # process, no node, no subprocesses. Sorting asks the same
    # design.getClassOrder that prettier-plugin-tailwindcss asks; the vendored
    # bundle is proven against the official plugin by this repo's factory.
    #
    # Note: the engines' eval APIs only ever receive this gem's own vendored
    # bundle and JSON-encoded class strings - no untrusted code is evaluated.
    class Sorter
      class Error < StandardError; end

      # The Tailwind version the vendored bundle must carry - the one number
      # this gem's entire behavior derives from. The factory stamps the bundle
      # at build time and the suite asserts agreement, so bumping either side
      # alone turns the tests red.
      TAILWIND_VERSION = "4.3.1"

      BUNDLE_PATH = File.expand_path("../../../vendor/tw-bundle.js", __dir__)
      DEFAULT_CSS = %(@import "tailwindcss";)

      class << self
        # One warm oracle per (process, stylesheet, engine). The PID in the key
        # makes forked rubocop workers each boot their own engine lazily - an
        # embedded VM must never be shared across a fork.
        def for(stylesheet:, engine:)
          key = [ Process.pid, stylesheet, engine ]
          if @key != key
            @key = key
            @instance = new(stylesheet: stylesheet, engine: engine)
          end
          @instance
        end
      end

      def initialize(stylesheet: nil, engine: "quickjs")
        @stylesheet = stylesheet
        @engine = build_engine(engine)
        boot
      end

      def sort(class_string)
        @engine.run("__twSort(#{class_string.to_json})")
      end

      def tailwind_version
        @engine.run("__twMeta.tailwind")
      end

      def entry_sha
        @engine.run("__twMeta.entrySha")
      end

      private
        def build_engine(name)
          case name.to_s
          when "quickjs" then QuickjsEngine.new
          when "mini_racer" then MiniRacerEngine.new
          else raise Error, %(unknown engine #{name.inspect} - use "quickjs" or "mini_racer")
          end
        end

        def boot
          @engine.run(File.read(BUNDLE_PATH))
          @engine.run("__twInit(#{user_css.to_json})")
          @engine.drain
          assert_loaded
          assert_sorting
        end

        def user_css
          if @stylesheet
            inline_relative_imports File.read(@stylesheet), File.dirname(@stylesheet)
          else
            DEFAULT_CSS
          end
        end

        # The design system receives one flat CSS string: Ruby owns the
        # filesystem, so relative imports are inlined here and only
        # `@import "tailwindcss"` remains for the bundle's embedded files.
        def inline_relative_imports(css, dir)
          css.gsub(%r{@import\s+"(\./[^"]+)"\s*;}) do
            path = File.expand_path(Regexp.last_match(1), dir)
            inline_relative_imports File.read(path), File.dirname(path)
          end
        end

        def assert_loaded
          if error = @engine.run("__tw.error")
            raise Error, "Tailwind design system failed to load: #{error}"
          end
          unless @engine.run("__tw.ready")
            raise Error, "Tailwind design system never became ready - promise jobs stalled in the JS engine"
          end
        end

        # A design system that loads but does not sort would pass every file as
        # clean - prove the order before trusting anything it says.
        def assert_sorting
          unless sort("px-4 flex") == "flex px-4"
            raise Error, "sorter self-check failed - the design system is not ordering classes"
          end
        end

      # Engine adapters: same bundle, same calls. QuickJS leaves promise jobs
      # to the embedder (drain pumps them); V8 drains its microtask queue
      # itself at the end of every evaluation.
      class QuickjsEngine
        def initialize
          require "quickjs"
          @vm = Quickjs::VM.new(memory_limit: 256 * 1024 * 1024, timeout_msec: 30_000)
        end

        def run(code)
          @vm.eval_code(code)
        end

        def drain
          @vm.drain_jobs!
        end
      end

      class MiniRacerEngine
        def initialize
          require "mini_racer"
          @context = MiniRacer::Context.new
        end

        def run(code)
          @context.eval(code)
        end

        def drain
        end
      end
    end
  end
end
