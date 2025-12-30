import * as assert from 'assert';
import { sortClasses, sortClassList, TailwindContext } from '../../tailwind';

/**
 * Mock TailwindContext for testing sorting logic without loading actual Tailwind.
 * Uses a simplified ordering that mimics Tailwind's actual class order.
 */
function createMockContext(): TailwindContext {
  // Order based on Tailwind's actual sorting: layout > flexbox > spacing > sizing > typography > backgrounds > borders > effects
  const categoryOrder: Record<string, bigint> = {
    // Layout
    'container': 50n,
    'block': 100n,
    'inline-block': 101n,
    'inline': 102n,
    'flex': 103n,
    'inline-flex': 104n,
    'grid': 105n,
    'inline-grid': 106n,
    'hidden': 107n,
    // Position
    'static': 150n,
    'fixed': 151n,
    'absolute': 152n,
    'relative': 153n,
    'sticky': 154n,
    // Z-index
    'z-': 200n,
    // Flexbox & Grid
    'flex-': 250n,
    'grow': 251n,
    'shrink': 252n,
    'order-': 253n,
    'grid-': 260n,
    'col-': 261n,
    'row-': 262n,
    'gap-': 270n,
    'space-': 271n,
    'justify-': 280n,
    'items-': 281n,
    'content-': 282n,
    'self-': 283n,
    'place-': 284n,
    // Spacing
    'p-': 300n,
    'px-': 301n,
    'py-': 302n,
    'pt-': 303n,
    'pr-': 304n,
    'pb-': 305n,
    'pl-': 306n,
    'm-': 310n,
    'mx-': 311n,
    'my-': 312n,
    'mt-': 313n,
    'mr-': 314n,
    'mb-': 315n,
    'ml-': 316n,
    // Sizing
    'w-': 400n,
    'min-w-': 401n,
    'max-w-': 402n,
    'h-': 410n,
    'min-h-': 411n,
    'max-h-': 412n,
    'size-': 420n,
    // Typography
    'font-': 500n,
    'text-': 510n,
    'leading-': 520n,
    'tracking-': 521n,
    'uppercase': 530n,
    'lowercase': 531n,
    'capitalize': 532n,
    'underline': 540n,
    'line-through': 541n,
    'no-underline': 542n,
    // Backgrounds
    'bg-': 600n,
    // Borders
    'border': 700n,
    'border-': 701n,
    'rounded': 710n,
    'rounded-': 711n,
    // Effects
    'shadow': 800n,
    'shadow-': 801n,
    'opacity-': 810n,
    // Transitions & Animation
    'transition': 900n,
    'transition-': 901n,
    'duration-': 910n,
    'ease-': 911n,
    'delay-': 912n,
    'animate-': 920n,
    // Transforms
    'transform': 950n,
    'scale-': 951n,
    'rotate-': 952n,
    'translate-': 953n,
    // Interactivity
    'cursor-': 1000n,
    'select-': 1001n,
    'pointer-events-': 1002n,
  };

  return {
    getClassOrder(classList: string[]): [string, bigint | null][] {
      return classList.map(cls => {
        // Handle variants (sm:, hover:, etc.)
        const baseClass = cls.replace(/^(sm:|md:|lg:|xl:|2xl:|hover:|focus:|active:|disabled:|dark:|group-hover:|peer-focus:)+/, '');

        // Find matching category
        for (const [prefix, order] of Object.entries(categoryOrder)) {
          if (baseClass === prefix.replace(/-$/, '') || baseClass.startsWith(prefix)) {
            // Add small offset for the rest of the class for sub-ordering
            const suffix = baseClass.slice(prefix.length);
            const suffixOrder = suffix ? BigInt(suffix.charCodeAt(0) || 0) : 0n;
            return [cls, order * 1000n + suffixOrder];
          }
        }
        // Unknown class - return null (placed at the beginning)
        return [cls, null];
      });
    },
  };
}

const mockContext = createMockContext();

suite('sortClasses() Tests', () => {
  suite('Basic sorting', () => {
    test('should sort basic Tailwind classes', () => {
      const input = 'p-4 flex mt-2';
      const result = sortClasses(input, mockContext);
      // flex should come before spacing
      assert.ok(result.indexOf('flex') < result.indexOf('p-4'), `Expected flex before p-4, got: ${result}`);
      assert.ok(result.indexOf('flex') < result.indexOf('mt-2'), `Expected flex before mt-2, got: ${result}`);
    });

    test('should handle empty string', () => {
      assert.strictEqual(sortClasses('', mockContext), '');
    });

    test('should handle single class', () => {
      assert.strictEqual(sortClasses('flex', mockContext), 'flex');
    });

    test('should handle whitespace-only string', () => {
      const result = sortClasses('   ', mockContext);
      assert.strictEqual(result, ' ');
    });
  });

  suite('Unknown classes', () => {
    test('should preserve non-Tailwind classes at the beginning', () => {
      const input = 'custom-class flex p-4';
      const result = sortClasses(input, mockContext);
      // Unknown classes (null order) should come first
      assert.ok(result.startsWith('custom-class'), `Expected custom-class at start, got: ${result}`);
    });

    test('should keep multiple unknown classes before known classes', () => {
      // Use class names that won't accidentally match any Tailwind prefixes
      const input = 'unknown-foo unknown-bar flex p-4';
      const result = sortClasses(input, mockContext);
      // Unknown classes (null order) should come before known classes
      const classes = result.split(' ');
      const fooIdx = classes.indexOf('unknown-foo');
      const barIdx = classes.indexOf('unknown-bar');
      const flexIdx = classes.indexOf('flex');
      const p4Idx = classes.indexOf('p-4');

      // Both unknown classes should exist and come before known classes
      assert.ok(fooIdx !== -1, `Expected unknown-foo in result, got: ${result}`);
      assert.ok(barIdx !== -1, `Expected unknown-bar in result, got: ${result}`);
      assert.ok(fooIdx < flexIdx && fooIdx < p4Idx, `Expected unknown-foo before known classes, got: ${result}`);
      assert.ok(barIdx < flexIdx && barIdx < p4Idx, `Expected unknown-bar before known classes, got: ${result}`);
    });
  });

  suite('Duplicate handling', () => {
    test('should remove duplicate classes by default', () => {
      const input = 'flex flex p-4 p-4';
      const result = sortClasses(input, mockContext);
      assert.strictEqual((result.match(/flex/g) || []).length, 1);
      assert.strictEqual((result.match(/p-4/g) || []).length, 1);
    });

    test('should preserve duplicates when option is set', () => {
      const input = 'flex flex p-4';
      const result = sortClasses(input, mockContext, { removeDuplicates: false });
      assert.strictEqual((result.match(/flex/g) || []).length, 2);
    });

    test('should not remove duplicates for unknown classes', () => {
      // Unknown classes should all be preserved since we can't determine if they're truly duplicates
      const input = 'unknown unknown flex';
      const result = sortClasses(input, mockContext);
      // Both unknown classes should remain
      assert.strictEqual((result.match(/unknown/g) || []).length, 2);
    });
  });

  suite('Whitespace handling', () => {
    test('should collapse whitespace by default', () => {
      const input = 'flex   p-4\n\tmt-2';
      const result = sortClasses(input, mockContext);
      assert.ok(!result.includes('  '), 'Should not have double spaces');
      assert.ok(!result.includes('\n'), 'Should not have newlines');
      assert.ok(!result.includes('\t'), 'Should not have tabs');
    });

    test('should preserve whitespace when option is set', () => {
      const input = 'flex   p-4';
      const result = sortClasses(input, mockContext, { collapseWhitespace: false });
      // Whitespace between classes should be preserved
      assert.ok(result.includes('   ') || result.includes('  '));
    });

    test('should handle leading/trailing whitespace', () => {
      const input = '  flex p-4  ';
      const result = sortClasses(input, mockContext);
      // Should be trimmed by default
      assert.ok(!result.startsWith(' '));
      assert.ok(!result.endsWith(' '));
    });
  });

  suite('Template literal support', () => {
    test('should ignore strings containing {{', () => {
      const input = 'flex {{ dynamic }} p-4';
      const result = sortClasses(input, mockContext);
      // Should return unchanged
      assert.strictEqual(result, input);
    });

    test('should handle ignoreFirst option', () => {
      const input = 'prefix-class flex p-4';
      const result = sortClasses(input, mockContext, { ignoreFirst: true });
      // First class should stay first
      assert.ok(result.startsWith('prefix-class'), `Expected prefix-class at start, got: ${result}`);
    });

    test('should handle ignoreLast option', () => {
      const input = 'flex p-4 suffix-class';
      const result = sortClasses(input, mockContext, { ignoreLast: true });
      // Last class should stay last
      assert.ok(result.endsWith('suffix-class'), `Expected suffix-class at end, got: ${result}`);
    });

    test('should handle ... spread at end', () => {
      const input = 'p-4 flex ...';
      const result = sortClasses(input, mockContext);
      assert.ok(result.endsWith('...'), `Expected ... at end, got: ${result}`);
    });

    test('should handle … spread at end', () => {
      const input = 'p-4 flex …';
      const result = sortClasses(input, mockContext);
      assert.ok(result.endsWith('…'), `Expected … at end, got: ${result}`);
    });
  });

  suite('Variant sorting', () => {
    test('should sort responsive variants correctly', () => {
      const input = 'lg:p-8 p-4 sm:p-6';
      const result = sortClasses(input, mockContext);
      // All padding classes should be present
      assert.ok(result.includes('p-4'));
      assert.ok(result.includes('sm:p-6'));
      assert.ok(result.includes('lg:p-8'));
    });

    test('should sort state variants correctly', () => {
      const input = 'hover:bg-blue-600 bg-blue-500 focus:bg-blue-700';
      const result = sortClasses(input, mockContext);
      assert.ok(result.includes('bg-blue-500'));
      assert.ok(result.includes('hover:bg-blue-600'));
      assert.ok(result.includes('focus:bg-blue-700'));
    });
  });
});

suite('sortClassList() Tests', () => {
  test('should return sorted array', () => {
    const input = ['p-4', 'flex', 'mt-2'];
    const { classList } = sortClassList(input, mockContext);
    assert.ok(classList.indexOf('flex') < classList.indexOf('p-4'));
  });

  test('should track removed indices for duplicates', () => {
    const input = ['flex', 'flex', 'p-4'];
    const { classList, removedIndices } = sortClassList(input, mockContext, true);
    assert.strictEqual(classList.length, 2);
    assert.ok(removedIndices.size > 0);
  });

  test('should not remove duplicates when disabled', () => {
    const input = ['flex', 'flex', 'p-4'];
    const { classList, removedIndices } = sortClassList(input, mockContext, false);
    assert.strictEqual(classList.length, 3);
    assert.strictEqual(removedIndices.size, 0);
  });
});
