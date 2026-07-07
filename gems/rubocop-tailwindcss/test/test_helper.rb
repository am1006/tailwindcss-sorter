# frozen_string_literal: true

require "minitest/autorun"
require "rubocop"
require "rubocop-tailwindcss"

# A minimal minitest harness over rubocop's testing internals - the shape of
# rubocop's rspec CopHelper, without the rspec.
module CopTesting
  private
    def offenses(source, **overrides)
      config = configuration(overrides)
      investigate(cop(config), source, config).offenses
    end

    def correct(source, **overrides)
      config = configuration(overrides)
      corrected = cop(config)
      corrected.instance_variable_get(:@options)[:autocorrect] = true
      report = investigate(corrected, source, config)
      if corrector = report.correctors.compact.first
        corrector.rewrite
      else
        source
      end
    end

    def configuration(overrides = {})
      RuboCop::Config.new(
        "Tailwindcss/ClassOrder" => { "Enabled" => true, "Stylesheet" => nil, "Engine" => "quickjs" }.merge(overrides)
      )
    end

    def cop(config)
      RuboCop::Cop::Tailwindcss::ClassOrder.new(config)
    end

    def investigate(cop, source, config)
      processed = RuboCop::ProcessedSource.new(source, 3.4, nil, parser_engine: :parser_prism)
      processed.config = config
      processed.registry = RuboCop::Cop::Registry.new([ RuboCop::Cop::Tailwindcss::ClassOrder ])
      RuboCop::Cop::Team.new([ cop ], config, raise_error: true).investigate(processed)
    end
end
