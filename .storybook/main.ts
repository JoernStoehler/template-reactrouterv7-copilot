import type { StorybookConfig } from '@storybook/react-vite';
import dotenv from 'dotenv';
import { mergeConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

// Load environment variables from .env file
dotenv.config();

// Set STORYBOOK environment variable to true
process.env.STORYBOOK = 'true';

const config: StorybookConfig = {
  stories: [
    '../app/**/*.mdx',
    '../app/**/*.story.@(js|jsx|ts|tsx)',
    '../app/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-essentials',
    'storybook-addon-remix-react-router',
    '@storybook/experimental-addon-test',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  // Configure Vite for Storybook
  viteFinal: async config => {
    // Add path resolution
    config.plugins = config.plugins || [];
    config.plugins.push(tsconfigPaths());

    // Disable React Router plugin for Storybook
    return mergeConfig(config, {
      define: {
        'process.env.STORYBOOK': JSON.stringify(true),
      },
    });
  },
};
export default config;
