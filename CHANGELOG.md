# Change Log

All notable changes to the "Tailwind CSS Class Sorter" extension will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/).

## [0.0.2] - 2024-12-30

### Changed

- **Simplified language configuration:**
  - New `enabledLanguages` setting: just list language IDs to enable (e.g., `["ruby", "erb"]`) - no regex needed
  - New `customLanguages` setting: add new languages or override built-in patterns
  - Removed the old `languages` setting that required full pattern definitions

### Improved

- Better documentation for local installation (VSIX)
- Clarified that on-save sorting runs **before** formatters, ensuring formatters have final say on code style

## [0.0.1] - 2024-12-30 - Initial release

### Added

- Sort Tailwind CSS classes using the official recommended class order
- Pre-configured patterns for Ruby/Phlex, ERB, HTML, JSX, TSX, and Vue
- Commands: "Sort Classes in Document" and "Sort Classes in Selection"
- Code actions (quick fixes) for sorting classes at cursor position
- Keyboard shortcut: `Ctrl+Alt+T` / `Cmd+Alt+T`
- Optional on-save sorting (disabled by default)
- Optional diagnostics for unsorted classes (disabled by default)
- Support for Tailwind CSS v3 and v4 configurations
- Configurable options: preserve duplicates, preserve whitespace
- Output channel for debugging

### Design Principles

- Non-intrusive: on-save and diagnostics are OFF by default
- Works alongside existing formatters (ruby-lsp, Prettier, etc.)
