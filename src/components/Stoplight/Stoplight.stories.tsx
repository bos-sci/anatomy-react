import type { Meta, StoryObj } from '@storybook/react';

import Stoplight from './Stoplight';
import { STOPLIGHT_COLORS, STOPLIGHT_SIZES, STOPLIGHT_TEXT_COLORS } from './Stoplight.types';

const meta = {
  title: 'Components/Stoplight',
  component: Stoplight,
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    lightColor: {
      options: [...STOPLIGHT_COLORS]
    },
    textColor: {
      options: [undefined, ...STOPLIGHT_TEXT_COLORS]
    },
    size: {
      options: [undefined, ...STOPLIGHT_SIZES]
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
