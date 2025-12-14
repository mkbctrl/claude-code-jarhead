/**
 * Example usage of the Claude Code Boycott plugin
 * 
 * This file demonstrates how to use the plugin within Claude Code
 */

import createPlugin, { PluginContext, PluginConfig } from '../src/index';

// Example context that would be provided by Claude Code
const exampleContext: PluginContext = {
  workspaceRoot: '/path/to/workspace',
  logger: {
    info: (message: string) => console.log('[INFO]', message),
    error: (message: string) => console.error('[ERROR]', message),
    warn: (message: string) => console.warn('[WARN]', message),
    debug: (message: string) => console.debug('[DEBUG]', message),
  },
};

// Example configuration
const exampleConfig: PluginConfig = {
  // Add configuration options here
};

// Initialize and use the plugin
async function main() {
  try {
    // Create the plugin instance
    const plugin = await createPlugin(exampleContext, exampleConfig);
    
    // Get plugin information
    const info = plugin.getInfo();
    console.log('Plugin Info:', info);
    
    // Plugin is now active and ready to use
    // Add your plugin usage logic here
    
    // When done, deactivate the plugin
    await plugin.deactivate();
  } catch (error) {
    console.error('Failed to initialize plugin:', error);
  }
}

// Run the example
if (require.main === module) {
  main();
}
