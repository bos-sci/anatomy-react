// TODO: add search results

import type { Meta, StoryObj } from '@storybook/react';

import Search from './Search';

const meta = {
  title: 'Components/Search',
  component: Search,
  tags: ['autodocs'],
  argTypes: {
    formAttributes: {
      control: false
    },
    texts: {
      control: false
    }
  },
  args: {
    searchResults: [
      { text: 'Result 1', href: '#result1' },
      { text: 'Result 2', href: '#result2' }
    ]
  }
} satisfies Meta<typeof Search>;

export default meta;
type Story = StoryObj<typeof Search>;

export const Playground: Story = {};
