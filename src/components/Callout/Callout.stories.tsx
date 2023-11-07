import type { Meta, StoryObj } from '@storybook/react';

import Callout from './Callout';

const meta = {
  title: 'Components/Callout',
  component: Callout,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof Callout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    children: 'Callout'
  }
};
