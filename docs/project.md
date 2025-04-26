# Project Structure and Tooling

This document provides a simple overview of the project structure, development workflow, and tooling for developers using this template.

## Project Structure

This template follows a clean, standard TypeScript project layout:

```
typescript-backend-template/
├── data/                # Data storage directory
│   ├── raw/             # Raw data files
│   ├── processed/       # Processed data files
│   └── saved/           # Output data files
├── docs/                # Documentation
│   ├── index.md         # Documentation index
│   ├── codestyle.md     # Coding standards
│   └── ...              # Other documentation
├── .github/             # GitHub-specific files
│   └── copilot-instructions.md # Copilot instructions
├── src/                 # Source code
│   ├── main.ts          # Main module
│   ├── cli.ts           # CLI interface
│   ├── utils.ts         # Utility functions
│   └── scripts/         # Runnable scripts
│       └── process-data.ts
├── test/                # Test directory
│   ├── main.spec.ts     # Tests for main module
│   └── utils.spec.ts    # Tests for utils module
└── dist/                # Compiled output (generated)
```

## Development Environment

This project uses npm for dependency management and packaging.

### Setting Up

1. Install Node.js and npm (if not already installed):

   ```bash
   # Using nvm (recommended)
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
   nvm install node

   # Or directly from package manager
   # For Ubuntu/Debian
   # sudo apt install nodejs npm
   ```

2. Install dependencies (this will also automatically set up Husky pre-commit hooks via the prepare script):

   ```bash
   npm install
   ```

## Development Workflow

### Code Quality

- **Formatting code**:

  ```bash
  npm run format
  ```

- **Linting code**:

  ```bash
  npm run lint
  ```

- **Running tests**:

  ```bash
  npm test
  ```

- **Running tests with coverage**:

  ```bash
  npm run test:cov
  ```

- **Running the development server**:
  ```bash
  npm run dev
  ```

### Building and Running

- **Build the project**:

  ```bash
  npm run build
  ```

- **Run the compiled application**:
  ```bash
  npm start
  ```

### Cleaning

- **Clean build artifacts**:
  ```bash
  rm -rf dist/ coverage/ node_modules/.cache/
  ```

## Code Quality Tools

The project uses modern TypeScript tooling to maintain code quality:

### Formatting and Linting

- **ESLint & Prettier**: TypeScript linter and formatter
  - Enforces TypeScript best practices
  - Manages import sorting
  - Finds code issues and bugs
  - Applies consistent formatting via Prettier

### Testing

- **Vitest**: Testing framework with coverage reporting
- Common testing patterns:
  - Unit tests for individual functions
  - Mocking for external dependencies
  - Integration tests for system components

### Pre-commit Hooks

The following checks run automatically before each commit via Husky and lint-staged:

- Basic file hygiene (trailing whitespace, EOF)
- ESLint for code quality checks
- Prettier for consistent formatting
- TypeScript type checking

## Continuous Integration

CI is implemented with GitHub Actions and runs on pushes to main and pull requests:

1. **Linting**: Runs ESLint and Prettier checks
2. **Testing**: Runs Vitest tests with coverage reporting
