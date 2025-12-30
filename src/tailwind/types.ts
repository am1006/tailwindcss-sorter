/**
 * Unified API interface for Tailwind CSS class ordering.
 * Works with both v3 and v4 design systems.
 */
export interface TailwindContext {
  getClassOrder(classList: string[]): [string, bigint | null][];
}

/**
 * Options for sorting classes
 */
export interface SortOptions {
  /** Skip the first class in the list (useful for template literals) */
  ignoreFirst?: boolean;
  /** Skip the last class in the list */
  ignoreLast?: boolean;
  /** Remove duplicate classes */
  removeDuplicates?: boolean;
  /** Collapse multiple whitespace characters to single space */
  collapseWhitespace?: boolean | { start: boolean; end: boolean };
}

/**
 * Result of sorting a class list
 */
export interface SortClassListResult {
  /** The sorted class list */
  classList: string[];
  /** Indices of classes that were removed (duplicates) */
  removedIndices: Set<number>;
}

/**
 * Configuration for creating a Tailwind context
 */
export interface TailwindContextConfig {
  /** Path to the Tailwind v4 CSS entry point */
  entryPoint?: string;
  /** Workspace root for resolving relative paths */
  workspaceRoot?: string;
}
