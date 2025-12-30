/**
 * Tailwind CSS v4 Class Sorting Module
 *
 * This module provides functionality for sorting Tailwind CSS classes
 * based on the official sorting algorithm from prettier-plugin-tailwindcss.
 *
 * Note: This module only supports Tailwind CSS v4+
 *
 * @example
 * ```typescript
 * import { createContext, sortClasses } from './tailwind';
 *
 * const context = await createContext({ workspaceRoot: '/path/to/project' });
 * const sorted = sortClasses('p-4 flex mt-2', context);
 * // => 'flex mt-2 p-4'
 * ```
 */

// Types
export type {
  TailwindContext,
  TailwindContextConfig,
  SortOptions,
  SortClassListResult,
  SortLogger,
} from './types';

// Context creation
export {
  createContext,
  findEntryPoint,
  getDefaultThemePath,
  consoleLogger,
  type ContextLogger,
} from './context';

// Sorting functions
export {
  sortClasses,
  sortClassList,
} from './sorting';
