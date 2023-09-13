import type { Meta, StoryObj } from '@storybook/react';

import RatingBox from './RatingBox';
import React from 'react';

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof RatingBox> = {
  component: RatingBox, 
  decorators: [
    (Story) => (
      <div style={{ width:'150px'}}>
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
type Story = StoryObj<typeof RatingBox>;

export const ImageCard: Story = {
  args: {
    //👇 The args you need here will depend on your component
    rating: '9.8',
    ratingLabel:'Excellent',
    ratingCount:'23,876',
    onClick: ()=>{console.log("Card Clicked")}
  },
};