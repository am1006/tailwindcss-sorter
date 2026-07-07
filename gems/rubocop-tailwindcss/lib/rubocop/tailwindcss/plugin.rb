# frozen_string_literal: true

require "lint_roller"

module RuboCop
  module Tailwindcss
    class Plugin < LintRoller::Plugin
      def about
        LintRoller::About.new(
          name: "rubocop-tailwindcss",
          version: VERSION,
          homepage: "https://github.com/am1006/tailwindcss-sorter",
          description: "Sort Tailwind CSS classes in Ruby code in the official order."
        )
      end

      def supported?(context)
        context.engine == :rubocop
      end

      def rules(_context)
        LintRoller::Rules.new(
          type: :path,
          config_format: :rubocop,
          value: Pathname.new(__dir__).join("../../../config/default.yml")
        )
      end
    end
  end
end
