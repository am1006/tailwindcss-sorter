# Change Log

All notable changes to the "Tailwind CSS Class Sorter" extension will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/).

## [0.0.1] - Initial Release

### Added

- Sort Tailwind CSS classes using the official recommended class order
- Support for configurable regex patterns per language
- Pre-configured patterns for Ruby/Phlex, ERB, HTML, JSX, TSX, and Vue
- Commands: "Sort Classes in Document" and "Sort Classes in Selection"
- Code actions (quick fixes) for sorting classes at cursor position
- Keyboard shortcut: `Ctrl+Alt+T` / `Cmd+Alt+T`
- Optional on-save sorting (disabled by default)
- Optional diagnostics for unsorted classes (disabled by default)
- Support for Tailwind CSS v3 and v4 configurations
- Configurable options: preserve duplicates, preserve whitespace
- Output channel for debugging

### Notes

- Designed to be non-intrusive and work alongside existing formatters
- On-save sorting is disabled by default to avoid conflicts with other formatters
