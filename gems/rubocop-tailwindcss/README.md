# rubocop-tailwindcss

RuboCop cops that keep Tailwind CSS classes in the official order in Ruby
code - Phlex components and any Ruby that carries `class:` strings.

**Under development.** This release reserves the name; the first working
release is being built at
[am1006/tailwindcss-sorter](https://github.com/am1006/tailwindcss-sorter).

The plan: the cop finds class strings via the Ruby AST (no regex), batches
them through the `tailwindcss-sorter` npm CLI - a pinned, theme-aware order
oracle over Tailwind's own design system - and autocorrects. One Gemfile line;
no package.json, no node_modules in your Rails app.
