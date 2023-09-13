import type { Meta, StoryObj } from '@storybook/react';

import Icon from './Icon';

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Icon> = {
  component: Icon,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A basic icon.'
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const StandardIcon: Story = {
  args: {
    //👇 The args you need here will depend on your component
    name:"location"
  },
};
