# frozen_string_literal: true

require "test_helper"

class SorterTest < Minitest::Test
  # ===========================================================================
  # The official order
  # ===========================================================================

  def test_sorts_in_the_official_order
    assert_equal "flex px-4", sorter.sort("px-4 flex")
    assert_equal "rounded bg-blue-500 px-4 py-2 text-white", sorter.sort("px-4 bg-blue-500 text-white rounded py-2")
  end

  def test_dedupes_known_classes
    assert_equal "flex px-4", sorter.sort("px-4 flex px-4")
  end

  def test_unknown_classes_sort_first_preserving_their_order
    assert_equal "my-widget other-thing flex px-4", sorter.sort("my-widget px-4 other-thing flex")
  end

  # ===========================================================================
  # Stylesheet awareness
  # ===========================================================================

  def test_a_custom_variant_is_unknown_without_the_stylesheet
    assert_equal "marketing:flex flex", sorter.sort("marketing:flex flex")
  end

  def test_the_stylesheet_teaches_the_custom_variant_its_place
    custom = RuboCop::Tailwindcss::Sorter.new(stylesheet: File.expand_path("fixtures/custom.css", __dir__))
    assert_equal "flex marketing:flex", custom.sort("marketing:flex flex")
  end

  # ===========================================================================
  # The engine seam
  # ===========================================================================

  def test_mini_racer_agrees_with_quickjs
    mini = RuboCop::Tailwindcss::Sorter.new(engine: "mini_racer")
    sample = "dark:hover:bg-red-500/50 px-4 flex sm:px-8 -mt-2 !font-bold"
    assert_equal sorter.sort(sample), mini.sort(sample)
  rescue LoadError
    skip "mini_racer not installed"
  end

  def test_an_unknown_engine_raises
    error = assert_raises(RuboCop::Tailwindcss::Sorter::Error) do
      RuboCop::Tailwindcss::Sorter.new(engine: "v8000")
    end
    assert_match(/unknown engine/, error.message)
  end

  # ===========================================================================
  # Memoization
  # ===========================================================================

  def test_for_reuses_the_oracle_within_a_process
    first = RuboCop::Tailwindcss::Sorter.for(stylesheet: nil, engine: "quickjs")
    assert_same first, RuboCop::Tailwindcss::Sorter.for(stylesheet: nil, engine: "quickjs")
  end

  private
    def sorter
      @sorter ||= RuboCop::Tailwindcss::Sorter.new
    end
end
