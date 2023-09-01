import type { Meta, StoryObj } from '@storybook/react';

import Image from './Image';

const meta = {
  title: 'Components/Image',
  component: Image,
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    ratio: {
      options: ['1:1', '4:3', '16:9', '21:9'],
      table: {
        type: { summary: `"1:1", "4:3", "16:9", "21:9"` }
      }
    }
  },
  tags: ['autodocs']
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof Image>;

export const Playground: Story = {
  args: {
    src: '/assets/images/50-50-split.jpg',
    alt: 'Demo placeholder for an image.',
    ratio: '16:9',
    texts: {
      caption: 'This is an image caption.'
    }
  }
};
