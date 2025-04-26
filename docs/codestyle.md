# Code Style Guide

## TypeScript Style

We use ESLint and Prettier with the following key conventions:

### Formatting & Naming

- Line length: 100 chars, 2 spaces indent, single quotes, semicolons
- `camelCase` for functions/variables, `PascalCase` for types, `UPPER_CASE` for constants

### Guidelines

- Group imports: Node.js modules → external packages → internal imports
- Use interfaces for extensible objects, type aliases for complex types
- Include explicit return types on public API functions
- Use JSDoc for all public functions with @param, @returns, @throws
- Comments should explain "why" not "what"
- Use `unknown` instead of `any` for unknown types

## Testing & Best Practices

- Use Vitest describe/it blocks with descriptive names
- Test both success paths and edge cases
- Validate inputs early and provide clear error messages
- Follow standard REST API conventions for endpoints
- One class or related function set per file
- Use barrel exports (index.ts) for public APIs
