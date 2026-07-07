# tailwindcss-sorter

Keep Tailwind CSS classes in the official order in Ruby projects that have no
JavaScript environment (importmap Rails, Phlex views).

The official class order is computed by Tailwind's design system, which only
exists in JavaScript - every serious sorter (prettier-plugin-tailwindcss,
oxc's oxfmt, Herb) ends up asking it. This repo confines that JavaScript to
two harmless places: a vendored bundle evaluated *inside* the Ruby process by
an embedded JS engine, and a factory that rebuilds and proves the bundle per
Tailwind release. Nothing at runtime touches node, npm, or a subprocess.

## Layout

- `gems/rubocop-tailwindcss/` - **the product**: a RuboCop cop
  (`Tailwindcss/ClassOrder`) with autocorrect. Ships the design system as a
  single 425 KB JS bundle and evaluates it in an embedded engine
  ([quickjs](https://rubygems.org/gems/quickjs) by default, mini_racer behind
  the same seam). Cold start ~30 ms, sorts in sub-millisecond, theme-aware
  via the project's Tailwind entry CSS.
- `factory/` - **where node lives, and only here**: `entry.ts` (the bundle's
  raw source, TypeScript checked by tsgo) is built by esbuild straight into
  the gem's `vendor/` with provenance stamped in, and `truth.ts` proves the
  result against the official prettier plugin over a real-world corpus. The gem's test suite
  asserts the pin, the freshness stamp, and 208/208 corpus fidelity - a
  stale or hand-edited bundle cannot pass. See `factory/README.md` for the
  Tailwind bump ritual.
- `gems/rubocop-tailwind/` - alias gem reserving the sibling name; it only
  points at rubocop-tailwindcss.
- `npm/` - the `tailwindcss-sorter` npm name, reserved as a placeholder. The
  embedded-engine architecture made an npm runtime package unnecessary.

## The architecture in one paragraph

Tailwind v4's core is a pure compiler - zero dependencies, no node APIs; its
"filesystem" needs are CSS data files injected by the host. So the factory
bundles core + those CSS files + a 40-line sort shell into one self-contained
script, and the gem evaluates it once per process inside an in-process JS
engine, then asks `design.getClassOrder` per class string - the same question
prettier-plugin-tailwindcss asks, answered by the same code, with no process
boundary anywhere. The Tailwind version is pinned exactly (currently 4.3.1,
tracking tailwindcss-rails): sort order is a function of the Tailwind
version, and a linter must produce the same answer on every machine. Bumps
are deliberate: rebuild the bundle, run the compat tripwire against the
official plugin, ship.

## History

This repo began as a VS Code extension that sorted classes via regex patterns
with its own bundled Tailwind v4 design system. It lives on, as shipped, on
the `v1` branch (tagged `extension-0.0.3`). The cop supersedes it for Ruby:
the AST beats regex, and ruby-lsp carries the cop into every editor.
