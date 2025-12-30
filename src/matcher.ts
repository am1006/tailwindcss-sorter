import * as vscode from 'vscode';
import type { ClassMatch, LanguageConfig, PatternConfig } from './types';

/**
 * Find all class attribute matches in a document
 */
export function findClassMatches(
  document: vscode.TextDocument,
  languageConfig: LanguageConfig
): ClassMatch[] {
  const text = document.getText();
  const matches: ClassMatch[] = [];

  for (const pattern of languageConfig.patterns) {
    const patternMatches = findMatchesForPattern(document, text, pattern);
    matches.push(...patternMatches);
  }

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
