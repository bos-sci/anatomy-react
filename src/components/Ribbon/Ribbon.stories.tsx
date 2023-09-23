import type { Meta, StoryObj } from '@storybook/react';

import Ribbon from './Ribbon';

const meta = {
  title: 'Components/Ribbon',
  component: Ribbon,
  argTypes: {
    isConstrained: {
      control: { type: 'boolean' }
    },
    variant: {
      options: [null, 'informational' /* , 'carbon' */],
      control: { type: 'radio' }
    },
    withShadow: {
      control: { type: 'boolean' }
    },
    textAlign: {
      options: ['left', 'center'],
      control: { type: 'radio' }
    }
  },
  tags: ['autodocs']
} satisfies Meta<typeof Ribbon>;

export default meta;
type Story = StoryObj<typeof Ribbon>;

export const Playground: Story = {
  render: (args) => (
    <Ribbon {...args}>
      <span>Hello Ribbon</span>
    </Ribbon>
  )
};
