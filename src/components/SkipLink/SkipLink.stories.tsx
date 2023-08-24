import type { Meta, StoryObj } from '@storybook/react';

import SkipLink from './SkipLink';

const meta = {
  title: 'Components/SkipLink',
  component: SkipLink,
  argTypes: {
    destination: {
      description: 'Human-readable name for destination appended to skip link text',
      controlType: 'text'
    },
    destinationId: {
      description: `Value of destination's id attribute`,
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
  }
};
