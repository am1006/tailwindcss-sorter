import * as fs from 'fs/promises';
import * as path from 'path';
import type { TailwindContext, TailwindContextConfig } from './types';

// Import tailwindcss v4 from the extension's bundled dependencies
const tailwindcss = require('tailwindcss');

/**
 * Logger interface for context creation
 */
export interface ContextLogger {
  log(message: string): void;
  error(message: string): void;
}

/**
 * Default console logger
 */
export const consoleLogger: ContextLogger = {
  log: (msg) => console.log(`[tailwind] ${msg}`),
  error: (msg) => console.error(`[tailwind] ${msg}`),
};

/**
 * Common locations for Tailwind CSS v4 entry points
 */
const COMMON_ENTRY_POINTS = [
  // Rails conventions
  'app/assets/tailwind/application.css',
  'app/assets/stylesheets/application.tailwind.css',
  'app/assets/stylesheets/application.css',
  // Common web project conventions
  'src/styles/tailwind.css',
  'src/tailwind.css',
  'src/app.css',
  'src/index.css',
  'styles/tailwind.css',
  'styles/app.css',
  'css/tailwind.css',
  'tailwind.css',
  'app.css',
];

/**
 * Try to find a Tailwind CSS entry point in common locations
 */
export async function findEntryPoint(workspaceRoot: string): Promise<string | null> {
  for (const cssPath of COMMON_ENTRY_POINTS) {
    const fullPath = path.join(workspaceRoot, cssPath);
    try {
      await fs.access(fullPath);
      return fullPath;
    } catch {
      // File doesn't exist, continue
    }
  }
  return null;
}

/**
 * Get the default Tailwind v4 theme path from the bundled package
 */
export function getDefaultThemePath(): string {
  const tailwindPkgPath = path.dirname(require.resolve('tailwindcss/package.json'));
  return path.join(tailwindPkgPath, 'theme.css');
}

/**
 * Create a Tailwind v4 context using the design system API.
 *
 * This uses the `__unstable__loadDesignSystem` API from Tailwind CSS v4
 * to load the design system and get class ordering information.
 */
export async function createContext(
  config: TailwindContextConfig = {},
  logger: ContextLogger = consoleLogger
): Promise<TailwindContext> {
  if (typeof tailwindcss.__unstable__loadDesignSystem !== 'function') {
    throw new Error(
      'Tailwind CSS v4 is required. The bundled tailwindcss package does not have the v4 API.'
    );
  }

  // Determine the CSS entry point
  let cssPath: string | undefined = config.entryPoint;

  if (!cssPath && config.workspaceRoot) {
    const found = await findEntryPoint(config.workspaceRoot);
    cssPath = found || undefined;
  }

  if (!cssPath) {
    cssPath = getDefaultThemePath();
    logger.log('Using default Tailwind v4 theme');
  }

  logger.log(`Loading design system from: ${cssPath}`);

  try {
    const css = await fs.readFile(cssPath, 'utf-8');
    const importBasePath = path.dirname(cssPath);

    const design = await tailwindcss.__unstable__loadDesignSystem(css, {
      base: importBasePath,

      // Handle @plugin and @config directives
      // We return empty modules since plugins aren't needed for sorting
      loadModule: async (id: string, base: string) => {
        logger.log(`Skipping module: ${id} (not needed for sorting)`);
        return { base, module: {} };
      },

      // Handle @import directives
      loadStylesheet: async (id: string, base: string) => {
        // First, try relative resolution
        try {
          const resolved = path.resolve(base, id);
          const content = await fs.readFile(resolved, 'utf-8');
          return { base: path.dirname(resolved), content };
        } catch {
          // Try node_modules resolution for tailwindcss imports
          try {
            // Handle bare "tailwindcss" import (resolves to tailwindcss/index.css)
            // and "tailwindcss/..." imports
            let moduleId: string;
            if (id === 'tailwindcss') {
              moduleId = 'tailwindcss/index.css';
            } else if (id.startsWith('tailwindcss/')) {
              moduleId = id;
            } else {
              // Try as-is for other packages
              moduleId = id;
            }
            const pkgPath = require.resolve(moduleId);
            const content = await fs.readFile(pkgPath, 'utf-8');
            return { base: path.dirname(pkgPath), content };
          } catch {
            logger.error(`Could not load stylesheet: ${id}`);
            return { base, content: '' };
          }
        }
      },
    });

    logger.log('Design system loaded successfully');

    return {
      getClassOrder: (classList: string[]) => design.getClassOrder(classList),
    };
  } catch (error) {
    logger.error(`Failed to load design system: ${error}`);
    throw error;
  }
}
