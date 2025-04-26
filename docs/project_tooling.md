# Project Tooling

## Key Technologies

- **Framework**: React v18.2+, React Router v7 (pre-release)
- **Build**: Vite v5.1+
- **Styling**: TailwindCSS v3.4+
- **Quality**: ESLint v9.25+ (flat config), TypeScript v5.4+
- **SSR**: @react-router/server

## Notable Config Files

- `react-router.config.ts` - React Router v7 route config
- `vite.config.ts` - Includes plugins for TailwindCSS, React Router, and path aliases
- `eslint.config.js` - ESLint flat configuration with React plugins
- `.env` - Environment variables (add API keys here, not committed)

## Project-Specific Notes

- Routes are defined in `app/routes.ts` using React Router v7's data APIs
- Theme customization should be done in `tailwind.config.js`
- ESLint and Prettier run automatically on commit via Husky

### Adding New Tools

1. Add the tool to npm dependencies:

   ```bash
   # For runtime dependencies
   npm install package-name

   # For development dependencies
   npm install --save-dev package-name
   ```

### Adding New Routes

1. Create a new route component in the `app/routes/` directory
2. Update the route configuration in `app/routes.ts` using the React Router v7 API
3. Add any necessary types to the component for loader/action data

4. Create or update configuration files if needed
5. Update relevant documentation (this file and others)
6. Consider adding to Husky/lint-staged hooks if applicable
