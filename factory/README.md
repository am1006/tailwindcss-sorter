# The factory

Node lives here and only here. The factory turns Tailwind's design system
into the gem's vendored oracle bundle, and proves that bundle against the
official prettier plugin. Nothing in the shipped gem ever runs node.

## The files

Everything is TypeScript, gated by `tsgo --noEmit` before every build and
truth run (`npm run check` runs it alone); node 24 executes the `.ts` files
directly.

- `entry.ts` - **the bundle's source of truth**: Tailwind's
  `__unstable__loadDesignSystem` + the four CSS data files embedded as
  strings + the 40-line sort shell ported from prettier-plugin-tailwindcss.
- `build.ts` - esbuild: `entry.ts` -> `../gems/rubocop-tailwindcss/vendor/tw-bundle.js`,
  stamping provenance (tailwindcss version + entry.ts sha256) that the gem's
  tests assert.
- `truth.ts` - sorts `corpus.json` with the real prettier plugin and writes
  `truth.json`; the gem's `vendored_bundle_test` replays the corpus against
  the bundle and demands zero disagreement.
- `corpus.json` / `user.css` - a snapshot of real multi-class strings and
  the stylesheet of a real-world Rails app (relative imports inlined).
  Refresh occasionally as the vocabulary grows.
- `bakeoff.rb` - the engine measurement harness (quickjs vs mini_racer) that
  settled the engine choice; keep for future re-evaluations.

## The Tailwind bump ritual

1. Pin the new version in `package.json`, then `npm install`
2. `npm run build` - rebuild the bundle into the gem (stamps new provenance)
3. `npm run truth` - regenerate truth from the official plugin
4. Update `Sorter::TAILWIND_VERSION` in the gem
5. `cd ../gems/rubocop-tailwindcss && bundle exec rake test` - the pin,
   freshness, and corpus-compat tests must all agree before shipping

Any shortcut through this ritual turns the gem's suite red - that is the
point.

## Refreshing the corpus from the app

Run from the app root, then `npm run truth`. The two-token filter mirrors the
cop's own `sortable?` predicate - the corpus should contain exactly what the
cop can send.

```
ruby -e '
require "json"
kwargs = Dir.glob("app/views/**/*.rb").flat_map { |f| File.read(f).scan(/class(?:es)?: "([^"#]+)"/).flatten }
tailwindish = /\A[a-z0-9\-:\/!\[\]().%_ ]+\z/
literals = Dir.glob("app/views/components/**/*.rb").flat_map { |f| File.read(f).scan(/"([^"#]+)"/).flatten }.select { |s| s.match?(tailwindish) }
corpus = (kwargs + literals).uniq.select { |s| s.match?(/\S\s+\S/) }
File.write("path/to/factory/corpus.json", JSON.pretty_generate(corpus))
'
```
