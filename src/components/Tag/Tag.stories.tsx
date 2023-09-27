import type { Meta, StoryObj } from '@storybook/react';

import Tag from './Tag';

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
