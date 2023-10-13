import type { Meta, StoryObj } from '@storybook/react';

import Stoplight from './Stoplight';

const meta = {
  title: 'Components/Stoplight',
  component: Stoplight,
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    lightColor: {
      options: ['red', 'yellow', 'green']
    },
    textColor: {
      options: [undefined, 'ghost']
    },
    size: {
      options: [undefined, 'assertive', 'subtle']
    }
  },
  tags: ['autodocs']
} satisfies Meta<typeof Stoplight>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    lightColor: 'red',
    children: 'Stoplight'
  }
};
