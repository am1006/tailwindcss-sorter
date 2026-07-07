# frozen_string_literal: true

module RuboCop
  module Cop
    module Tailwindcss
      # Keeps Tailwind CSS classes in the official sort order - the same order
      # prettier-plugin-tailwindcss produces - wherever Ruby carries them:
      # `class:` / `classes:` string keywords (Phlex components, tag helpers)
      # and the string literals inside class-merging functions like `cn` and
      # `cva`.
      #
      # @example
      #   # bad
      #   div(class: "px-4 bg-blue-500 flex")
      #   cn("px-4 flex", active && "bg-muted rounded")
      #
      #   # good
      #   div(class: "flex bg-blue-500 px-4")
      #   cn("flex px-4", active && "rounded bg-muted")
      class ClassOrder < Base
        extend AutoCorrector

        MSG = "Sort Tailwind CSS classes in the official order"

        def on_pair(node)
          if target_attribute?(node) && sortable?(node.value)
            check node.value
          end
        end

        def on_send(node)
          if class_function?(node)
            node.arguments.each { |argument| sort_within argument }
          end
        end

        private
          def target_attribute?(node)
            node.key.sym_type? && attributes.include?(node.key.value.to_s)
          end

          def class_function?(node)
            functions.include?(node.method_name.to_s)
          end

          # Inside a class function, every plain string literal is a class
          # string - prettier's contract, followed here: positional arguments,
          # hash values at any depth, array elements, and the branches of
          # conditionals. Dynamic nodes (variables, calls, interpolation) stay
          # untouched, and `class:` pairs stay with on_pair so nothing is
          # flagged twice.
          def sort_within(node)
            case node.type
            when :str
              check node if sortable?(node)
            when :hash, :kwargs, :array, :and, :or, :begin
              node.children.each { |child| sort_within child if child.is_a?(Parser::AST::Node) }
            when :pair
              sort_within node.value unless target_attribute?(node)
            when :if
              node.branches.compact.each { |branch| sort_within branch }
            end
          end

          # Plain quoted string literals carrying at least two classes.
          # Interpolation is invisible to the sorter, and escape sequences make
          # source and value diverge - both are left alone rather than
          # corrected unsafely.
          def sortable?(node)
            node.str_type? && node.value.match?(/\S\s+\S/) && plain_literal?(node)
          end

          def plain_literal?(node)
            node.source == %("#{node.value}") || node.source == %('#{node.value}')
          end

          def check(node)
            sorted = sorter.sort(node.value)
            if sorted != node.value
              add_offense(node) do |corrector|
                corrector.replace content_range(node), sorted
              end
            end
          end

          def content_range(node)
            node.source_range.adjust(begin_pos: 1, end_pos: -1)
          end

          def attributes
            cop_config.fetch("Attributes", %w[ class classes ])
          end

          def functions
            cop_config.fetch("Functions", %w[ cn cva ])
          end

          def sorter
            RuboCop::Tailwindcss::Sorter.for stylesheet: stylesheet, engine: cop_config.fetch("Engine", "quickjs")
          end

          # A configured stylesheet that does not exist would silently sort
          # with the default theme - wrong for custom variants - so it raises
          # instead. Set Stylesheet to ~ to sort against the default theme.
          def stylesheet
            if path = cop_config["Stylesheet"]
              unless File.exist?(path)
                raise RuboCop::Tailwindcss::Sorter::Error,
                  "stylesheet not found at #{path.inspect} - point Tailwindcss/ClassOrder's " \
                  "Stylesheet at your Tailwind entry CSS, or set it to ~ for the default theme"
              end
              path
            end
          end
      end
    end
  end
end
