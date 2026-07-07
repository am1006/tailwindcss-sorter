# frozen_string_literal: true

require "test_helper"
require "digest"
require "json"

# The vendored bundle's honesty tests: it must carry the pinned Tailwind, be
# fresh against its factory source, and agree with the official prettier
# plugin over the real-world corpus. The factory-dependent tests skip in a
# shipped gem - they exist to guard this monorepo's release ritual.
class VendoredBundleTest < Minitest::Test
  FACTORY = File.expand_path("../../../factory", __dir__)

  def test_the_bundle_carries_the_pinned_tailwind_version
    assert_equal RuboCop::Tailwindcss::Sorter::TAILWIND_VERSION, sorter.tailwind_version,
      "bundle and pin disagree - run the factory ritual (cd factory && npm run build) " \
      "or update Sorter::TAILWIND_VERSION"
  end

  def test_the_bundle_is_fresh_against_the_factory_source
    entry = File.join(FACTORY, "entry.ts")
    skip "factory not present (shipped gem)" unless File.exist?(entry)

    assert_equal Digest::SHA256.file(entry).hexdigest, sorter.entry_sha,
      "factory/entry.ts changed without a rebuild - run: cd factory && npm run build"
  end

  def test_the_bundle_agrees_with_the_official_plugin_over_the_corpus
    corpus_path = File.join(FACTORY, "corpus.json")
    skip "factory not present (shipped gem)" unless File.exist?(corpus_path)

    corpus = JSON.parse(File.read(corpus_path))
    truth = JSON.parse(File.read(File.join(FACTORY, "truth.json")))
    themed = RuboCop::Tailwindcss::Sorter.new(stylesheet: File.join(FACTORY, "user.css"))

    mismatches = corpus.zip(truth).reject { |raw, expected| themed.sort(raw) == expected }
    assert_empty mismatches.map(&:first),
      "the vendored bundle disagrees with the official plugin - if Tailwind was bumped, " \
      "regenerate truth (cd factory && npm run truth); otherwise investigate before shipping"
  end

  private
    def sorter
      @sorter ||= RuboCop::Tailwindcss::Sorter.new
    end
end
