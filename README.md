# Tailwind CSS Class Sorter

A VS Code extension that sorts Tailwind CSS classes in any file format using configurable regex patterns. Works with Ruby/Phlex, ERB, React, Vue, Angular, and more.

**Non-intrusive by design** - This extension is built to complement your existing workflow. It doesn't interfere with formatters like Prettier, ruby-lsp, or any other language server. You control when and how classes are sorted.

## Features

- **Sort Tailwind classes** using the official recommended class order
- **Any file format** - Configure custom regex patterns for any language
- **Non-intrusive** - Won't interfere with existing formatters
- **Code Actions** - Quick fix suggestions when cursor is on class attributes
- **Commands** - Sort all classes or just selection with keyboard shortcuts
- **Optional on-save** - Disabled by default, enable if you prefer automatic sorting
- **Optional diagnostics** - Show hints for unsorted classes (disabled by default)
- **Tailwind v3 and v4** - Supports both config file formats

## Installation

1. Open VS Code
2. Press `Ctrl+P` / `Cmd+P`
3. Type `ext install your-publisher-name.tailwindcss-class-sorter`

Or search for "Tailwind CSS Class Sorter" in the Extensions view.

## Usage

### Commands

- **`Tailwind CSS: Sort Classes in Document`** - Sort all Tailwind classes in the current file
  - Keyboard shortcut: `Ctrl+Alt+T` / `Cmd+Alt+T`
- **`Tailwind CSS: Sort Classes in Selection`** - Sort classes only in selected text

### Code Actions

When your cursor is on a class attribute with unsorted classes, you'll see a quick fix option "Sort Tailwind CSS classes" in the lightbulb menu (`Ctrl+.` / `Cmd+.`).

### On-Save (Optional)

If you want automatic sorting on save:

```json
{
  "tailwindcss-sorter.runOnSave": true
}
```

**Note:** This is disabled by default to avoid conflicts with other formatters. Most users prefer using the command or code actions.

## Configuration

### Basic Settings

```json
{
  // Enable/disable the extension
  "tailwindcss-sorter.enable": true,

  // Path to tailwind.config.js (relative to workspace, empty for auto-detect)
  "tailwindcss-sorter.tailwindConfigPath": "",

  // Path to Tailwind v4 stylesheet (relative to workspace)
  "tailwindcss-sorter.tailwindStylesheetPath": "",

  // Keep duplicate classes
  "tailwindcss-sorter.preserveDuplicates": false,

  // Preserve whitespace around classes
  "tailwindcss-sorter.preserveWhitespace": false,

  // Auto-sort on save (disabled by default)
  "tailwindcss-sorter.runOnSave": false,

  // Show code actions (quick fixes)
  "tailwindcss-sorter.showCodeActions": true,

  // Show diagnostic hints for unsorted classes
  "tailwindcss-sorter.showDiagnostics": false,

  // Diagnostic severity: "hint", "information", "warning", "error"
  "tailwindcss-sorter.diagnosticSeverity": "hint"
}
```

### Language Configuration

The extension comes pre-configured for common languages. You can customize or add more:

```json
{
  "tailwindcss-sorter.languages": [
    {
      "languageId": "ruby",
      "patterns": [
        {
          "regex": "class:\\s*[\"']([^\"']+)[\"']",
          "captureGroup": 1
        },
        {
          "regex": "classes:\\s*[\"']([^\"']+)[\"']",
          "captureGroup": 1
        },
        {
          "regex": "class:\\s*%w\\[([^\\]]+)\\]",
          "captureGroup": 1
        }
      ]
    },
    {
      "languageId": "html",
      "patterns": [
        {
          "regex": "class=\"([^\"]+)\"",
          "captureGroup": 1
        }
      ]
    }
  ]
}
```

### Pre-configured Languages

The extension includes patterns for:

- **Ruby** - `class: "..."`, `classes: "..."`, `class: %w[...]`
- **ERB** - `class="..."`, `class='...'`
- **HTML** - `class="..."`, `class='...'`
- **JavaScript React (JSX)** - `className="..."`, `className={'...'}`
- **TypeScript React (TSX)** - `className="..."`, `className={'...'}`
- **Vue** - `class="..."`, `:class="'...'"`

### Adding Custom Languages

To add support for a new language:

1. Find the VS Code language identifier (shown in bottom-right of VS Code when editing a file)
2. Create regex patterns that match class attributes in that language
3. Add to your settings:

```json
{
  "tailwindcss-sorter.languages": [
    {
      "languageId": "slim",
      "patterns": [
        {
          "regex": "\\.([a-zA-Z0-9_-]+(?:\\s+[a-zA-Z0-9_-]+)*)",
          "captureGroup": 1
        }
      ]
    }
  ]
}
```

## Ruby / Phlex Example

For Ruby files using Phlex components:

```ruby
# Before sorting
div class: "px-4 bg-blue-500 text-white rounded py-2"

# After sorting
div class: "rounded bg-blue-500 px-4 py-2 text-white"
```

The extension recognizes these Ruby patterns by default:

- `class: "..."` or `class: '...'`
- `classes: "..."` or `classes: '...'`
- `class: %w[...]`

## Works With Other Formatters

This extension is designed to work alongside your existing tools:

- **ruby-lsp** - No conflicts, different concerns
- **Prettier** - No conflicts when using commands/code actions
- **ESLint** - No conflicts
- **Rubocop** - No conflicts

The extension **only modifies** the class string content, never the surrounding syntax.

## Powered By

This extension uses [@herb-tools/tailwind-class-sorter](https://www.npmjs.com/package/@herb-tools/tailwind-class-sorter), which implements the same sorting algorithm as the official [prettier-plugin-tailwindcss](https://github.com/tailwindlabs/prettier-plugin-tailwindcss) from Tailwind Labs.

## Troubleshooting

### Classes not being sorted?

1. Check that the language is configured in `tailwindcss-sorter.languages`
2. Verify your regex pattern matches the class syntax you're using
3. Check the "Tailwind CSS Sorter" output channel for errors

### Wrong sort order?

Make sure your `tailwind.config.js` path is correct, or the extension will use default Tailwind order.

### Conflicts with other extensions?

- Keep `runOnSave: false` (default) and use commands instead
- Or configure your formatter to run first, then this extension

## Contributing

Contributions are welcome! Please open an issue or PR on the GitHub repository.

## License

MIT
