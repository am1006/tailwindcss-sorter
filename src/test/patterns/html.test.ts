import * as assert from 'assert';
import type { LanguageConfig } from '../../types';

/**
 * Tests for HTML class attribute patterns
 */

const htmlConfig: LanguageConfig = {
  languageId: 'html',
  patterns: [
    { regex: 'class="([^"]+)"', captureGroup: 1 },
    { regex: "class='([^']+)'", captureGroup: 1 },
  ],
};

suite('HTML Pattern Tests', () => {
  suite('Basic matching', () => {
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

    test('should not match empty class attributes', () => {
      const text = '<div class="">';
      const regex = new RegExp(htmlConfig.patterns[0].regex, 'g');
      const match = regex.exec(text);
      // Regex [^"]+ requires at least one character
      assert.strictEqual(match, null);
    });
  });

  suite('Complex Tailwind classes', () => {
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

    test('should handle dark mode prefix', () => {
      const text = '<div class="bg-white dark:bg-gray-900 text-black dark:text-white">';
      const regex = new RegExp(htmlConfig.patterns[0].regex, 'g');
      const match = regex.exec(text);
      assert.ok(match);
      assert.strictEqual(match[1], 'bg-white dark:bg-gray-900 text-black dark:text-white');
    });

    test('should handle group and peer modifiers', () => {
      const text = '<div class="group-hover:opacity-100 peer-focus:ring-2">';
      const regex = new RegExp(htmlConfig.patterns[0].regex, 'g');
      const match = regex.exec(text);
      assert.ok(match);
      assert.strictEqual(match[1], 'group-hover:opacity-100 peer-focus:ring-2');
    });
  });
});
