import type { Meta, StoryObj } from '@storybook/react';

import Search from './Search';

const meta = {
  title: 'Components/Search',
  component: Search,
  parameters: {
    layout: 'padded'
  },
  tags: ['autodocs']
} satisfies Meta<typeof Search>;

export default meta;
type Story = StoryObj<typeof Search>;

export const Playground: Story = {
  render: (args) => <Search {...args} label="Search" />
};
