Gem::Specification.new do |spec|
  spec.name = "rubocop-tailwind"
  spec.version = "0.0.1"
  spec.authors = [ "am1006" ]
  spec.summary = "Alias name for rubocop-tailwindcss - install that gem instead"
  spec.description = "Reserves the sibling name of rubocop-tailwindcss to prevent confusion. The real gem is rubocop-tailwindcss, developed at https://github.com/am1006/tailwindcss-sorter."
  spec.homepage = "https://github.com/am1006/tailwindcss-sorter"
  spec.license = "MIT"
  spec.required_ruby_version = ">= 3.1"

  spec.files = [ "README.md", "lib/rubocop-tailwind.rb" ]
  spec.require_paths = [ "lib" ]

  spec.metadata = {
    "homepage_uri" => spec.homepage,
    "source_code_uri" => spec.homepage,
    "rubygems_mfa_required" => "true"
  }
end
