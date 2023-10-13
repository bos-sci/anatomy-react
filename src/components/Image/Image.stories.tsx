import type { Meta, StoryObj } from '@storybook/react';

import Image from './Image';
import { IMAGE_RATIO_OPTIONS } from './Image.types';

const ratioOptionsString = IMAGE_RATIO_OPTIONS.map((ratio) => `"${ratio}"`).join(', ');

const meta = {
  title: 'Components/Image',
  component: Image,
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    ratio: {
      options: [...IMAGE_RATIO_OPTIONS],
      table: {
        type: { summary: ratioOptionsString }
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
