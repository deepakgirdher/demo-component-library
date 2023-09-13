import type { Meta, StoryObj } from '@storybook/react';

import Label from './Label';

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Label> = {
  component: Label,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A basic Label.'
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Title: Story = {
  args: {
    //👇 The args you need here will depend on your component
    type:"title",
    text:"Taj Mahal"
  },
};

export const SubTitle: Story = {
  args: {
    //👇 The args you need here will depend on your component
    type:"subtitle",
    text:"Taj Mahal"
  },
};

export const NormalText: Story = {
  args: {
    //👇 The args you need here will depend on your component

    text:"Taj Mahal"
  },
};
