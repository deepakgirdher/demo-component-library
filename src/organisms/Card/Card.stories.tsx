import type { Meta, StoryObj } from '@storybook/react';

import Card from './Card';
import React from 'react';

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Card> = {
  component: Card, 
  decorators: [
    (Story) => (
      <div style={{ width:'220px'}}>
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
type Story = StoryObj<typeof Card>;

export const ImageCard: Story = {
  args: {
    //👇 The args you need here will depend on your component
    cardImage: "https://cdn.pixabay.com/photo/2023/03/26/20/48/tajmahal-7879103_1280.jpg",
    title: "Taj Mahal",
    subTitle: "Agra India",
    onClick: ()=>{console.log("Card Clicked")}
  },
};