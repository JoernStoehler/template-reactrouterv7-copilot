# Code Style Guide

## Project-Specific Conventions

- File names: `kebab-case.tsx` for components, `kebab-case.ts` for utilities
- Route components go in `app/routes/` directory
- Use React Router v7 type system for loaders and actions
- Include explicit return types on loader/action functions

## React Patterns

- Extract business logic from route components
- Use `react-router` hooks for routing (`useLoaderData`, `useActionData`, etc.)

## Styling

- Use TailwindCSS exclusively - avoid custom CSS files
- Global styles in `app.css` should be minimal
- Follow mobile-first responsive approach
