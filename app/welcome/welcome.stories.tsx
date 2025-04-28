import type { Meta, StoryObj } from '@storybook/react';

import { Welcome } from './welcome';

const meta = {
  title: 'Components/Welcome', // How the story will be referenced in Storybook
  component: Welcome,
  parameters: {
    // Optional parameter to center the component in the Canvas
    layout: 'centered',
    // This allows for auto-generated docs
    docs: {
      description: {
        component: 'Welcome component displayed on the home page',
      },
    },
  },
  // This component will have an automatically generated Autodocs entry
  tags: ['autodocs'],
} satisfies Meta<typeof Welcome>;

export default meta;
type Story = StoryObj<typeof meta>;

// The default story
export const Default: Story = {};

// You could add more stories with variations if needed
export const WithProps: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'The welcome component with default props',
      },
    },
  },
};
