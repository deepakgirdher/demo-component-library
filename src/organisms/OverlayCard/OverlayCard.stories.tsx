import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import OverlayCard from './OverlayCard';

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof OverlayCard> = {
  component: OverlayCard, 
  decorators: [
    (Story) => (
      <div style={{ width:'250px'}}>
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'], 
  parameters: {
    docs: {
      description: {
        component: 'A card with an option to add image or action button to it.'
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof OverlayCard>;

export const ImageCard: Story = {
  args: {
    //👇 The args you need here will depend on your component
    cardImage: "https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9udW1lbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
    title: "Delhi",
    onClick: ()=>{console.log("Card Clicked")}
  },
};