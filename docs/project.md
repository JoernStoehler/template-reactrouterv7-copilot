# Project Structure

## Key Directories

```
app/                # React Router v7 application source
  routes/           # Route components
  server/           # Server-side code
  welcome/          # Welcome components
public/             # Static assets
.react-router/      # Generated files (not committed)
```

## Key Files

- `app/root.tsx` - Root layout with browser APIs
- `app/routes.ts` - Route definitions
- `react-router.config.ts` - React Router v7 configuration

## Development Commands

```bash
npm run dev        # Start dev server with HMR (http://localhost:5173)
npm run build      # Build for production
npm run lint       # Run ESLint
npm run format     # Run Prettier
npm run typecheck  # Run TypeScript checks
```

- **Start the production server**:
  ```bash
  npm run start
  ```

### Development Features

This React Router v7 template comes with several key features:

1. **Server-Side Rendering (SSR)** - Pre-renders pages on the server for better performance and SEO
2. **Hot Module Replacement (HMR)** - Fast development with instant UI updates without page reloads
3. **TypeScript Integration** - Full type safety with strict mode enabled
4. **TailwindCSS** - Utility-first CSS framework for rapid UI development
5. **Environment Variable Support** - Easy configuration with dotenv for server-side environment variables
6. **Pre-commit Hooks** - Enforces code quality via Husky and lint-staged
7. **Modern ESLint Configuration** - Uses ESLint flat config for maintainable linting rules

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
