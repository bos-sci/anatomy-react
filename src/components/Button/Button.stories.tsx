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
    // TODO: What icons do we want to support and how do we handle them in Storybook
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
  render: (args) => <Button {...args}>Button</Button>
};

// TODO: fix icon
export const NavBack: Story = {
  render: (args) => (
    <Button type="button" className="bsds-button-nav-back">
      Back
    </Button>
  )
};

NavBack.storyName = 'Navigation back';

// TODO: figure out if we should show subtle nav back button
