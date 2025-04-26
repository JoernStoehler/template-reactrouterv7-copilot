# Commit Guidelines

## Message Format

```
<type>: <short summary>
```

Types: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `chore`

## Documentation Updates

When making significant changes, update:

- `docs/changelog.md` - For features, fixes, or breaking changes
- `docs/roadmap.md` - When completing milestone items

## Pre-Commit Checks

```bash
npm run typecheck  # TypeScript validation
npm run lint       # ESLint check
npm run format     # Prettier formatting
```

Husky runs these automatically on commit.

5. **Verify your changes work as expected**:
   - For features: verify functionality works in the browser
   - For bug fixes: verify the issue is resolved
   - For refactoring: verify no functionality has changed
   - For route changes: verify both client and server rendering work

## After Committing

After making your commit:

1. Pull latest changes from the main branch
2. Resolve any conflicts
3. Push your changes
4. For larger changes, consider [creating a pull request](pullrequest.md)
