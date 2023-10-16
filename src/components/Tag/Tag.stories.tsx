import type { Meta, StoryObj } from '@storybook/react';

import Tag from './Tag';
import { TAG_VARIANTS } from './Tag.types';

const meta = {
  title: 'Components/Tag',
  component: Tag,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    texts: {
      control: false
    },
    variant: {
      options: [undefined, ...TAG_VARIANTS],
      control: { type: 'radio' }
    }
  }
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof Tag>;

export const Playground: Story = {
  args: {
    children: 'Tag'
  }
};
