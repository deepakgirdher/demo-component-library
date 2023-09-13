import type { Meta, StoryObj } from '@storybook/react';

import Button from './Button';

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Button> = {
  component: Button,
  tags: ['autodocs'], 
  argTypes: {
    type: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' },
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'A standard button to trigger an action when clicked.'
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const StandardButton: Story = {
  args: {
    //👇 The args you need here will depend on your component
    type: "primary",
    label: "Button",
    onClick: ()=>{console.log("Button Clicked")}
  },
};

export const IconButton: Story = {
  args: {
    //👇 The args you need here will depend on your component
    type: "primary",
    label: "Button",
    iconButton: true,
    iconName:"test"
  },
};
