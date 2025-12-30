# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

VS Code extension that sorts Tailwind CSS v4 classes using configurable regex patterns. Built for Ruby/Phlex, ERB, HTML, JSX, TSX, and Vue with user-configurable language support.

**Note: Only Tailwind CSS v4+ is supported.** Uses native sorting logic based on the official prettier-plugin-tailwindcss algorithm via Tailwind's `__unstable__loadDesignSystem` API.

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
├── tailwind/      # Native Tailwind CSS sorting module
│   ├── index.ts   # Public exports
│   ├── types.ts   # Type definitions (TailwindContext, SortOptions, etc.)
│   ├── context.ts # Tailwind v4 design system context loader
│   └── sorting.ts # Core sorting algorithm (sortClasses, sortClassList)
└── test/          # Mocha tests (extension.test.ts for integration, matcher.test.ts for patterns)
```

**Flow:** `extension.ts` → `config.ts` (get settings) → `matcher.ts` (find class strings via regex) → `sorter.ts` (sort using native tailwind module)

**Key design decisions:**
- Non-intrusive: `runOnSave` and `showDiagnostics` are OFF by default to avoid conflicts with other formatters
- `onWillSaveTextDocument` ensures sorting runs **before** formatters (format on save), so formatters get final say on code style
- Code action provider offers quick fixes only when classes need sorting
- Sorter instance is cached and only reinitialized when config changes (hash comparison)
- **Two-tier language config:**
  - `enabledLanguages`: simple array to pick which built-in languages to enable (empty = all)
  - `customLanguages`: add new languages or override built-in patterns
  - Logic: built-in → filter by enabledLanguages → merge customLanguages

## Testing the Extension

Press F5 in VS Code to launch Extension Development Host.

## Local Installation (without marketplace)

```bash
npm run package                    # Build for production
npx @vscode/vsce package           # Creates .vsix file
```

Then in VS Code: `Cmd+Shift+P` → "Extensions: Install from VSIX..." → select the `.vsix` file.
