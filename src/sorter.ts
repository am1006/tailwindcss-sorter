import * as vscode from 'vscode';
import type { ExtensionConfig, SortResult } from './types';
import {
  createContext,
  sortClasses,
  findEntryPoint,
  type TailwindContext,
  type ContextLogger,
  type SortLogger,
} from './tailwind';

/**
 * VS Code output channel logger adapter
 */
function createVSCodeLogger(outputChannel: vscode.OutputChannel): ContextLogger {
  return {
    log: (message: string) => outputChannel.appendLine(message),
    error: (message: string) => outputChannel.appendLine(`[ERROR] ${message}`),
  };
}

/**
 * Manages the Tailwind context with caching and workspace awareness.
 * Provides efficient sorting by reusing the context when config hasn't changed.
 */
export class TailwindSorterService {
  private context: TailwindContext | null = null;
  private currentConfigHash: string = '';
  private initPromise: Promise<void> | null = null;
  private outputChannel: vscode.OutputChannel;
  private contextLogger: ContextLogger;
  private sortLogger: SortLogger;

  constructor(outputChannel: vscode.OutputChannel) {
    this.outputChannel = outputChannel;
    this.contextLogger = createVSCodeLogger(outputChannel);
    this.sortLogger = {
      debug: (message: string) => outputChannel.appendLine(`  ${message}`),
    };
  }

  /**
   * Computes a hash of the configuration to detect changes
   */
  private computeConfigHash(config: ExtensionConfig, workspaceRoot: string): string {
    return JSON.stringify({
      tailwindStylesheetPath: config.tailwindStylesheetPath,
      preserveDuplicates: config.preserveDuplicates,
      preserveWhitespace: config.preserveWhitespace,
      workspaceRoot,
    });
  }

  /**
   * Resolves a relative path to an absolute path based on workspace root
   */
  private resolvePath(relativePath: string, workspaceRoot: string): string | undefined {
    if (!relativePath) {
      return undefined;
    }
    if (relativePath.startsWith('/')) {
      return relativePath;
    }
    return vscode.Uri.joinPath(vscode.Uri.file(workspaceRoot), relativePath).fsPath;
  }

  /**
   * Initialize or reinitialize the context if configuration has changed
   */
  async initialize(config: ExtensionConfig): Promise<void> {
    const workspaceRoot = vscode.workspace.workspaceFolders?.[0]?.uri.fsPath ?? process.cwd();
    const newHash = this.computeConfigHash(config, workspaceRoot);

    // If config hasn't changed, reuse existing context
    if (this.context && this.currentConfigHash === newHash) {
      return;
    }

    // If already initializing, wait for that to complete
    if (this.initPromise) {
      await this.initPromise;
      // Check again after waiting
      if (this.currentConfigHash === newHash) {
        return;
      }
    }

    this.initPromise = this.doInitialize(config, workspaceRoot, newHash);
    await this.initPromise;
    this.initPromise = null;
  }

  private async doInitialize(
    config: ExtensionConfig,
    workspaceRoot: string,
    configHash: string
  ): Promise<void> {
    this.outputChannel.appendLine('Initializing Tailwind sorter...');

    // Determine entry point
    const tailwindStylesheet = this.resolvePath(config.tailwindStylesheetPath, workspaceRoot);
    const foundEntryPoint = await findEntryPoint(workspaceRoot);
    const entryPoint = tailwindStylesheet || foundEntryPoint || undefined;

    try {
      const context = await createContext(
        { entryPoint, workspaceRoot },
        this.contextLogger
      );

      this.context = context;
      this.currentConfigHash = configHash;
      this.outputChannel.appendLine('Tailwind sorter initialized successfully');
    } catch (error) {
      this.outputChannel.appendLine(`Failed to initialize Tailwind sorter: ${error}`);
      throw error;
    }
  }

  /**
   * Sort a class string
   */
  async sortClasses(classString: string, config: ExtensionConfig): Promise<SortResult> {
    await this.initialize(config);

    if (!this.context) {
      throw new Error('Tailwind sorter not initialized');
    }

    const sorted = sortClasses(classString, this.context, {
      removeDuplicates: !config.preserveDuplicates,
      collapseWhitespace: !config.preserveWhitespace,
      logger: this.sortLogger,
    });

    const changed = classString !== sorted;

    if (changed) {
      this.outputChannel.appendLine(`Sorted: "${classString}" → "${sorted}"`);
    }

    return {
      original: classString,
      sorted,
      changed,
    };
  }

  /**
   * Check if a class string needs sorting (without actually sorting)
   */
  async needsSorting(classString: string, config: ExtensionConfig): Promise<boolean> {
    const result = await this.sortClasses(classString, config);
    return result.changed;
  }

  /**
   * Dispose of resources
   */
  dispose(): void {
    this.context = null;
    this.currentConfigHash = '';
  }
}
