import * as vscode from 'vscode';

/**
 * Configuration for a regex pattern that matches class attributes
 */
export interface PatternConfig {
  /** The regex pattern string */
  regex: string;
  /** The capture group index that contains the class string (default: 1) */
  captureGroup?: number;
}

/**
 * Language-specific configuration for finding class attributes
 */
export interface LanguageConfig {
  /** VS Code language identifier (e.g., 'ruby', 'html', 'javascriptreact') */
  languageId: string;
  /** Patterns to match class attributes in this language */
  patterns: PatternConfig[];
}

/**
 * Extension configuration from VS Code settings
 */
export interface ExtensionConfig {
  /** Enable/disable the extension */
  enable: boolean;
  /** Path to tailwind.config.js (relative to workspace) */
  tailwindConfigPath: string;
  /** Path to Tailwind v4 stylesheet (relative to workspace) */
  tailwindStylesheetPath: string;
  /** Preserve duplicate classes */
  preserveDuplicates: boolean;
  /** Preserve whitespace around classes */
  preserveWhitespace: boolean;
  /** Language configurations */
  languages: LanguageConfig[];
  /** Auto-sort on save */
  runOnSave: boolean;
  /** Show code actions for sorting */
  showCodeActions: boolean;
  /** Show diagnostics for unsorted classes */
  showDiagnostics: boolean;
  /** Severity level for diagnostics */
  diagnosticSeverity: 'hint' | 'information' | 'warning' | 'error';
}

/**
 * A match found in the document for a class attribute
 */
export interface ClassMatch {
  /** The full match including the attribute syntax */
  fullMatch: string;
  /** Just the class string content */
  classString: string;
  /** Start position in the document */
  startOffset: number;
  /** End position of the class string within the full match */
  classStartOffset: number;
  /** The range of the class string in the document */
  range: vscode.Range;
}

/**
 * Result of sorting operation
 */
export interface SortResult {
  /** Original class string */
  original: string;
  /** Sorted class string */
  sorted: string;
  /** Whether classes were changed */
  changed: boolean;
}

/**
 * Diagnostic severity mapping
 */
export const SEVERITY_MAP: Record<string, vscode.DiagnosticSeverity> = {
  hint: vscode.DiagnosticSeverity.Hint,
  information: vscode.DiagnosticSeverity.Information,
  warning: vscode.DiagnosticSeverity.Warning,
  error: vscode.DiagnosticSeverity.Error,
};
