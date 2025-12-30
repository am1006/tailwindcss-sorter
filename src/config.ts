import * as vscode from 'vscode';
import type { ExtensionConfig, LanguageConfig } from './types';

const CONFIG_SECTION = 'tailwindcss-sorter';

/**
 * Built-in language configurations
 */
const BUILTIN_LANGUAGES: LanguageConfig[] = [
  {
    languageId: 'ruby',
    patterns: [
      { regex: 'class:\\s*["\']([^"\']+)["\']', captureGroup: 1 },
      { regex: 'classes:\\s*["\']([^"\']+)["\']', captureGroup: 1 },
      { regex: 'class:\\s*%w\\[([^\\]]+)\\]', captureGroup: 1 },
    ],
  },
  {
    languageId: 'erb',
    patterns: [
      { regex: 'class="([^"]+)"', captureGroup: 1 },
      { regex: "class='([^']+)'", captureGroup: 1 },
    ],
  },
  {
    languageId: 'html',
    patterns: [
      { regex: 'class="([^"]+)"', captureGroup: 1 },
      { regex: "class='([^']+)'", captureGroup: 1 },
    ],
  },
  {
    languageId: 'javascriptreact',
    patterns: [
      { regex: 'className="([^"]+)"', captureGroup: 1 },
      { regex: "className='([^']+)'", captureGroup: 1 },
      { regex: 'className={["\'`]([^"\'`]+)["\'`]}', captureGroup: 1 },
    ],
  },
  {
    languageId: 'typescriptreact',
    patterns: [
      { regex: 'className="([^"]+)"', captureGroup: 1 },
      { regex: "className='([^']+)'", captureGroup: 1 },
      { regex: 'className={["\'`]([^"\'`]+)["\'`]}', captureGroup: 1 },
    ],
  },
  {
    languageId: 'vue',
    patterns: [
      { regex: 'class="([^"]+)"', captureGroup: 1 },
      { regex: ':class="\'([^\']+)\'"', captureGroup: 1 },
    ],
  },
];

/**
 * Get the current extension configuration
 */
export function getConfig(): ExtensionConfig {
  const config = vscode.workspace.getConfiguration(CONFIG_SECTION);

  return {
    enable: config.get<boolean>('enable', true),
    tailwindConfigPath: config.get<string>('tailwindConfigPath', ''),
    tailwindStylesheetPath: config.get<string>('tailwindStylesheetPath', ''),
    preserveDuplicates: config.get<boolean>('preserveDuplicates', false),
    preserveWhitespace: config.get<boolean>('preserveWhitespace', false),
    enabledLanguages: config.get<string[]>('enabledLanguages', []),
    customLanguages: config.get<LanguageConfig[]>('customLanguages', []),
    runOnSave: config.get<boolean>('runOnSave', false),
    showCodeActions: config.get<boolean>('showCodeActions', true),
    showDiagnostics: config.get<boolean>('showDiagnostics', false),
    diagnosticSeverity: config.get<'hint' | 'information' | 'warning' | 'error'>(
      'diagnosticSeverity',
      'hint'
    ),
  };
}

/**
 * Get the effective language configurations by merging built-in and custom.
 *
 * Logic:
 * 1. Start with built-in languages
 * 2. Filter by enabledLanguages (if not empty)
 * 3. Merge customLanguages (override existing or add new)
 */
export function getEffectiveLanguages(): LanguageConfig[] {
  const config = getConfig();

  // Start with built-in languages
  let languages = [...BUILTIN_LANGUAGES];

  // Filter by enabledLanguages if specified
  if (config.enabledLanguages.length > 0) {
    languages = languages.filter((lang) =>
      config.enabledLanguages.includes(lang.languageId)
    );
  }

  // Merge custom languages (override or add)
  for (const custom of config.customLanguages) {
    const existingIndex = languages.findIndex(
      (lang) => lang.languageId === custom.languageId
    );
    if (existingIndex >= 0) {
      // Override existing
      languages[existingIndex] = custom;
    } else {
      // Add new
      languages.push(custom);
    }
  }

  return languages;
}

/**
 * Get language config for a specific language ID
 */
export function getLanguageConfig(languageId: string): LanguageConfig | undefined {
  return getEffectiveLanguages().find((lang) => lang.languageId === languageId);
}

/**
 * Check if a language is supported
 */
export function isLanguageSupported(languageId: string): boolean {
  return getLanguageConfig(languageId) !== undefined;
}

/**
 * Get all supported language IDs
 */
export function getSupportedLanguageIds(): string[] {
  return getEffectiveLanguages().map((lang) => lang.languageId);
}

/**
 * Get list of built-in language IDs (for documentation/UI)
 */
export function getBuiltinLanguageIds(): string[] {
  return BUILTIN_LANGUAGES.map((lang) => lang.languageId);
}
