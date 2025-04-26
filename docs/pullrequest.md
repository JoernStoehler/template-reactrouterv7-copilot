# Pull Request Guidelines

## When to Create a PR

- For significant features, architectural changes, or breaking changes
- For smaller changes, commit directly to main (see [commit guidelines](commit.md))

## PR Checklist

1. **Branch naming**: Use `feature/descriptive-name` format

2. **Pre-submission verification**:

   ```bash
   npm run typecheck
   npm run lint
   npm run build
   ```

   - Test both client and server rendering
   - Verify all routes work properly

3. **Update documentation**:

   - Update `docs/changelog.md` with changes
   - Document any API changes

4. **PR description template**:

   ```markdown
   ## Description

   Brief description

   ## Related Issues

   Fixes #123

   ## Type of Change

   - [ ] Bug fix
   - [ ] New feature
   - [ ] Breaking change

   ## Testing Instructions

   1. Steps to test
   ```

- [ ] Tests added/updated
- [ ] Documentation updated
- [ ] CHANGELOG.md updated
