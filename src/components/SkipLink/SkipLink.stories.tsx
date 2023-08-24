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
  }
} satisfies Meta<typeof SkipLink>;

export default meta;
type Story = StoryObj<typeof SkipLink>;

export const Playground: Story = {
  args: {
    destinationId: 'mainContent',
    destination: 'main content'
  }
};
