# tailwindcss-sorter

One concern, two registries: keep Tailwind CSS classes in the official order in
Ruby projects that have no JavaScript environment (importmap Rails, Phlex
views).

The official class order is computed by Tailwind's design system, which only
exists in JavaScript - every serious sorter (prettier-plugin-tailwindcss, oxc's
oxfmt, Herb) ends up asking it. This repo packages that answer for Ruby
tooling: a tiny npm CLI carries the oracle, and a RuboCop gem brings it to
Ruby code through the AST.

## Layout

- `npm/` - the `tailwindcss-sorter` npm package: a thin CLI over
  [`@herb-tools/tailwind-class-sorter`](https://github.com/marcoroth/herb/tree/main/javascript/packages/tailwind-class-sorter)
  with `tailwindcss` pinned exactly (currently 4.3.1, tracking
  tailwindcss-rails). JSON batch of class strings on stdin, sorted strings on
  stdout, `--stylesheet` for theme awareness.
- `gems/rubocop-tailwindcss/` - the RuboCop gem: finds Tailwind class strings
  in Ruby source via the AST and autocorrects their order by shelling out to
  the npm CLI (one batched call per run).
- `gems/rubocop-tailwind/` - alias gem reserving the sibling name; it only
  points at rubocop-tailwindcss.

The Tailwind version is pinned, never floated: the sort order is a function of
the Tailwind version, and a linter must produce the same answer on every
machine. Upgrades are deliberate - bump the pin, run the compat tests, publish.

## History

This repo began as a VS Code extension that sorted classes via regex patterns
with its own bundled Tailwind v4 design system. It lives on, as shipped, on
the `v1` branch (tagged `extension-0.0.3`). The RuboCop cop supersedes it for
Ruby: the AST beats regex, and ruby-lsp carries the cop into every editor.
