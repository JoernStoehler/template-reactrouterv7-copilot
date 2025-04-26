# Project Tooling

This document provides a concise overview of the tooling, configuration files, and libraries used in this project.

## Configuration Files

| File                       | Purpose                                        |
| -------------------------- | ---------------------------------------------- |
| `package.json`             | Project metadata and npm dependency management |
| `tsconfig.json`            | TypeScript compiler configuration              |
| `config.json`              | Application configuration                      |
| `eslint.config.js`         | ESLint flat configuration                      |
| `.prettierrc`              | Prettier code formatter configuration          |
| `vitest.config.ts`         | Vitest test framework configuration            |
| `.env`                     | Environment variables (not in version control) |
| `.env.example`             | Template for environment variables             |
| `.gitignore`               | Files excluded from version control            |
| `.husky/`                  | Git hooks for code quality checks              |
| `.vscode/settings.json`    | VS Code editor settings                        |
| `.vscode/extensions.json`  | VS Code recommended extensions                 |
| `.github/workflows/ci.yml` | GitHub Actions CI configuration                |

## Development Tools

### Package and Dependency Management

- npm/Node.js v20+

### Code Quality

- TypeScript v5.4+
- ESLint v9.25+ with TypeScript plugins v8.30+
- Prettier v3.2+
- Husky v9.0+ for Git hooks
- lint-staged v15.2+ for pre-commit checks

### Testing

- Vitest v3.1+
- @vitest/coverage-v8 v3.1+

### Environment Management

- dotenv v16.4+

## Library Stack

### Core

- typescript v5.4+
- tsx v4.7+ (for running TypeScript directly)
- ts-node v10.9+

### CLI and Configuration

- commander v13.1+ (CLI framework)

### Logging and Monitoring

- winston v3.12+ (structured logging)

## CI/CD

- GitHub Actions (linting, testing, coverage)

## How to Update Tooling

### Updating Dependencies

```bash
# View outdated dependencies
npm outdated

# Update all dependencies to latest compatible versions
npm update

# Update specific dependencies to latest compatible versions
npm update package1 package2

# Update a package to a specific version
npm install package@version
```

### Updating Configuration

- **ESLint**: Update rules and settings in `eslint.config.js`
- **Prettier**: Modify formatting options in `.prettierrc`
- **TypeScript**: Update compiler options in `tsconfig.json`
- **Husky**: Hooks are managed in the `.husky/` directory and automatically installed via the prepare script in package.json

### Adding New Tools

1. Add the tool to npm dependencies:

   ```bash
   # For runtime dependencies
   npm install package-name

   # For development dependencies
   npm install --save-dev package-name
   ```

2. Create or update configuration files if needed
3. Update relevant documentation (this file and others)
4. Consider adding to Husky/lint-staged hooks if applicable
