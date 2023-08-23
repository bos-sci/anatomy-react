import type { Meta, StoryObj } from '@storybook/react';

import Button from './Button';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    variant: {
      options: ['', 'assertive', 'ghost', 'subtle'],
      control: { type: 'radio' }
    },
    size: {
      options: ['', 'small'],
      control: { type: 'radio' }
    },
    icon: {
      options: ['', 'plus', 'chevronRight', 'close'],
      control: { type: 'select' }
    },
    iconAlignment: { control: 'radio', if: { arg: 'icon' } },
    iconSize: { control: 'radio', if: { arg: 'icon' } }
  },
  tags: ['autodocs']
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const Playground: Story = {
  render: (args) => <Button {...args}>Text button</Button>
};
