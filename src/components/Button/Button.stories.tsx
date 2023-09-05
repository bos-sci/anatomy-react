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
  args: {
    children: 'Button'
  }
};

export const Default: Story = {
  args: {
    children: 'Default button'
  }
};

export const Assertive: Story = {
  args: {
    variant: 'assertive',
    children: 'Assertive button'
  }
};

export const Subtle: Story = {
  args: {
    variant: 'subtle',
    children: 'Subtle button'
  }
};

export const Small: Story = {
  args: {
    size: 'small',
    children: 'Small button'
  }
};

export const IconLeft: Story = {
  args: {
    icon: 'plus',
    children: 'Icon left'
  }
};

IconLeft.storyName = 'With icon on the left';

export const IconRight: Story = {
  args: {
    icon: 'chevronRight',
    iconAlignment: 'right',
    children: 'Icon right'
  }
};

IconRight.storyName = 'With icon on the right';

export const Icon: Story = {
  render: (args) => <Button aria-label="Icon button" icon="plus" {...args} />
};

// TODO: figure out if we should show subtle nav back button
export const NavBack: Story = {
  args: {
    className: 'bsds-button-nav-back',
    children: 'Back'
  }
};

NavBack.storyName = 'Navigation back';
