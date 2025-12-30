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

### From Marketplace

1. Open VS Code
2. Press `Ctrl+P` / `Cmd+P`
3. Type `ext install your-publisher-name.tailwindcss-class-sorter`

Or search for "Tailwind CSS Class Sorter" in the Extensions view.

### Local Installation (without publishing)

1. Clone the repository and install dependencies:
   ```bash
   git clone https://github.com/your-username/tailwindcss-sorter.git
   cd tailwindcss-sorter
   npm install
   ```

2. Build and package the extension:
   ```bash
   npm run package
   npx @vscode/vsce package
   ```

3. Install the generated `.vsix` file:
   - In VS Code, press `Ctrl+Shift+P` / `Cmd+Shift+P`
   - Type "Extensions: Install from VSIX..."
   - Select the generated `tailwindcss-class-sorter-0.0.1.vsix` file

Alternatively, during development:
- Open this folder in VS Code
- Press `F5` to launch the Extension Development Host

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

**How it works with Format on Save:**

When `runOnSave` is enabled, this extension sorts classes **before** your formatter runs. The order is:

1. **This extension** sorts Tailwind classes (via `onWillSaveTextDocument`)
2. **Your formatter** (Prettier, ruby-lsp, etc.) formats the file (via `editor.formatOnSave`)
3. **File is saved**

This ensures your formatter has the final say on code style (indentation, quotes, etc.) while classes remain sorted.

**Note:** This is disabled by default. Most users prefer using the command (`Cmd+Alt+T`) or code actions for more control.

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

By default, the extension is enabled for all built-in languages. You can control which languages to enable.

#### Built-in Languages

- `ruby` - `class: "..."`, `classes: "..."`, `class: %w[...]`
- `erb` - `class="..."`, `class='...'`
- `html` - `class="..."`, `class='...'`
- `javascriptreact` - `className="..."`, `className={'...'}`
- `typescriptreact` - `className="..."`, `className={'...'}`
- `vue` - `class="..."`, `:class="'...'"`

#### Enable Only Specific Languages

To enable sorting for **only certain languages**, use `enabledLanguages`:

```json
{
  "tailwindcss-sorter.enabledLanguages": ["ruby", "erb"]
}
```

This enables sorting **only for Ruby and ERB files** - all other languages will be ignored. No need to define any regex patterns!

#### Adding Custom Languages

To add a new language (or override built-in patterns), use `customLanguages`:

```json
{
  "tailwindcss-sorter.customLanguages": [
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

You can also use `customLanguages` to **override** a built-in language's patterns if needed.

#### Combining Both Settings

You can use both settings together:

```json
{
  "tailwindcss-sorter.enabledLanguages": ["ruby", "html"],
  "tailwindcss-sorter.customLanguages": [
    {
      "languageId": "slim",
      "patterns": [{ "regex": "class=[\"']([^\"']+)[\"']", "captureGroup": 1 }]
    }
  ]
}
```

This enables Ruby and HTML (with built-in patterns) **plus** Slim (with custom patterns).

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

- **ruby-lsp** - No conflicts; this extension runs first, then ruby-lsp formats
- **Prettier** - No conflicts; class sorting happens before Prettier formatting
- **ESLint** - No conflicts
- **Rubocop** - No conflicts

**Why this works safely:**

1. The extension **only modifies** the class string content, never the surrounding syntax
2. When using `runOnSave`, sorting happens **before** formatters run
3. Your formatter gets the final pass, ensuring consistent code style

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

This extension is designed to avoid conflicts:
- Sorting runs **before** formatters when using `runOnSave`
- If you still experience issues, use the command (`Cmd+Alt+T`) or code actions instead of `runOnSave`

## Contributing

Contributions are welcome! Please open an issue or PR on the GitHub repository.

## License

MIT
