import type { Meta, StoryObj } from '@storybook/react';

import DownloadLink from './DownloadLink';

const meta = {
  title: 'Components/Download/DownloadLink',
  component: DownloadLink,
  tags: ['autodocs']
} satisfies Meta<typeof DownloadLink>;

export default meta;
type Story = StoryObj<typeof DownloadLink>;

export const Playground: Story = {
  args: {
    asButton: false,
    filename: 'test-file',
    source: '/assets/images/50-50-split.jpg',
    cta: 'Download CTA'
  }
};
