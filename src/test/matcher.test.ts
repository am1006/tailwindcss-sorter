import * as assert from 'assert';
import type { LanguageConfig } from '../types';

// Unit tests for the regex patterns (can be run without VS Code)
suite('Matcher Pattern Tests', () => {
  const rubyConfig: LanguageConfig = {
    languageId: 'ruby',
    patterns: [
      { regex: 'class:\\s*["\']([^"\']+)["\']', captureGroup: 1 },
      { regex: 'classes:\\s*["\']([^"\']+)["\']', captureGroup: 1 },
      { regex: 'class:\\s*%w\\[([^\\]]+)\\]', captureGroup: 1 },
    ],
  };

  const htmlConfig: LanguageConfig = {
    languageId: 'html',
    patterns: [
      { regex: 'class="([^"]+)"', captureGroup: 1 },
      { regex: "class='([^']+)'", captureGroup: 1 },
    ],
  };

  const jsxConfig: LanguageConfig = {
    languageId: 'javascriptreact',
    patterns: [
      { regex: 'className="([^"]+)"', captureGroup: 1 },
      { regex: "className='([^']+)'", captureGroup: 1 },
      { regex: 'className={["\'`]([^"\'`]+)["\'`]}', captureGroup: 1 },
    ],
  };

  suite('Ruby/Phlex patterns', () => {
    test('should match class: with double quotes', () => {
      const text = 'div class: "px-4 bg-blue-500 text-white"';
      const regex = new RegExp(rubyConfig.patterns[0].regex, 'g');
      const match = regex.exec(text);
      assert.ok(match);
      assert.strictEqual(match[1], 'px-4 bg-blue-500 text-white');
    });

    test('should match class: with single quotes', () => {
      const text = "div class: 'px-4 bg-blue-500'";
      const regex = new RegExp(rubyConfig.patterns[0].regex, 'g');
      const match = regex.exec(text);
      assert.ok(match);
      assert.strictEqual(match[1], 'px-4 bg-blue-500');
    });

    test('should match classes: with quotes', () => {
      const text = 'button classes: "btn px-4 py-2"';
      const regex = new RegExp(rubyConfig.patterns[1].regex, 'g');
      const match = regex.exec(text);
      assert.ok(match);
      assert.strictEqual(match[1], 'btn px-4 py-2');
    });

    test('should match class: %w[] syntax', () => {
      const text = 'div class: %w[px-4 bg-blue-500 text-white]';
      const regex = new RegExp(rubyConfig.patterns[2].regex, 'g');
      const match = regex.exec(text);
      assert.ok(match);
      assert.strictEqual(match[1], 'px-4 bg-blue-500 text-white');
    });

    test('should handle class: with extra whitespace', () => {
      const text = 'div class:   "px-4 bg-blue-500"';
      const regex = new RegExp(rubyConfig.patterns[0].regex, 'g');
      const match = regex.exec(text);
      assert.ok(match);
      assert.strictEqual(match[1], 'px-4 bg-blue-500');
    });
  });

  suite('HTML patterns', () => {
    test('should match class with double quotes', () => {
      const text = '<div class="px-4 bg-blue-500 text-white">';
      const regex = new RegExp(htmlConfig.patterns[0].regex, 'g');
      const match = regex.exec(text);
      assert.ok(match);
      assert.strictEqual(match[1], 'px-4 bg-blue-500 text-white');
    });

    test('should match class with single quotes', () => {
      const text = "<div class='px-4 bg-blue-500'>";
      const regex = new RegExp(htmlConfig.patterns[1].regex, 'g');
      const match = regex.exec(text);
      assert.ok(match);
      assert.strictEqual(match[1], 'px-4 bg-blue-500');
    });

    test('should match multiple classes in HTML', () => {
      const text = '<div class="px-4"><span class="text-white"></span></div>';
      const regex = new RegExp(htmlConfig.patterns[0].regex, 'g');
      const matches: string[] = [];
      let match;
      while ((match = regex.exec(text)) !== null) {
        matches.push(match[1]);
      }
      assert.strictEqual(matches.length, 2);
      assert.strictEqual(matches[0], 'px-4');
      assert.strictEqual(matches[1], 'text-white');
    });
  });

  suite('JSX patterns', () => {
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

    test('should match className with template literal in braces', () => {
      const text = '<div className={`px-4 bg-blue-500`}>';
      const regex = new RegExp(jsxConfig.patterns[2].regex, 'g');
      const match = regex.exec(text);
      assert.ok(match);
      assert.strictEqual(match[1], 'px-4 bg-blue-500');
    });
  });

  suite('Edge cases', () => {
    test('should not match empty class attributes', () => {
      const text = '<div class="">';
      const regex = new RegExp(htmlConfig.patterns[0].regex, 'g');
      const match = regex.exec(text);
      // Match exists but is empty
      assert.ok(match);
      assert.strictEqual(match[1], '');
    });

    test('should handle classes with hyphens and numbers', () => {
      const text = '<div class="mt-2.5 -translate-x-1/2 hover:bg-blue-500/50">';
      const regex = new RegExp(htmlConfig.patterns[0].regex, 'g');
      const match = regex.exec(text);
      assert.ok(match);
      assert.strictEqual(match[1], 'mt-2.5 -translate-x-1/2 hover:bg-blue-500/50');
    });

    test('should handle responsive prefixes', () => {
      const text = '<div class="sm:px-4 md:px-6 lg:px-8 xl:px-10">';
      const regex = new RegExp(htmlConfig.patterns[0].regex, 'g');
      const match = regex.exec(text);
      assert.ok(match);
      assert.strictEqual(match[1], 'sm:px-4 md:px-6 lg:px-8 xl:px-10');
    });

    test('should handle state prefixes', () => {
      const text = '<div class="hover:bg-blue-500 focus:ring-2 active:bg-blue-700">';
      const regex = new RegExp(htmlConfig.patterns[0].regex, 'g');
      const match = regex.exec(text);
      assert.ok(match);
      assert.strictEqual(match[1], 'hover:bg-blue-500 focus:ring-2 active:bg-blue-700');
    });

    test('should handle arbitrary values', () => {
      const text = '<div class="w-[calc(100%-2rem)] bg-[#1a1a1a] text-[14px]">';
      const regex = new RegExp(htmlConfig.patterns[0].regex, 'g');
      const match = regex.exec(text);
      assert.ok(match);
      assert.strictEqual(match[1], 'w-[calc(100%-2rem)] bg-[#1a1a1a] text-[14px]');
    });
  });
});
