# Claude Code Jarhead Plugin

A marketplace plugin for Claude Code.

## Overview

This is a Claude Code marketplace plugin that can be installed and used within the Claude Code environment.

## Installation

```bash
npm install
```

## Development

### Build the plugin

```bash
npm run build
```

### Watch mode for development

```bash
npm run watch
```

## Project Structure

```
.
├── src/                  # Source files
│   ├── index.ts         # Main plugin entry point
│   └── types.ts         # TypeScript type definitions
├── dist/                # Compiled output (generated)
├── plugin.json          # Plugin manifest
├── package.json         # NPM package configuration
├── tsconfig.json        # TypeScript configuration
└── README.md           # This file
```

## Plugin Structure

The plugin follows the Claude Code marketplace plugin specification:

- **plugin.json**: Contains plugin metadata and configuration
- **src/index.ts**: Main entry point with plugin initialization logic
- **src/types.ts**: TypeScript type definitions for the plugin

## API

The plugin exports a default function that creates and initializes the plugin instance:

```typescript
export default async function createPlugin(
  context: PluginContext,
  config?: PluginConfig
): Promise<ClaudeCodeBoycottPlugin>
```

## License

MIT License - see [LICENSE](LICENSE) file for details.

## Author

Mikołaj Koropecki