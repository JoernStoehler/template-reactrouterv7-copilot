import type { Meta, StoryObj } from '@storybook/react';
import { reactRouterParameters } from 'storybook-addon-remix-react-router';

import Home from './home';

const meta = {
  title: 'Routes/Home', // How the story will be referenced in Storybook
  component: Home,
  parameters: {
    // Router configuration for this story
    reactRouter: reactRouterParameters({
      routing: {
        path: '/',
      },
    }),
    // This allows for auto-generated docs
    docs: {
      description: {
        component: 'Home route component that renders the Welcome component',
      },
    },
  },
  // This component will have an automatically generated Autodocs entry
  tags: ['autodocs'],
} satisfies Meta<typeof Home>;

export default meta;
type Story = StoryObj<typeof meta>;

// The default story
export const Default: Story = {};
