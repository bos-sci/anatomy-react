// TODO: deal with conflicting styles/modifiers
import type { Meta, StoryObj } from '@storybook/react';

import Button from './Button';
import { BUTTON_ICONS, BUTTON_SIZES, BUTTON_VARIANTS } from './';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    variant: {
      options: [undefined, ...BUTTON_VARIANTS],
      control: { type: 'radio' }
    },
    size: {
      options: [undefined, ...BUTTON_SIZES],
      control: { type: 'radio' }
    },
    // TODO: What icons do we want to support and how do we handle them in Storybook
    icon: {
      options: [undefined, ...BUTTON_ICONS],
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

export const IconLeft: Story = {
  name: 'With icon on the left',
  args: {
    icon: 'plus',
    children: 'Icon left'
  }
};

export const IconRight: Story = {
  name: 'With icon on the right',
  args: {
    icon: 'chevronRight',
    iconAlignment: 'right',
    children: 'Icon right'
  }
};

export const Icon: Story = {
  render: (args) => <Button aria-label="Icon button" icon="plus" {...args} />
};

// TODO: figure out if we should show subtle nav back button
export const NavBack: Story = {
  name: 'Navigation back',
  args: {
    className: 'bsds-button-nav-back',
    children: 'Back'
  }
};
