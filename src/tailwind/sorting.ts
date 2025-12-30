import type { TailwindContext, SortOptions, SortClassListResult, SortLogger } from './types';

/**
 * Helper to compare bigints for sorting
 */
function bigSign(bigIntValue: bigint): number {
  return Number(bigIntValue > 0n) - Number(bigIntValue < 0n);
}

/**
 * Reorder classes based on Tailwind's ordering
 */
function reorderClasses(
  classList: string[],
  context: TailwindContext,
  logger?: SortLogger
): [string, bigint | null][] {
  const orderedClasses = context.getClassOrder(classList);

  // Log class order values for debugging
  if (logger) {
    const orderInfo = orderedClasses
      .map(([cls, order]) => `${cls}:${order === null ? 'unknown' : order}`)
      .join(' ');
    logger.debug(`Class orders: ${orderInfo}`);
  }

  return orderedClasses.sort(([nameA, a], [nameZ, z]) => {
    // Move `...` to the end of the list (for template literal spreads)
    if (nameA === '...' || nameA === '…') {
      return 1;
    }
    if (nameZ === '...' || nameZ === '…') {
      return -1;
    }

    if (a === z) {
      return 0;
    }
    if (a === null) {
      return -1;
    }
    if (z === null) {
      return 1;
    }
    return bigSign(a - z);
  });
}

/**
 * Sort a class list and optionally remove duplicates
 */
export function sortClassList(
  classList: string[],
  context: TailwindContext,
  removeDuplicates: boolean = true,
  logger?: SortLogger
): SortClassListResult {
  // Re-order classes based on the Tailwind CSS configuration
  let orderedClasses = reorderClasses(classList, context, logger);

  const removedIndices = new Set<number>();

  if (removeDuplicates) {
    const seenClasses = new Set<string>();

    orderedClasses = orderedClasses.filter(([cls, order], index) => {
      if (seenClasses.has(cls)) {
        removedIndices.add(index);
        return false;
      }

      // Only consider known classes when removing duplicates
      if (order !== null) {
        seenClasses.add(cls);
      }

      return true;
    });
  }

  return {
    classList: orderedClasses.map(([className]) => className),
    removedIndices,
  };
}

/**
 * Sort a class string, preserving whitespace and handling edge cases.
 *
 * This is the main entry point for sorting Tailwind classes.
 * It handles:
 * - Whitespace preservation/collapsing
 * - Duplicate removal
 * - Template literal edge cases (ignoreFirst/ignoreLast)
 * - Mustache template syntax ({{...}})
 */
export function sortClasses(
  classStr: string,
  context: TailwindContext,
  options: SortOptions = {}
): string {
  const {
    ignoreFirst = false,
    ignoreLast = false,
    removeDuplicates = true,
    collapseWhitespace = { start: true, end: true },
    logger,
  } = options;

  if (typeof classStr !== 'string' || classStr === '') {
    return classStr;
  }

  // Ignore class attributes containing `{{`, to match Prettier behaviour
  if (classStr.includes('{{')) {
    return classStr;
  }

  // Normalize collapseWhitespace option
  const shouldCollapse = collapseWhitespace === true
    ? { start: true, end: true }
    : collapseWhitespace;

  // This class list is purely whitespace - collapse to single space if enabled
  if (shouldCollapse && /^[\t\r\f\n ]+$/.test(classStr)) {
    return ' ';
  }

  let result = '';
  const parts = classStr.split(/([\t\r\f\n ]+)/);
  let classes = parts.filter((_, i) => i % 2 === 0);
  let whitespace = parts.filter((_, i) => i % 2 !== 0);

  if (classes[classes.length - 1] === '') {
    classes.pop();
  }

  if (shouldCollapse) {
    whitespace = whitespace.map(() => ' ');
  }

  let prefix = '';
  if (ignoreFirst) {
    prefix = `${classes.shift() ?? ''}${whitespace.shift() ?? ''}`;
  }

  let suffix = '';
  if (ignoreLast) {
    suffix = `${whitespace.pop() ?? ''}${classes.pop() ?? ''}`;
  }

  const { classList, removedIndices } = sortClassList(
    classes,
    context,
    removeDuplicates,
    logger
  );

  // Remove whitespace that appeared before removed classes
  whitespace = whitespace.filter((_, index) => !removedIndices.has(index + 1));

  for (let i = 0; i < classList.length; i++) {
    result += `${classList[i]}${whitespace[i] ?? ''}`;
  }

  if (shouldCollapse) {
    prefix = prefix.replace(/\s+$/g, ' ');
    suffix = suffix.replace(/^\s+/g, ' ');

    result = result
      .replace(/^\s+/, shouldCollapse.start ? '' : ' ')
      .replace(/\s+$/, shouldCollapse.end ? '' : ' ');
  }

  return prefix + result + suffix;
}
