import type { Meta, StoryObj } from '@storybook/react';

import Ribbon from './Ribbon';

const meta = {
  title: 'Components/Ribbon',
  component: Ribbon,
  tags: ['autodocs']
} satisfies Meta<typeof Ribbon>;

export default meta;
type Story = StoryObj<typeof Ribbon>;

const baseArgs = {
  children: 'Ribbon'
};

export const Playground: Story = {
  args: {
    ...baseArgs
  }
};

export const WithShadow: Story = {
  name: 'With shadow',
  args: {
    ...baseArgs,
    withShadow: true
  }
};

export const WithCenteredText: Story = {
  name: 'With centered text',
  args: {
    ...baseArgs,
    isCentered: true
  }
};

export const WithConstrainedWidth: Story = {
  name: 'With constrained width',
  args: {
    ...baseArgs,
    isConstrained: true
  }
};

export const WithInformationalVariant: Story = {
  name: 'With informational variant',
  args: {
    ...baseArgs,
    variant: 'informational'
  }
};
