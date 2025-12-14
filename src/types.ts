/**
 * Type definitions for the Claude Code Boycott plugin
 */

export interface PluginMetadata {
  name: string;
  version: string;
  description: string;
  author: string;
  license: string;
}

export interface CommandContext {
  workspaceRoot: string;
  currentFile?: string;
  selectedText?: string;
}

export interface PluginCommand {
  id: string;
  name: string;
  description: string;
  execute: (context: CommandContext) => Promise<void>;
}
