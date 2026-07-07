# rubocop-tailwindcss

A RuboCop cop that keeps Tailwind CSS classes in the official sort order -
the same order [prettier-plugin-tailwindcss](https://github.com/tailwindlabs/prettier-plugin-tailwindcss)
produces - wherever Ruby carries them: Phlex components, tag helpers, any
`class:` string keyword.

```ruby
# bad
div(class: "px-4 bg-blue-500 text-white rounded py-2")
cn("px-4 flex", active && "bg-blue-500 rounded")

# good (rubocop -a fixes it)
div(class: "rounded bg-blue-500 px-4 py-2 text-white")
cn("flex px-4", active && "rounded bg-blue-500")
```

**No node. No subprocesses. No npx.** The official order is computed by
Tailwind's own design system - a JavaScript library - which this gem ships as
a single vendored bundle and evaluates inside an embedded JS engine
([quickjs](https://rubygems.org/gems/quickjs)), warm for the life of the
process. Cold start is ~30 ms; each sort is sub-millisecond. Your Rails app
needs no package.json, no node_modules, no JavaScript toolchain.

## Installation

```ruby
# Gemfile
group :development do
  gem "rubocop-tailwindcss", require: false
end
```

```yaml
# .rubocop.yml
plugins:
  - rubocop-tailwindcss
```

## Usage

- **Fix on command:** `rubocop -a --only Tailwindcss/ClassOrder`
- **CI:** the cop runs inside your normal `rubocop` invocation
- **Editors:** ruby-lsp surfaces the offense as a diagnostic with a quick fix,
  and applies it on format-on-save where safe autocorrection is enabled

## Configuration

```yaml
Tailwindcss/ClassOrder:
  # Your Tailwind entry CSS - theme-aware sorting reads @custom-variant,
  # @theme and friends from here. The default matches tailwindcss-rails.
  # Set to ~ to sort against Tailwind's default theme instead.
  # A configured path that does not exist raises rather than sorting wrong.
  Stylesheet: app/assets/tailwind/application.css

  # Keyword arguments treated as class carriers.
  Attributes:
    - class
    - classes

  # Class-merging functions: every plain string literal inside these calls is
  # sorted - positional arguments, hash values at any depth (cva variants),
  # array elements, and the branches of && / || / ternaries.
  Functions:
    - cn
    - cva

  # The embedded JS engine: quickjs (default, ~2 MB, compiles anywhere) or
  # mini_racer (V8 - add the gem to your Gemfile yourself).
  Engine: quickjs

  Include:
    - app/views/**/*.rb
    - app/components/**/*.rb
```

## What it deliberately leaves alone

- **Interpolated strings** (`"px-4 #{state}"`) - the sorter cannot know what
  interpolation produces.
- **Strings with escape sequences** - source and value diverge; correcting
  them safely is not worth the machinery for class strings.
- **`%w[]` arrays** - not covered yet.

One edge to know, inherited deliberately from prettier-plugin-tailwindcss: a
single literal carrying *conflicting* utilities inside a merge function -
`cn("p-4 p-2")` - can change its tailwind-merge result when reordered,
because tailwind-merge is last-wins within a string. The official plugin
sorts these anyway, and so does this cop: a literal with an internal conflict
is already a bug, and sorting merely stops it hiding.

## How the order stays honest

The vendored bundle is rebuilt per Tailwind release in
[the parent repo's factory](https://github.com/am1006/tailwindcss-sorter) and
proven against the official prettier plugin over a real-world corpus before it
ships. On boot the sorter runs a self-check (sort a known string, raise loudly
if it comes back unsorted) - a design system that loads but does not sort
would otherwise pass every file as clean.

## License

MIT
