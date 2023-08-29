import type { Meta, StoryObj } from '@storybook/react';

import SkipLink from './SkipLink';

const meta = {
  title: 'Components/Skip link',
  component: SkipLink,
  tags: ['autodocs']
} satisfies Meta<typeof SkipLink>;

export default meta;
type Story = StoryObj<typeof SkipLink>;

export const Playground: Story = {
  // TODO: figure out why skip link was visible without being focused before adding <p>
  args: {
    destinationId: 'mainContent',
    destination: 'main content'
  },
  render: (args) => (
    <>
      <SkipLink destination="main content" destinationId="mainContent" />
      <p id="mainContent">Tab to the example to bring the skip link into focus</p>
    </>
  )
};
