import type { Meta, StoryObj } from '@storybook/react';

import Tag from './Tag';

const meta = {
  title: 'Example/Tag',
  component: Tag,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    variant: '',
    children: 'Tag text'
  }
};
