# CLAUDE.md

Guidance for AI coding agents maintaining this repository.

## What this is

One repo, one concern: keep Tailwind CSS classes in the **official** sort
order in Ruby projects that have no JavaScript environment (importmap Rails,
Phlex views). The product is the `rubocop-tailwindcss` gem. Everything else
here exists to build it, prove it, or reserve its names.

The official order is computed by Tailwind's design system -
`design.getClassOrder`, JavaScript, maintained by Tailwind Labs. Nobody in
the ecosystem reimplements it (prettier-plugin-tailwindcss, oxc's oxfmt, and
Herb all ask it); reimplementations rot (see Biome). This repo asks it too,
but **in-process**: the design system is bundled into one self-contained JS
file and evaluated inside an embedded JS engine (quickjs), warm for the life
of the Ruby process. No node, no npx, no subprocesses, no IPC - the oracle
is a method call.

## Layout

- `gems/rubocop-tailwindcss/` - the gem. Cop `Tailwindcss/ClassOrder`
  (AST detection + autocorrect), `Sorter` (the oracle: engine seam,
  self-checks), `vendor/tw-bundle.js` (BUILT ARTIFACT - never edit).
- `factory/` - node lives here and only here, and it speaks TypeScript
  (checked by tsgo, executed by node 24 directly). `entry.ts` is the
  bundle's source of truth; `build.ts` compiles it straight into the gem's
  `vendor/` with provenance stamped in; `truth.ts` generates `truth.json`
  from the real prettier plugin. See `factory/README.md` for the rituals.
- `gems/rubocop-tailwind/` - alias gem; only points at rubocop-tailwindcss.
- `npm/` - the npm name `tailwindcss-sorter`, reserved as a placeholder.
- Branch `v1` (tag `extension-0.0.3`) - the original VS Code extension,
  archived as shipped. Its two `.vsix` files exist only on disk at the repo
  root (never tracked); do not delete them.

## Development commands

```bash
# gem tests (the whole safety net - run from gems/rubocop-tailwindcss/)
BUNDLE_GEMFILE=Gemfile bundle exec rake test

# factory (run from factory/; requires node)
npm run check     # tsgo --noEmit - type-checks the factory sources
npm run build     # check + entry.ts -> gem vendor/, stamps tailwind version + entry sha
npm run truth     # check + official plugin sorts corpus.json -> truth.json

# engine benchmark (from factory/)
BUNDLE_GEMFILE=../gems/rubocop-tailwindcss/Gemfile bundle exec ruby bakeoff.rb
```

## The tripwires - what red means

The suite is designed so that every maintenance mistake fails a test whose
message names the fix. Trust the message.

| Failing test | It means | The fix |
| --- | --- | --- |
| `bundle_carries_the_pinned_tailwind_version` | bundle and `Sorter::TAILWIND_VERSION` disagree | run the bump ritual end to end |
| `bundle_is_fresh_against_the_factory_source` | `factory/entry.ts` edited without a rebuild | `cd factory && npm run build` |
| `bundle_agrees_with_the_official_plugin_over_the_corpus` | our order drifted from the official plugin's | regenerate truth after a bump; otherwise investigate before shipping - this is the fidelity guarantee itself |
| `mini_racer_agrees_with_quickjs` | the engine seam broke | fix before shipping; the seam is the reliability fallback |
| the Sorter raises `self-check failed` at boot | design system loaded but is not sorting | never rationalize this away - a sorter that silently no-ops passes every file as clean (Herb's fork does exactly this; it is why the check exists) |

## The Tailwind bump ritual

Documented in `factory/README.md`. In short: pin in `factory/package.json`,
`npm install`, `npm run build`, `npm run truth`, update
`Sorter::TAILWIND_VERSION`, `rake test`. The pin tracks the Tailwind version
the maintainer's app uses (tailwindcss-rails). The version is pinned EXACT,
never a range: sort order is a function of the Tailwind version, and a
linter must give the same answer on every machine.

## Deliberate decisions - do not "fix" these

- **quickjs is the engine, mini_racer is the seam.** Chosen by a measured
  bake-off (equal fidelity 208/208, ~37 ms vs ~31 ms cold start, 2 MB vs
  40 MB, compiles anywhere vs platform binary matrix). mini_racer stays one
  config line away (`Engine: mini_racer`), and sits in the dev Gemfile so the
  parity test actually runs - an untested fallback is a rotted fallback. It
  is NOT a runtime dependency of the gem.
- **`@herb-tools/tailwind-class-sorter` was evaluated and rejected twice.**
  Its runtime resolution needs a host node_modules (this repo's consumers
  have none), and it degrades to a silent no-op when Tailwind fails to load -
  observed live: it returned our corpus unsorted while generating truth.
  The general rule that settled three architecture flip-flops: wherever a
  node_modules is guaranteed, use the maintained JS package; wherever it is
  not, carry your own bundle. This repo is the carry-your-own case.
- **`drain_jobs!` after `__twInit` is load-bearing.** QuickJS never executes
  promise jobs on its own - the embedder must pump. V8 drains microtasks at
  the end of each eval, which is why the mini_racer adapter's `drain` is
  empty. Removing the pump stalls init forever (design stays null).
- **The engines' eval APIs are correct usage, not a security smell.** They
  only ever evaluate this repo's own vendored bundle plus JSON-encoded class
  strings. No untrusted code exists in this system.
- **The cop raises on a configured-but-missing stylesheet.** Falling back to
  the default theme would silently sort wrong for custom variants - the
  Herb trap in different clothes. `Stylesheet: ~` is the explicit opt-out.
- **The cop deliberately skips** interpolated strings (unknowable),
  strings with escape sequences (source and value diverge; the
  `plain_literal?` guard), and `%w[]` arrays (not covered yet - the
  maintainer's codebase has zero occurrences).
- **Class functions (`Functions` config: cn, cva) follow prettier's
  contract, ruled by the maintainer**: every plain string literal inside the
  call is a class string - positional args, hash values at any depth, array
  elements, conditional branches. This includes prettier's known edge: a
  literal with internally conflicting utilities (`cn("p-4 p-2")`) can change
  its tailwind-merge result when reordered - sorted anyway, as the official
  plugin does; such a literal is already a bug. Documented in the gem README.
- **`Safe: true` / `SafeAutoCorrect: true`** - reordering and deduping
  classes never changes computed styles (Tailwind specificity comes from
  stylesheet order, not attribute order).

## Working conventions

- Leave all work uncommitted - the maintainer reviews the tree, then commits.
- Never publish. `gem push` / `npm publish` commands are handed to the
  maintainer to run by hand (their credentials, their MFA).
- Prose and comments: hyphens only, never em-dashes or en-dashes. Comments
  are timeless - no dates, no audit trail, no "changed X to Y".
- Ruby style follows 37signals conventions (indented `private` methods,
  expanded conditionals over guard clauses, minitest, comments only for
  what code cannot say).
- Tests are the spec, and tripwires are the memory: when deferring work or
  accepting a risk, encode it as a test whose failure message IS the work
  order.

## Known limitations / future work

- `%w[]` class arrays are unsupported (documented in the gem README).
- The corpus is a snapshot of the maintainer's app; refresh it occasionally
  (`factory/README.md` has the one-liner) and rerun `npm run truth`.
- If QuickJS ever stumbles on a future Tailwind bundle (bleeding-edge ES
  features), the seam is the escape hatch: swap `Engine: mini_racer`,
  re-run the bake-off, reconsider the default.
- The npm placeholder could someday host a thin CLI for non-Ruby consumers,
  built on the same factory bundle.
