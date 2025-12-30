import * as assert from 'assert';
import type { LanguageConfig } from '../../types';

/**
 * Tests for Ruby/Phlex class attribute patterns
 */

const rubyConfig: LanguageConfig = {
  languageId: 'ruby',
  patterns: [
    { regex: 'class:\\s*["\']([^"\']+)["\']', captureGroup: 1 },
    { regex: 'classes:\\s*["\']([^"\']+)["\']', captureGroup: 1 },
    { regex: 'class:\\s*%w\\[([^\\]]+)\\]', captureGroup: 1 },
  ],
};

suite('Ruby/Phlex Pattern Tests', () => {
  suite('class: attribute', () => {
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

    test('should handle class: with extra whitespace', () => {
      const text = 'div class:   "px-4 bg-blue-500"';
      const regex = new RegExp(rubyConfig.patterns[0].regex, 'g');
      const match = regex.exec(text);
      assert.ok(match);
      assert.strictEqual(match[1], 'px-4 bg-blue-500');
    });
  });

  suite('classes: attribute', () => {
    test('should match classes: with quotes', () => {
      const text = 'button classes: "btn px-4 py-2"';
      const regex = new RegExp(rubyConfig.patterns[1].regex, 'g');
      const match = regex.exec(text);
      assert.ok(match);
      assert.strictEqual(match[1], 'btn px-4 py-2');
    });
  });

  suite('%w[] syntax', () => {
    test('should match class: %w[] syntax', () => {
      const text = 'div class: %w[px-4 bg-blue-500 text-white]';
      const regex = new RegExp(rubyConfig.patterns[2].regex, 'g');
      const match = regex.exec(text);
      assert.ok(match);
      assert.strictEqual(match[1], 'px-4 bg-blue-500 text-white');
    });

    test('should match class: %w[] with responsive classes', () => {
      const text = 'div class: %w[sm:px-4 md:px-6 lg:px-8]';
      const regex = new RegExp(rubyConfig.patterns[2].regex, 'g');
      const match = regex.exec(text);
      assert.ok(match);
      assert.strictEqual(match[1], 'sm:px-4 md:px-6 lg:px-8');
    });
  });

  suite('Phlex component patterns', () => {
    test('should match in Phlex component context', () => {
      const text = `
        def view_template
          div class: "flex items-center gap-4" do
            span class: "text-lg font-bold"
          end
        end
      `;
      const regex = new RegExp(rubyConfig.patterns[0].regex, 'g');
      const matches: string[] = [];
      let match;
      while ((match = regex.exec(text)) !== null) {
        matches.push(match[1]);
      }
      assert.strictEqual(matches.length, 2);
      assert.strictEqual(matches[0], 'flex items-center gap-4');
      assert.strictEqual(matches[1], 'text-lg font-bold');
    });
  });
});
