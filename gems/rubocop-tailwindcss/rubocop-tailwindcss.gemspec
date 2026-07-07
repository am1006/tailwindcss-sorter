require_relative "lib/rubocop/tailwindcss/version"

Gem::Specification.new do |spec|
  spec.name = "rubocop-tailwindcss"
  spec.version = RuboCop::Tailwindcss::VERSION
  spec.authors = [ "am1006" ]
  spec.summary = "RuboCop cop that keeps Tailwind CSS classes in the official order"
  spec.description = "Sorts Tailwind CSS classes in Ruby source - Phlex components and any class: string keyword - using Tailwind's own design system evaluated in an embedded JS engine. No node, no subprocesses: the official prettier-plugin order, autocorrected by rubocop -a."
  spec.homepage = "https://github.com/am1006/tailwindcss-sorter"
  spec.license = "MIT"
  spec.required_ruby_version = ">= 3.1"

  spec.files = Dir["lib/**/*.rb", "config/*.yml", "vendor/tw-bundle.js", "README.md", "LICENSE"]
  spec.require_paths = [ "lib" ]

  spec.add_dependency "lint_roller", "~> 1.1"
  spec.add_dependency "quickjs", ">= 0.20"
  spec.add_dependency "rubocop", ">= 1.72"

  spec.metadata = {
    "homepage_uri" => spec.homepage,
    "source_code_uri" => spec.homepage,
    "default_lint_roller_plugin" => "RuboCop::Tailwindcss::Plugin",
    "rubygems_mfa_required" => "true"
  }
end
