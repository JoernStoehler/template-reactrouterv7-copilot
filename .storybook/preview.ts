import type { Preview } from '@storybook/react';
import { reactRouterParameters } from 'storybook-addon-remix-react-router';
import '../app/app.css'; // Include global styles

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    reactRouter: reactRouterParameters({
      // Default React Router v7 configuration
      routing: {
        path: '/',
      },
    }),
  },
};

export default preview;
