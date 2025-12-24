# typescript-swc-starter

[![Build](https://github.com/maxgfr/typescript-swc-starter/actions/workflows/build.yml/badge.svg)](https://github.com/maxgfr/typescript-swc-starter/actions/workflows/build.yml)
[![Test](https://github.com/maxgfr/typescript-swc-starter/actions/workflows/test.yml/badge.svg)](https://github.com/maxgfr/typescript-swc-starter/actions/workflows/test.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A minimalist TypeScript boilerplate using [SWC](https://swc.rs/) for blazing-fast compilation. Generates both `cjs` and `esm` modules.

## ✨ Features

- ⚡ **SWC** - Super-fast TypeScript/JavaScript compiler
- 📦 **Dual package** - Outputs both CommonJS and ES Modules
- 🧪 **Jest** - Testing with SWC for speed
- 🎨 **Biome** - Fast linting and formatting
- 🔄 **Nodemon** - Hot reload during development
- 🚀 **Semantic Release** - Automated versioning and publishing
- 🔒 **Husky + lint-staged** - Pre-commit hooks

## 📋 Prerequisites

- Node.js >= 24
- pnpm

## 🚀 Getting Started

```sh
# Clone the repository
git clone https://github.com/maxgfr/typescript-swc-starter
cd typescript-swc-starter

# Install dependencies
pnpm install
```

## 📜 Scripts

### Development

```sh
pnpm dev          # Run in development mode with hot reload
pnpm develop      # Run source code with SWC register
```

### Testing

```sh
pnpm test           # Run tests
pnpm test:watch     # Run tests in watch mode
pnpm test:coverage  # Run tests with coverage
```

### Linting & Formatting

```sh
pnpm lint       # Lint code with Biome
pnpm lint:fix   # Lint and fix issues
pnpm format     # Check formatting
pnpm format:fix # Format code
pnpm check      # Run both lint and format checks
pnpm check:fix  # Fix both lint and format issues
```

### Building

```sh
pnpm build       # Compile with SWC
pnpm bundle      # Bundle for distribution (cjs + esm)
pnpm clean       # Clean build artifacts
```

### Running Built Code

```sh
pnpm start:cjs   # Run CommonJS build
pnpm start:esm   # Run ES Module build
```

## 📦 Publishing to npm

This project uses OIDC for npm publishing - no `NPM_TOKEN` required!

1. Go to your npm package's access page: `https://www.npmjs.com/package/<package-name>/access`
2. Set your details and trust publisher

![NPM Access Settings](https://raw.githubusercontent.com/maxgfr/typescript-swc-starter/main/.github/assets/token.png)

## 📖 Usage

```ts
import { sayHello } from 'typescript-swc-starter';

sayHello();
```

## 📄 License

MIT © [maxgfr](https://github.com/maxgfr)
