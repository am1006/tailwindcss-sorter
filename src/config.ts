import * as vscode from 'vscode';
import type { ExtensionConfig, LanguageConfig } from './types';

const CONFIG_SECTION = 'tailwindcss-sorter';

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
    languages: config.get<LanguageConfig[]>('languages', getDefaultLanguages()),
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
 * Get language config for a specific language ID
 */
export function getLanguageConfig(languageId: string): LanguageConfig | undefined {
  const config = getConfig();
  return config.languages.find((lang) => lang.languageId === languageId);
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
  return getConfig().languages.map((lang) => lang.languageId);
}

/**
 * Default language configurations
 */
function getDefaultLanguages(): LanguageConfig[] {
  return [
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
}
