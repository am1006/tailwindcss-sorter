import * as vscode from 'vscode';
import type { ClassMatch, LanguageConfig, PatternConfig } from './types';
import { getConfig } from './config';

/**
 * Find all class attribute matches in a document
 */
export function findClassMatches(
  document: vscode.TextDocument,
  languageConfig: LanguageConfig
): ClassMatch[] {
  const text = document.getText();
  const matches: ClassMatch[] = [];
  const config = getConfig();

  // Apply language-specific patterns
  for (const pattern of languageConfig.patterns) {
    const patternMatches = findMatchesForPattern(document, text, pattern);
    matches.push(...patternMatches);
  }

  // Apply class function matching (e.g., cn(), merge(), twMerge())
  // This finds ALL string arguments within these function calls
  const classFunctionMatches = findClassFunctionMatches(document, text, config.classFunctions);
  matches.push(...classFunctionMatches);

  // Sort by start offset and remove duplicates
  matches.sort((a, b) => a.startOffset - b.startOffset);
  return deduplicateMatches(matches);
}

/**
 * Find all matches for a single pattern
 */
function findMatchesForPattern(
  document: vscode.TextDocument,
  text: string,
  pattern: PatternConfig
): ClassMatch[] {
  const matches: ClassMatch[] = [];
  const captureGroup = pattern.captureGroup ?? 1;

  try {
    const regex = new RegExp(pattern.regex, 'g');
    let match: RegExpExecArray | null;

    while ((match = regex.exec(text)) !== null) {
      const fullMatch = match[0];
      const classString = match[captureGroup];

      if (!classString || classString.trim() === '') {
        continue;
      }

      // Calculate the offset of the capture group within the full match
      const captureStartInMatch = fullMatch.indexOf(classString);
      if (captureStartInMatch === -1) {
        continue;
      }

      const startOffset = match.index;
      const classStartOffset = startOffset + captureStartInMatch;
      const classEndOffset = classStartOffset + classString.length;

      const startPos = document.positionAt(classStartOffset);
      const endPos = document.positionAt(classEndOffset);

      matches.push({
        fullMatch,
        classString,
        startOffset,
        classStartOffset,
        range: new vscode.Range(startPos, endPos),
      });
    }
  } catch (error) {
    // Invalid regex - skip this pattern
    console.error(`Invalid regex pattern: ${pattern.regex}`, error);
  }

  return matches;
}

/**
 * Remove duplicate matches (same range)
 */
function deduplicateMatches(matches: ClassMatch[]): ClassMatch[] {
  const seen = new Set<string>();
  return matches.filter((match) => {
    const key = `${match.classStartOffset}-${match.classString.length}`;
    if (seen.has(key)) {
      return false;
    }
    seen.add(key);
    return true;
  });
}

/**
 * Find all string arguments within class function calls.
 * Handles: fn("a", "b"), fn(["a", "b"]), and nested calls.
 */
function findClassFunctionMatches(
  document: vscode.TextDocument,
  text: string,
  functionNames: string[]
): ClassMatch[] {
  if (functionNames.length === 0) {
    return [];
  }

  const matches: ClassMatch[] = [];

  // Escape special regex characters in function names
  const escapedNames = functionNames.map((name) => name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  const namesPattern = escapedNames.join('|');

  // Match function name followed by opening paren
  const functionStartRegex = new RegExp(`(?:${namesPattern})\\s*\\(`, 'g');

  let funcMatch: RegExpExecArray | null;
  while ((funcMatch = functionStartRegex.exec(text)) !== null) {
    const startIndex = funcMatch.index + funcMatch[0].length;

    // Find the matching closing paren by tracking depth
    const argsContent = extractBalancedContent(text, startIndex - 1);
    if (!argsContent) {
      continue;
    }

    // Extract all strings from the function arguments
    const stringMatches = extractStringsFromContent(argsContent.content);

    for (const strMatch of stringMatches) {
      const classString = strMatch.value;
      if (!classString || classString.trim() === '') {
        continue;
      }

      // Calculate absolute offset: funcMatch start + '(' position + relative offset in content + 1 (for quote)
      const classStartOffset = startIndex + strMatch.start;
      const classEndOffset = classStartOffset + classString.length;

      const startPos = document.positionAt(classStartOffset);
      const endPos = document.positionAt(classEndOffset);

      matches.push({
        fullMatch: strMatch.fullMatch,
        classString,
        startOffset: funcMatch.index,
        classStartOffset,
        range: new vscode.Range(startPos, endPos),
      });
    }
  }

  return matches;
}

/**
 * Extract content between balanced parentheses starting at given index.
 * The index should point to the opening paren.
 */
function extractBalancedContent(
  text: string,
  openParenIndex: number
): { content: string; endIndex: number } | null {
  if (text[openParenIndex] !== '(') {
    return null;
  }

  let depth = 1;
  let i = openParenIndex + 1;
  let inString: string | null = null;
  let escaped = false;

  while (i < text.length && depth > 0) {
    const char = text[i];

    if (escaped) {
      escaped = false;
      i++;
      continue;
    }

    if (char === '\\') {
      escaped = true;
      i++;
      continue;
    }

    // Handle string boundaries
    if (inString) {
      if (char === inString) {
        inString = null;
      }
    } else {
      if (char === '"' || char === "'") {
        inString = char;
      } else if (char === '(') {
        depth++;
      } else if (char === ')') {
        depth--;
      }
    }

    i++;
  }

  if (depth !== 0) {
    return null;
  }

  // Content is between opening paren and closing paren (exclusive)
  return {
    content: text.slice(openParenIndex + 1, i - 1),
    endIndex: i - 1,
  };
}

/**
 * Extract all string literals from content.
 * Returns the string value (without quotes) and its position.
 */
function extractStringsFromContent(
  content: string
): { value: string; start: number; fullMatch: string }[] {
  const strings: { value: string; start: number; fullMatch: string }[] = [];

  // Match both single and double quoted strings
  const stringRegex = /"([^"\\]*(?:\\.[^"\\]*)*)"|'([^'\\]*(?:\\.[^'\\]*)*)'/g;

  let match: RegExpExecArray | null;
  while ((match = stringRegex.exec(content)) !== null) {
    const value = match[1] ?? match[2]; // Group 1 for double quotes, group 2 for single
    const quote = match[0][0];
    strings.push({
      value,
      start: match.index + 1, // +1 to skip the opening quote
      fullMatch: `${quote}${value}${quote}`,
    });
  }

  return strings;
}

/**
 * Find class matches at or containing a specific position
 */
export function findMatchAtPosition(
  document: vscode.TextDocument,
  position: vscode.Position,
  languageConfig: LanguageConfig
): ClassMatch | undefined {
  const matches = findClassMatches(document, languageConfig);
  return matches.find((match) => match.range.contains(position));
}

/**
 * Find class matches that intersect with a selection
 */
export function findMatchesInSelection(
  document: vscode.TextDocument,
  selection: vscode.Selection,
  languageConfig: LanguageConfig
): ClassMatch[] {
  const matches = findClassMatches(document, languageConfig);
  return matches.filter((match) => {
    return (
      selection.contains(match.range) ||
      match.range.contains(selection) ||
      selection.intersection(match.range) !== undefined
    );
  });
}
