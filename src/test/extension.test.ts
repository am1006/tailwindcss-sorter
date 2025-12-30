import * as assert from 'assert';
import * as vscode from 'vscode';

suite('Extension Test Suite', () => {
  vscode.window.showInformationMessage('Start all tests.');

  test('Extension should be present', () => {
    assert.ok(vscode.extensions.getExtension('your-publisher-name.tailwindcss-class-sorter'));
  });

  test('Extension commands should be registered', async () => {
    const commands = await vscode.commands.getCommands(true);
    assert.ok(commands.includes('tailwindcss-sorter.sortClasses'));
    assert.ok(commands.includes('tailwindcss-sorter.sortClassesInSelection'));
  });
});
