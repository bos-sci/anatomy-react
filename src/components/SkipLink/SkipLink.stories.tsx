import type { Meta, StoryObj } from '@storybook/react';

import SkipLink from './SkipLink';

const meta = {
  title: 'Components/SkipLink',
  component: SkipLink,
  argTypes: {
    destination: {
      controlType: 'text'
    },
    destinationId: {
      controlType: 'text'
    }
  },
  tags: ['autodocs']
} satisfies Meta<typeof SkipLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    destinationId: 'mainContent',
    destination: 'main content'
  },
  render: (args) => <SkipLink {...args} />
};
