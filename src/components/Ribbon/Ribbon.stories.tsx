import type { Meta, StoryObj } from '@storybook/react';

import Ribbon from './Ribbon';

const meta = {
  title: 'Components/Ribbon',
  component: Ribbon,
  tags: ['autodocs']
} satisfies Meta<typeof Ribbon>;

export default meta;
type Story = StoryObj<typeof Ribbon>;

export const Playground: Story = {
  render: (args) => <Ribbon {...args}>Ribbon</Ribbon>
};
