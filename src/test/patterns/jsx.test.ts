import * as assert from 'assert';
import type { LanguageConfig } from '../../types';

/**
 * Tests for JSX/TSX className patterns including utility functions
 */

const jsxConfig: LanguageConfig = {
  languageId: 'javascriptreact',
  patterns: [
    // Static className="..." or className='...'
    { regex: 'className="([^"]+)"', captureGroup: 1 },
    { regex: "className='([^']+)'", captureGroup: 1 },
    // className={`...`} or className={"..."} or className={'...'}
    { regex: 'className={`([^`]+)`}', captureGroup: 1 },
    { regex: 'className=\\{"([^"]+)"\\}', captureGroup: 1 },
    { regex: "className=\\{'([^']+)'\\}", captureGroup: 1 },
    // String arguments in utility functions: cn(), clsx(), twMerge(), etc.
    { regex: '(?:cn|clsx|twMerge|twJoin|cva|cx)\\s*\\(\\s*"([^"]+)"', captureGroup: 1 },
    { regex: "(?:cn|clsx|twMerge|twJoin|cva|cx)\\s*\\(\\s*'([^']+)'", captureGroup: 1 },
    // Match subsequent string arguments (after comma) containing Tailwind keywords
    { regex: ',\\s*"([^"]*(?:flex|grid|block|inline|hidden|absolute|relative|p-|m-|w-|h-|text-|bg-|border|rounded|shadow|gap-|space-|items-|justify-|hover:|focus:|dark:|sm:|md:|lg:)[^"]*)"', captureGroup: 1 },
    { regex: ",\\s*'([^']*(?:flex|grid|block|inline|hidden|absolute|relative|p-|m-|w-|h-|text-|bg-|border|rounded|shadow|gap-|space-|items-|justify-|hover:|focus:|dark:|sm:|md:|lg:)[^']*)'", captureGroup: 1 },
  ],
};

suite('JSX/TSX Pattern Tests', () => {
  suite('Static className', () => {
    test('should match className with double quotes', () => {
      const text = '<div className="px-4 bg-blue-500">';
      const regex = new RegExp(jsxConfig.patterns[0].regex, 'g');
      const match = regex.exec(text);
      assert.ok(match);
      assert.strictEqual(match[1], 'px-4 bg-blue-500');
    });

    test('should match className with single quotes', () => {
      const text = "<div className='px-4 bg-blue-500'>";
      const regex = new RegExp(jsxConfig.patterns[1].regex, 'g');
      const match = regex.exec(text);
      assert.ok(match);
      assert.strictEqual(match[1], 'px-4 bg-blue-500');
    });
  });

  suite('Dynamic className', () => {
    test('should match className with template literal in braces', () => {
      const text = '<div className={`px-4 bg-blue-500`}>';
      const regex = new RegExp(jsxConfig.patterns[2].regex, 'g');
      const match = regex.exec(text);
      assert.ok(match);
      assert.strictEqual(match[1], 'px-4 bg-blue-500');
    });

    test('should match className with double quotes in braces', () => {
      const text = '<div className={"px-4 bg-blue-500"}>';
      const regex = new RegExp(jsxConfig.patterns[3].regex, 'g');
      const match = regex.exec(text);
      assert.ok(match);
      assert.strictEqual(match[1], 'px-4 bg-blue-500');
    });

    test('should match className with single quotes in braces', () => {
      const text = "<div className={'px-4 bg-blue-500'}>";
      const regex = new RegExp(jsxConfig.patterns[4].regex, 'g');
      const match = regex.exec(text);
      assert.ok(match);
      assert.strictEqual(match[1], 'px-4 bg-blue-500');
    });
  });

  suite('Utility functions - cn()', () => {
    test('should match first string argument in cn()', () => {
      const text = 'cn("flex items-center gap-2", condition && "bg-blue-500")';
      const regex = new RegExp(jsxConfig.patterns[5].regex, 'g');
      const match = regex.exec(text);
      assert.ok(match);
      assert.strictEqual(match[1], 'flex items-center gap-2');
    });

    test('should match cn() with single quotes', () => {
      const text = "cn('flex items-center', 'bg-blue-500')";
      const regex = new RegExp(jsxConfig.patterns[6].regex, 'g');
      const match = regex.exec(text);
      assert.ok(match);
      assert.strictEqual(match[1], 'flex items-center');
    });

    test('should handle cn() with conditional expressions', () => {
      const text = 'cn("base-class", isActive && "bg-blue-500", disabled && "opacity-50")';
      const regex = new RegExp(jsxConfig.patterns[5].regex, 'g');
      const match = regex.exec(text);
      assert.ok(match);
      assert.strictEqual(match[1], 'base-class');
    });
  });

  suite('Utility functions - clsx()', () => {
    test('should match first string argument in clsx()', () => {
      const text = 'clsx("px-4 py-2 rounded")';
      const regex = new RegExp(jsxConfig.patterns[5].regex, 'g');
      const match = regex.exec(text);
      assert.ok(match);
      assert.strictEqual(match[1], 'px-4 py-2 rounded');
    });
  });

  suite('Utility functions - twMerge()', () => {
    test('should match first string argument in twMerge()', () => {
      const text = 'twMerge("bg-red-500", "bg-blue-500")';
      const regex = new RegExp(jsxConfig.patterns[5].regex, 'g');
      const match = regex.exec(text);
      assert.ok(match);
      assert.strictEqual(match[1], 'bg-red-500');
    });
  });

  suite('Utility functions - cva()', () => {
    test('should handle cva() for class variance authority', () => {
      const text = 'cva("inline-flex items-center justify-center", { variants: {} })';
      const regex = new RegExp(jsxConfig.patterns[5].regex, 'g');
      const match = regex.exec(text);
      assert.ok(match);
      assert.strictEqual(match[1], 'inline-flex items-center justify-center');
    });
  });

  suite('Utility functions - twJoin()', () => {
    test('should handle twJoin()', () => {
      const text = 'twJoin("px-4 py-2", "bg-blue-500")';
      const regex = new RegExp(jsxConfig.patterns[5].regex, 'g');
      const match = regex.exec(text);
      assert.ok(match);
      assert.strictEqual(match[1], 'px-4 py-2');
    });
  });

  suite('Utility functions - cx()', () => {
    test('should handle cx() from classnames/bind', () => {
      const text = 'cx("flex gap-2", styles.container)';
      const regex = new RegExp(jsxConfig.patterns[5].regex, 'g');
      const match = regex.exec(text);
      assert.ok(match);
      assert.strictEqual(match[1], 'flex gap-2');
    });
  });

  suite('Multiline utility function calls', () => {
    test('should match subsequent string arguments with Tailwind classes', () => {
      const text = `cn(
        "text-primary absolute bottom-0",
        "flex items-center gap-1",
        "rounded-tl-md bg-amber-50 p-2",
      )`;
      const subsequentRegex = new RegExp(jsxConfig.patterns[7].regex, 'g');
      const matches: string[] = [];
      let match;
      while ((match = subsequentRegex.exec(text)) !== null) {
        matches.push(match[1]);
      }
      assert.ok(matches.length >= 2, `Expected at least 2 matches, got ${matches.length}`);
      assert.ok(matches.some(m => m.includes('flex items-center')));
      assert.ok(matches.some(m => m.includes('rounded-tl-md')));
    });

    test('should match multiline cn() with multiple string arguments', () => {
      const text = `className={cn(
        "text-primary absolute bottom-0 right-0 text-xs opacity-0 group-hover:opacity-100",
        "flex items-center gap-1",
        "rounded-tl-md bg-amber-50 p-2",
        "transition-all duration-300",
      )}`;

      // First argument
      const firstRegex = new RegExp(jsxConfig.patterns[5].regex, 'g');
      const firstMatch = firstRegex.exec(text);
      assert.ok(firstMatch, 'Should match first argument');
      assert.ok(firstMatch[1].includes('text-primary'));

      // Subsequent arguments
      const subRegex = new RegExp(jsxConfig.patterns[7].regex, 'g');
      const subMatches: string[] = [];
      let m;
      while ((m = subRegex.exec(text)) !== null) {
        subMatches.push(m[1]);
      }
      assert.ok(subMatches.length >= 2, `Expected at least 2 subsequent matches, got ${subMatches.length}`);
    });
  });
});
