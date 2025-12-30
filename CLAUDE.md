# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

VS Code extension that sorts Tailwind CSS classes using configurable regex patterns. Built for Ruby/Phlex, ERB, HTML, JSX, TSX, and Vue with user-configurable language support.

Uses [@herb-tools/tailwind-class-sorter](https://www.npmjs.com/package/@herb-tools/tailwind-class-sorter) for sorting logic (same algorithm as prettier-plugin-tailwindcss).

## Commands

```bash
# Type checking
npm run check-types

# Lint
npm run lint

# Build (includes type check + lint)
npm run compile

# Production build
npm run package

# Watch mode for development
npm run watch

# Run tests
npm test

# Compile tests only
npm run compile-tests
```

## Architecture

```
src/
├── extension.ts   # Entry point: commands, code action provider, event handlers
├── types.ts       # TypeScript interfaces (PatternConfig, LanguageConfig, ExtensionConfig, etc.)
├── config.ts      # VS Code settings reader, default language patterns
├── matcher.ts     # Regex-based class attribute finder using configurable patterns
├── sorter.ts      # TailwindSorterService wrapper with config caching
└── test/          # Mocha tests (extension.test.ts for integration, matcher.test.ts for patterns)
```

**Flow:** `extension.ts` → `config.ts` (get settings) → `matcher.ts` (find class strings via regex) → `sorter.ts` (sort using TailwindClassSorter)

**Key design decisions:**
- Non-intrusive: `runOnSave` and `showDiagnostics` are OFF by default to avoid conflicts with other formatters
- `onWillSaveTextDocument` ensures sorting runs **before** formatters (format on save), so formatters get final say on code style
- Code action provider offers quick fixes only when classes need sorting
- Sorter instance is cached and only reinitialized when config changes (hash comparison)
- **Language allowlist:** Extension only processes languages in `tailwindcss-sorter.languages` - users can override to enable only specific languages

## Testing the Extension

Press F5 in VS Code to launch Extension Development Host.

## Local Installation (without marketplace)

```bash
npm run package                    # Build for production
npx @vscode/vsce package           # Creates .vsix file
```

Then in VS Code: `Cmd+Shift+P` → "Extensions: Install from VSIX..." → select the `.vsix` file.
