import * as vscode from 'vscode';
import { TailwindSorterService } from './sorter';
import { getConfig, getLanguageConfig, getSupportedLanguageIds } from './config';
import { findClassMatches, findMatchAtPosition, findMatchesInSelection } from './matcher';
import type { ClassMatch, ExtensionConfig } from './types';
import { SEVERITY_MAP } from './types';

let sorterService: TailwindSorterService;
let outputChannel: vscode.OutputChannel;
let diagnosticCollection: vscode.DiagnosticCollection;

export function activate(context: vscode.ExtensionContext): void {
  outputChannel = vscode.window.createOutputChannel('Tailwind CSS Sorter');
  diagnosticCollection = vscode.languages.createDiagnosticCollection('tailwindcss-sorter');
  sorterService = new TailwindSorterService(outputChannel);

  outputChannel.appendLine('Tailwind CSS Class Sorter is now active');

  // Register commands
  context.subscriptions.push(
    vscode.commands.registerCommand('tailwindcss-sorter.sortClasses', () =>
      sortClassesInDocument()
    ),
    vscode.commands.registerCommand('tailwindcss-sorter.sortClassesInSelection', () =>
      sortClassesInSelection()
    )
  );

  // Register code action provider for all supported languages
  const supportedLanguages = getSupportedLanguageIds();
  if (supportedLanguages.length > 0) {
    context.subscriptions.push(
      vscode.languages.registerCodeActionsProvider(
        supportedLanguages.map((lang) => ({ language: lang })),
        new TailwindSortCodeActionProvider(),
        {
          providedCodeActionKinds: TailwindSortCodeActionProvider.providedCodeActionKinds,
        }
      )
    );
  }

  // Register on-save handler (only if enabled)
  context.subscriptions.push(
    vscode.workspace.onWillSaveTextDocument((event) => {
      const config = getConfig();
      if (config.enable && config.runOnSave) {
        event.waitUntil(getSortEditsForDocument(event.document));
      }
    })
  );

  // Register diagnostics update on document change
  context.subscriptions.push(
    vscode.workspace.onDidChangeTextDocument((event) => {
      const config = getConfig();
      if (config.enable && config.showDiagnostics) {
        updateDiagnostics(event.document);
      }
    }),
    vscode.workspace.onDidOpenTextDocument((document) => {
      const config = getConfig();
      if (config.enable && config.showDiagnostics) {
        updateDiagnostics(document);
      }
    })
  );

  // Listen for configuration changes
  context.subscriptions.push(
    vscode.workspace.onDidChangeConfiguration((event) => {
      if (event.affectsConfiguration('tailwindcss-sorter')) {
        outputChannel.appendLine('Configuration changed, reinitializing...');
        // Clear diagnostics if they were disabled
        const config = getConfig();
        if (!config.showDiagnostics) {
          diagnosticCollection.clear();
        }
      }
    })
  );

  // Cleanup
  context.subscriptions.push(
    outputChannel,
    diagnosticCollection,
    { dispose: () => sorterService.dispose() }
  );
}

export function deactivate(): void {
  sorterService?.dispose();
}

/**
 * Sort all Tailwind classes in the current document
 */
async function sortClassesInDocument(): Promise<void> {
  const editor = vscode.window.activeTextEditor;
  if (!editor) {
    vscode.window.showWarningMessage('No active editor');
    return;
  }

  const config = getConfig();
  if (!config.enable) {
    vscode.window.showInformationMessage('Tailwind CSS Sorter is disabled');
    return;
  }

  const languageConfig = getLanguageConfig(editor.document.languageId);
  if (!languageConfig) {
    vscode.window.showInformationMessage(
      `Language '${editor.document.languageId}' is not configured. Add it to tailwindcss-sorter.languages in settings.`
    );
    return;
  }

  try {
    const edits = await getSortEditsForDocument(editor.document);
    if (edits.length === 0) {
      vscode.window.showInformationMessage('All Tailwind classes are already sorted');
      return;
    }

    const success = await editor.edit((editBuilder) => {
      for (const edit of edits) {
        editBuilder.replace(edit.range, edit.newText);
      }
    });

    if (success) {
      vscode.window.showInformationMessage(`Sorted ${edits.length} class attribute(s)`);
    }
  } catch (error) {
    outputChannel.appendLine(`Error sorting classes: ${error}`);
    vscode.window.showErrorMessage(`Failed to sort classes: ${error}`);
  }
}

/**
 * Sort Tailwind classes in the current selection
 */
async function sortClassesInSelection(): Promise<void> {
  const editor = vscode.window.activeTextEditor;
  if (!editor) {
    vscode.window.showWarningMessage('No active editor');
    return;
  }

  const config = getConfig();
  if (!config.enable) {
    vscode.window.showInformationMessage('Tailwind CSS Sorter is disabled');
    return;
  }

  const languageConfig = getLanguageConfig(editor.document.languageId);
  if (!languageConfig) {
    vscode.window.showInformationMessage(
      `Language '${editor.document.languageId}' is not configured`
    );
    return;
  }

  try {
    const matches = findMatchesInSelection(editor.document, editor.selection, languageConfig);
    if (matches.length === 0) {
      vscode.window.showInformationMessage('No class attributes found in selection');
      return;
    }

    const edits = await getEditsForMatches(matches, config);
    if (edits.length === 0) {
      vscode.window.showInformationMessage('All classes in selection are already sorted');
      return;
    }

    const success = await editor.edit((editBuilder) => {
      for (const edit of edits) {
        editBuilder.replace(edit.range, edit.newText);
      }
    });

    if (success) {
      vscode.window.showInformationMessage(`Sorted ${edits.length} class attribute(s)`);
    }
  } catch (error) {
    outputChannel.appendLine(`Error sorting classes: ${error}`);
    vscode.window.showErrorMessage(`Failed to sort classes: ${error}`);
  }
}

/**
 * Get text edits for sorting all classes in a document
 */
async function getSortEditsForDocument(
  document: vscode.TextDocument
): Promise<vscode.TextEdit[]> {
  const config = getConfig();
  if (!config.enable) {
    return [];
  }

  const languageConfig = getLanguageConfig(document.languageId);
  if (!languageConfig) {
    return [];
  }

  const matches = findClassMatches(document, languageConfig);
  return getEditsForMatches(matches, config);
}

/**
 * Get text edits for a list of matches
 */
async function getEditsForMatches(
  matches: ClassMatch[],
  config: ExtensionConfig
): Promise<vscode.TextEdit[]> {
  const edits: vscode.TextEdit[] = [];

  for (const match of matches) {
    try {
      const result = await sorterService.sortClasses(match.classString, config);
      if (result.changed) {
        edits.push(vscode.TextEdit.replace(match.range, result.sorted));
      }
    } catch (error) {
      outputChannel.appendLine(`Error sorting class string: ${error}`);
    }
  }

  return edits;
}

/**
 * Update diagnostics for a document
 */
async function updateDiagnostics(document: vscode.TextDocument): Promise<void> {
  const config = getConfig();
  if (!config.enable || !config.showDiagnostics) {
    diagnosticCollection.delete(document.uri);
    return;
  }

  const languageConfig = getLanguageConfig(document.languageId);
  if (!languageConfig) {
    diagnosticCollection.delete(document.uri);
    return;
  }

  const matches = findClassMatches(document, languageConfig);
  const diagnostics: vscode.Diagnostic[] = [];
  const severity = SEVERITY_MAP[config.diagnosticSeverity] ?? vscode.DiagnosticSeverity.Hint;

  for (const match of matches) {
    try {
      const needsSorting = await sorterService.needsSorting(match.classString, config);
      if (needsSorting) {
        const diagnostic = new vscode.Diagnostic(
          match.range,
          'Tailwind classes are not sorted',
          severity
        );
        diagnostic.source = 'tailwindcss-sorter';
        diagnostic.code = 'unsorted-classes';
        diagnostics.push(diagnostic);
      }
    } catch {
      // Ignore errors when checking diagnostics
    }
  }

  diagnosticCollection.set(document.uri, diagnostics);
}

/**
 * Code action provider for sorting Tailwind classes
 */
class TailwindSortCodeActionProvider implements vscode.CodeActionProvider {
  static readonly providedCodeActionKinds = [
    vscode.CodeActionKind.QuickFix,
    vscode.CodeActionKind.Source,
  ];

  async provideCodeActions(
    document: vscode.TextDocument,
    range: vscode.Range | vscode.Selection,
    context: vscode.CodeActionContext
  ): Promise<vscode.CodeAction[]> {
    const config = getConfig();
    if (!config.enable || !config.showCodeActions) {
      return [];
    }

    const languageConfig = getLanguageConfig(document.languageId);
    if (!languageConfig) {
      return [];
    }

    const actions: vscode.CodeAction[] = [];

    // Check if cursor is on a class attribute
    const match = findMatchAtPosition(document, range.start, languageConfig);
    if (match) {
      try {
        const needsSorting = await sorterService.needsSorting(match.classString, config);
        if (needsSorting) {
          const sortAction = new vscode.CodeAction(
            'Sort Tailwind CSS classes',
            vscode.CodeActionKind.QuickFix
          );
          sortAction.edit = new vscode.WorkspaceEdit();
          const result = await sorterService.sortClasses(match.classString, config);
          sortAction.edit.replace(document.uri, match.range, result.sorted);
          sortAction.isPreferred = true;
          actions.push(sortAction);
        }
      } catch {
        // Ignore errors when providing code actions
      }
    }

    // Also provide a source action to sort all classes in document
    if (context.only?.contains(vscode.CodeActionKind.Source) || context.triggerKind === vscode.CodeActionTriggerKind.Invoke) {
      const sortAllAction = new vscode.CodeAction(
        'Sort all Tailwind CSS classes in document',
        vscode.CodeActionKind.Source
      );
      sortAllAction.command = {
        command: 'tailwindcss-sorter.sortClasses',
        title: 'Sort all Tailwind CSS classes',
      };
      actions.push(sortAllAction);
    }

    return actions;
  }
}
