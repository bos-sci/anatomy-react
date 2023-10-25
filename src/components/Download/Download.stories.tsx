import type { Meta, StoryObj } from '@storybook/react';

import Download from './Download';

// Update imports or delete if not exporting types
// import { DOWNLOAD_VARIANTS } from './Download.types';

const meta = {
  title: 'Components/Download',
  component: Download,
  tags: ['autodocs'],
  argTypes: {
    // variant: {
    //     options: [undefined, ...DOWNLOAD_VARIANTS],
    //     control: { type: 'radio' }
    // }
  }
} satisfies Meta<typeof Download>;

export default meta;
type Story = StoryObj<typeof Download>;

export const Playground: Story = {
  // args: {
  //   ...baseArgs
  // }
};
