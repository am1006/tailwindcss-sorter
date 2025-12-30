import * as vscode from 'vscode';
import { TailwindClassSorter } from '@herb-tools/tailwind-class-sorter';
import type { ExtensionConfig, SortResult } from './types';

/**
 * Manages the TailwindClassSorter instance with caching and workspace awareness.
 * Provides efficient sorting by reusing the sorter instance when config hasn't changed.
 */
export class TailwindSorterService {
  private sorter: TailwindClassSorter | null = null;
  private currentConfigHash: string = '';
  private initPromise: Promise<void> | null = null;
  private outputChannel: vscode.OutputChannel;

  constructor(outputChannel: vscode.OutputChannel) {
    this.outputChannel = outputChannel;
  }

  /**
   * Computes a hash of the configuration to detect changes
   */
  private computeConfigHash(config: ExtensionConfig, workspaceRoot: string): string {
    return JSON.stringify({
      tailwindConfigPath: config.tailwindConfigPath,
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
   * Initialize or reinitialize the sorter if configuration has changed
   */
  async initialize(config: ExtensionConfig): Promise<void> {
    const workspaceRoot = vscode.workspace.workspaceFolders?.[0]?.uri.fsPath ?? process.cwd();
    const newHash = this.computeConfigHash(config, workspaceRoot);

    // If config hasn't changed, reuse existing sorter
    if (this.sorter && this.currentConfigHash === newHash) {
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
    try {
      this.outputChannel.appendLine('Initializing Tailwind sorter...');

      const tailwindConfig = this.resolvePath(config.tailwindConfigPath, workspaceRoot);
      const tailwindStylesheet = this.resolvePath(config.tailwindStylesheetPath, workspaceRoot);

      this.sorter = await TailwindClassSorter.fromConfig({
        tailwindConfig,
        tailwindStylesheet,
        tailwindPreserveDuplicates: config.preserveDuplicates,
        tailwindPreserveWhitespace: config.preserveWhitespace,
        baseDir: workspaceRoot,
      });

      this.currentConfigHash = configHash;
      this.outputChannel.appendLine('Tailwind sorter initialized successfully');
    } catch (error) {
      this.outputChannel.appendLine(`Failed to initialize Tailwind sorter: ${error}`);
      // Create a basic sorter without config
      try {
        this.sorter = await TailwindClassSorter.fromConfig({
          tailwindPreserveDuplicates: config.preserveDuplicates,
          tailwindPreserveWhitespace: config.preserveWhitespace,
        });
        this.currentConfigHash = configHash;
        this.outputChannel.appendLine('Initialized with default Tailwind config');
      } catch (fallbackError) {
        this.outputChannel.appendLine(`Failed to initialize fallback sorter: ${fallbackError}`);
        throw fallbackError;
      }
    }
  }

  /**
   * Sort a class string
   */
  async sortClasses(classString: string, config: ExtensionConfig): Promise<SortResult> {
    await this.initialize(config);

    if (!this.sorter) {
      throw new Error('Tailwind sorter not initialized');
    }

    const sorted = this.sorter.sortClasses(classString);
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
    this.sorter = null;
    this.currentConfigHash = '';
  }
}
