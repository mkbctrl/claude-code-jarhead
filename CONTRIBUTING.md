# Contributing to Claude Code Jarhead Plugin

Thank you for your interest in contributing to this project!

## Development Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/mkbctrl/claude-code-jarhead.git
   cd claude-code-jarhead
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Build the plugin:
   ```bash
   npm run build
   ```

## Development Workflow

1. Make changes to the TypeScript source files in the `src/` directory
2. Build the project to compile TypeScript to JavaScript:
   ```bash
   npm run build
   ```
3. Or use watch mode for automatic compilation:
   ```bash
   npm run watch
   ```

## Project Structure

- `src/` - TypeScript source files
  - `index.ts` - Main plugin entry point
  - `types.ts` - Type definitions
- `dist/` - Compiled JavaScript output (auto-generated)
- `examples/` - Example usage files
- `plugin.json` - Plugin manifest
- `package.json` - NPM package configuration
- `tsconfig.json` - TypeScript compiler configuration

## Adding New Features

1. Add your TypeScript code to the `src/` directory
2. Export necessary types and functions from `src/index.ts`
3. Update `src/types.ts` with any new type definitions
4. Build and test your changes
5. Update documentation in `README.md` if needed

## Code Style

- Use TypeScript for all source code
- Follow existing code style and conventions
- Use meaningful variable and function names
- Add JSDoc comments for public APIs
- Keep functions focused and modular

## Submitting Changes

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test your changes thoroughly
5. Submit a pull request with a clear description of the changes

## Questions?

Feel free to open an issue if you have any questions or need help.
