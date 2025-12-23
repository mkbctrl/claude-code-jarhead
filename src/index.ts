/**
 * Claude Code Boycott Plugin
 * 
 * A marketplace plugin for Claude Code
 */

export interface PluginConfig {
  // Plugin configuration options
}

export interface PluginContext {
  // Context provided by Claude Code
  workspaceRoot: string;
  logger: {
    info: (message: string) => void;
    error: (message: string) => void;
    warn: (message: string) => void;
    debug: (message: string) => void;
  };
}

/**
 * Plugin class that implements the Claude Code plugin interface
 */
export class ClaudeCodeBoycottPlugin {
  private config: PluginConfig;
  private context: PluginContext;

  constructor(context: PluginContext, config: PluginConfig = {}) {
    this.context = context;
    this.config = config;
  }

  /**
   * Initialize the plugin
   */
  async activate(): Promise<void> {
    this.context.logger.info('Claude Code Boycott plugin activated');
  }

  /**
   * Cleanup when the plugin is deactivated
   */
  async deactivate(): Promise<void> {
    this.context.logger.info('Claude Code Boycott plugin deactivated');
  }

  /**
   * Get plugin information
   */
  getInfo(): { name: string; version: string; description: string } {
    return {
      name: 'claude-code-boycott',
      version: '0.1.0',
      description: 'A Claude Code marketplace plugin',
    };
  }
}

/**
 * Main entry point for the plugin
 * This function is called by Claude Code to initialize the plugin
 */
export default async function createPlugin(
  context: PluginContext,
  config?: PluginConfig
): Promise<ClaudeCodeBoycottPlugin> {
  const plugin = new ClaudeCodeBoycottPlugin(context, config);
  await plugin.activate();
  return plugin;
}
