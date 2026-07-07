Gem::Specification.new do |spec|
  spec.name = "rubocop-tailwindcss"
  spec.version = "0.0.1"
  spec.authors = [ "am1006" ]
  spec.summary = "RuboCop cops that keep Tailwind CSS classes in the official order in Ruby code"
  spec.description = "Finds Tailwind CSS class strings in Ruby source via the AST and keeps them in the official class order, with autocorrect. Built for Phlex components and any Ruby that carries class strings. This release reserves the name while the first working release is in development."
  spec.homepage = "https://github.com/am1006/tailwindcss-sorter"
  spec.license = "MIT"
  spec.required_ruby_version = ">= 3.1"

  spec.files = [ "README.md", "lib/rubocop-tailwindcss.rb" ]
  spec.require_paths = [ "lib" ]

  spec.metadata = {
    "homepage_uri" => spec.homepage,
    "source_code_uri" => spec.homepage,
    "rubygems_mfa_required" => "true"
  }
end
