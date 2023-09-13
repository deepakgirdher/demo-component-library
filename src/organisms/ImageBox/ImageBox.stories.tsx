import type { Meta, StoryObj } from '@storybook/react';

import ImageBox from './ImageBox';
import React from 'react';

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof ImageBox> = {
  component: ImageBox, 
  decorators: [
    (Story) => (
      <div style={{ width:'25vw' }}>
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'], 
  parameters: {
    docs: {
      description: {
        component: 'An ImageBox showing a main picture along with thumbnails of other four pictures.'
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ImageBox>;

export const BoxImageCollage: Story = {
  args: {
    //👇 The args you need here will depend on your component
    boxImages:[
      'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHJhdmVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60',
      'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dHJhdmVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60',
      'https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60',
      'https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGlraW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60',
      'https://images.unsplash.com/photo-1530521954074-e64f6810b32d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60'
    ]
  },
};