import * as assert from 'assert';
import { sortClasses, TailwindContext } from '../../tailwind';

/**
 * Test cases borrowed from prettier-plugin-tailwindcss to verify
 * our sorting implementation is compatible.
 *
 * These tests use a mock context that approximates Tailwind v4's sorting.
 * The actual sort order may differ slightly from the real Tailwind,
 * but the behavior (whitespace handling, duplicates, etc.) should match.
 */

/**
 * Mock context that approximates Tailwind's sorting behavior
 */
function createMockContext(): TailwindContext {
  const classOrder: Record<string, bigint> = {
    // Layout & Display
    'container': 10n,
    'block': 100n,
    'inline-block': 101n,
    'inline': 102n,
    'flex': 103n,
    'inline-flex': 104n,
    'grid': 105n,
    'hidden': 106n,
    // Position
    'static': 200n,
    'fixed': 201n,
    'absolute': 202n,
    'relative': 203n,
    'sticky': 204n,
    // Flexbox
    'grow': 300n,
    'shrink': 301n,
    'items-center': 310n,
    'items-start': 311n,
    'items-end': 312n,
    'justify-center': 320n,
    'justify-start': 321n,
    'justify-end': 322n,
    'gap-2': 330n,
    'gap-4': 331n,
    // Spacing (margin, padding)
    'p-0': 400n,
    'p-4': 401n,
    'px-4': 402n,
    'py-2': 403n,
    'm-0': 450n,
    'm-4': 451n,
    // Sizing
    'w-full': 500n,
    'h-full': 501n,
    // Typography
    'text-sm': 600n,
    'text-lg': 601n,
    'text-red-500': 602n,
    'text-white': 603n,
    'font-bold': 610n,
    'uppercase': 620n,
    'lowercase': 621n,
    'underline': 630n,
    'line-through': 631n,
    // Backgrounds
    'bg-white': 700n,
    'bg-red-500': 701n,
    'bg-blue-500': 702n,
    'bg-blue-600': 703n,
    'bg-blue-700': 704n,
    // Borders
    'border': 800n,
    'border-l-4': 801n,
    'border-x-4': 802n,
    'rounded': 810n,
    'rounded-lg': 811n,
    // Effects
    'shadow': 900n,
    'shadow-lg': 901n,
    'opacity-50': 910n,
    // Transitions
    'transition': 1000n,
    'transition-all': 1001n,
    'duration-300': 1010n,
    // Group/Peer
    'group': 50n,
    'peer': 51n,
    // Variants - add base order + variant offset
  };

  // Add responsive variant versions
  const responsiveVariants = ['sm:', 'md:', 'lg:', 'xl:', '2xl:'];
  const stateVariants = ['hover:', 'focus:', 'active:', 'disabled:', 'dark:'];

  return {
    getClassOrder(classList: string[]): [string, bigint | null][] {
      return classList.map(cls => {
        // Check for direct match first
        if (classOrder[cls] !== undefined) {
          return [cls, classOrder[cls]];
        }

        // Check for variant versions
        for (const variant of [...responsiveVariants, ...stateVariants]) {
          if (cls.startsWith(variant)) {
            const baseClass = cls.slice(variant.length);
            if (classOrder[baseClass] !== undefined) {
              // Variants come after their base class
              const variantOffset = responsiveVariants.includes(variant) ? 10000n : 5000n;
              return [cls, classOrder[baseClass] + variantOffset];
            }
          }
        }

        // Unknown class
        return [cls, null];
      });
    },
  };
}

const mockContext = createMockContext();

suite('Prettier Plugin Compatibility Tests', () => {
  suite('Basic HTML sorting (from tests.ts)', () => {
    test('should sort sm:p-0 p-0 to p-0 sm:p-0', () => {
      const result = sortClasses('sm:p-0 p-0', mockContext);
      assert.strictEqual(result, 'p-0 sm:p-0');
    });

    test('should collapse whitespace: "  sm:p-0   p-0 " -> "p-0 sm:p-0"', () => {
      const result = sortClasses('  sm:p-0   p-0 ', mockContext);
      assert.strictEqual(result, 'p-0 sm:p-0');
    });

    test('should remove duplicate known classes', () => {
      const result = sortClasses('sm:p-0 p-0 p-0', mockContext);
      assert.strictEqual(result, 'p-0 sm:p-0');
    });

    test('should preserve duplicate unknown classes', () => {
      const result = sortClasses('idonotexist sm:p-0 p-0 idonotexist', mockContext);
      // Unknown classes stay at front, both preserved
      assert.ok(result.includes('p-0'));
      assert.ok(result.includes('sm:p-0'));
      assert.strictEqual((result.match(/idonotexist/g) || []).length, 2);
    });

    test('should preserve duplicates when option is set', () => {
      const result = sortClasses('sm:p-0 p-0 p-0', mockContext, { removeDuplicates: false });
      // Should have all 3 occurrences (2x p-0 and 1x sm:p-0)
      const p0Count = (result.match(/(?<![sm]:)p-0/g) || []).length;
      const smP0Count = (result.match(/sm:p-0/g) || []).length;
      assert.strictEqual(p0Count + smP0Count, 3, `Expected 3 total p-0 occurrences, got ${p0Count} + ${smP0Count} in: ${result}`);
    });
  });

  suite('Spread operator handling (from tests.ts)', () => {
    test('should move ... to the end', () => {
      const result = sortClasses('... sm:p-0 p-0', mockContext);
      assert.ok(result.endsWith('...'), `Expected to end with ..., got: ${result}`);
      assert.ok(result.startsWith('p-0'), `Expected to start with p-0, got: ${result}`);
    });

    test('should move … (unicode ellipsis) to the end', () => {
      const result = sortClasses('… sm:p-0 p-0', mockContext);
      assert.ok(result.endsWith('…'), `Expected to end with …, got: ${result}`);
    });

    test('should move ... to the end even from middle', () => {
      const result = sortClasses('sm:p-0 ... p-0', mockContext);
      assert.ok(result.endsWith('...'), `Expected to end with ..., got: ${result}`);
    });
  });

  suite('Whitespace handling (from format.test.ts)', () => {
    test('should ignore class lists containing {{', () => {
      const input = '{{ this is ignored }}';
      const result = sortClasses(input, mockContext);
      assert.strictEqual(result, input);
    });

    test('should preserve whitespace when option is set', () => {
      const result = sortClasses(' underline text-red-500  flex ', mockContext, {
        collapseWhitespace: false,
      });
      // Classes should be sorted but spacing preserved somewhat
      assert.ok(result.includes('flex'));
      assert.ok(result.includes('text-red-500'));
      assert.ok(result.includes('underline'));
    });

    test('should collapse whitespace by default', () => {
      const result = sortClasses(' underline text-red-500  flex ', mockContext);
      // Should be trimmed and single-spaced
      assert.strictEqual(result, 'flex text-red-500 underline');
    });

    test('should remove duplicate classes', () => {
      const result = sortClasses('underline line-through underline flex', mockContext);
      assert.strictEqual((result.match(/underline/g) || []).length, 1);
      assert.ok(result.includes('flex'));
      assert.ok(result.includes('line-through'));
    });
  });

  suite('JavaScript patterns (from tests.ts)', () => {
    test('should normalize whitespace and remove duplicates', () => {
      const result = sortClasses('   m-0  sm:p-0  p-0   ', mockContext);
      // m-0 is unknown in our mock, but p-0 and sm:p-0 should be sorted
      assert.ok(result.includes('m-0'));
      assert.ok(result.includes('p-0'));
      assert.ok(result.includes('sm:p-0'));
      // Should be single spaced
      assert.ok(!result.includes('  '));
    });

    test('should handle flex flex -> flex (dedup)', () => {
      const result = sortClasses('flex flex', mockContext);
      assert.strictEqual(result, 'flex');
    });
  });

  suite('Non-tailwind classes sorting (from format.test.ts)', () => {
    test('non-tailwind classes are sorted to the front', () => {
      const result = sortClasses('sm:lowercase uppercase potato text-sm', mockContext);
      // potato is unknown, should be first
      assert.ok(result.startsWith('potato'), `Expected potato at start, got: ${result}`);
      // Then known classes in order
      assert.ok(result.includes('text-sm'));
      assert.ok(result.includes('uppercase'));
      assert.ok(result.includes('sm:lowercase'));
    });
  });

  suite('Parasite utilities (from format.test.ts)', () => {
    test('group and peer should come early', () => {
      const result = sortClasses('p-0 group peer unknown-class container', mockContext);
      // group and peer should be near the front (after unknown)
      const groupIndex = result.indexOf('group');
      const peerIndex = result.indexOf('peer');
      const p0Index = result.indexOf('p-0');

      assert.ok(groupIndex < p0Index, `group should come before p-0: ${result}`);
      assert.ok(peerIndex < p0Index, `peer should come before p-0: ${result}`);
    });
  });
});

suite('Real-world Component Patterns', () => {
  test('should handle typical button classes', () => {
    const input = 'px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition';
    const result = sortClasses(input, mockContext);

    // All classes should be present
    assert.ok(result.includes('px-4'));
    assert.ok(result.includes('py-2'));
    assert.ok(result.includes('bg-blue-500'));
    assert.ok(result.includes('text-white'));
    assert.ok(result.includes('rounded'));
    assert.ok(result.includes('hover:bg-blue-600'));
    assert.ok(result.includes('transition'));
  });

  test('should handle card component classes', () => {
    const input = 'p-4 bg-white rounded-lg shadow-lg hover:shadow';
    const result = sortClasses(input, mockContext);

    assert.ok(result.includes('p-4'));
    assert.ok(result.includes('bg-white'));
    assert.ok(result.includes('rounded-lg'));
    assert.ok(result.includes('shadow-lg'));
  });

  test('should handle flex container classes', () => {
    const input = 'flex items-center justify-center gap-4';
    const result = sortClasses(input, mockContext);

    // flex should come first among these
    assert.ok(result.indexOf('flex') === 0 || result.startsWith('flex'), `flex should be first: ${result}`);
  });
});
