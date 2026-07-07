# frozen_string_literal: true

require "test_helper"

class ClassOrderTest < Minitest::Test
  include CopTesting

  # ===========================================================================
  # Offenses and autocorrection
  # ===========================================================================

  def test_flags_unsorted_classes
    result = offenses(%(div(class: "px-4 flex")))
    assert_equal 1, result.size
    assert_match(/official order/, result.first.message)
  end

  def test_autocorrects_to_the_official_order
    assert_equal %(div(class: "flex px-4")), correct(%(div(class: "px-4 flex")))
  end

  def test_corrects_single_quoted_strings
    assert_equal %(div(class: 'flex px-4')), correct(%(div(class: 'px-4 flex')))
  end

  def test_corrects_the_classes_keyword_too
    assert_equal %(render Badge.new(classes: "flex px-4")), correct(%(render Badge.new(classes: "px-4 flex")))
  end

  def test_dedupes_while_correcting
    assert_equal %(div(class: "flex px-4")), correct(%(div(class: "px-4 flex px-4")))
  end

  # ===========================================================================
  # What passes untouched
  # ===========================================================================

  def test_sorted_classes_pass
    assert_empty offenses(%(div(class: "flex px-4")))
  end

  def test_a_single_class_passes
    assert_empty offenses(%(div(class: "flex")))
  end

  def test_other_keywords_pass
    assert_empty offenses(%(where(name: "px-4 flex")))
  end

  def test_interpolated_strings_are_left_alone
    assert_empty offenses(%(div(class: "px-4 \#{state} flex")))
  end

  def test_strings_with_escape_sequences_are_left_alone
    assert_empty offenses(%q(div(class: "px-4\tflex")))
  end

  def test_word_arrays_are_not_covered_yet
    assert_empty offenses(%(div(class: %w[ px-4 flex ])))
  end

  # ===========================================================================
  # Class functions (cn, cva) - prettier's contract: every plain string
  # literal inside is a class string
  # ===========================================================================

  def test_sorts_positional_arguments_in_cn
    assert_equal %(cn("flex px-4", "rounded bg-blue-500")), correct(%(cn("px-4 flex", "bg-blue-500 rounded")))
  end

  def test_sorts_the_conditional_arm_in_cn
    assert_equal %(cn("flex px-4", active && "rounded bg-blue-500")),
      correct(%(cn("px-4 flex", active && "bg-blue-500 rounded")))
  end

  def test_sorts_ternary_branches_in_cn
    assert_equal %(cn(active ? "flex px-4" : "hidden px-2")),
      correct(%(cn(active ? "px-4 flex" : "px-2 hidden")))
  end

  def test_sorts_cva_base_and_nested_variant_values
    assert_equal %(cva("rounded px-4 py-2", variants: { intent: { primary: "bg-blue-500 text-white" } })),
      correct(%(cva("px-4 py-2 rounded", variants: { intent: { primary: "text-white bg-blue-500" } })))
  end

  def test_sorts_array_elements_in_cn
    assert_equal %(cn([ "flex px-4" ])), correct(%(cn([ "px-4 flex" ])))
  end

  def test_dynamic_arguments_in_cn_are_left_alone
    assert_empty offenses(%(cn(@class, helper_call, "\#{a} b")))
  end

  def test_strings_in_unlisted_functions_are_left_alone
    assert_empty offenses(%(translate("px-4 flex")))
  end

  def test_a_class_pair_inside_a_function_is_flagged_exactly_once
    assert_equal 1, offenses(%(cva(compounds: [ { class: "px-4 flex" } ]))).size
  end

  def test_functions_are_configurable
    assert_equal 1, offenses(%(mix("px-4 flex")), "Functions" => %w[ mix ]).size
    assert_empty offenses(%(cn("px-4 flex")), "Functions" => %w[ mix ])
  end

  # ===========================================================================
  # Configuration
  # ===========================================================================

  def test_attributes_are_configurable
    result = offenses(%(div(wrapper: "px-4 flex")), "Attributes" => %w[ wrapper ])
    assert_equal 1, result.size
  end

  def test_a_missing_stylesheet_raises_rather_than_sorting_wrong
    error = assert_raises(StandardError) do
      offenses(%(div(class: "px-4 flex")), "Stylesheet" => "nope/missing.css")
    end
    assert_match(/stylesheet not found/, error.message)
  end
end
