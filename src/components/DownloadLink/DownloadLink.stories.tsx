import type { Meta, StoryObj } from '@storybook/react';

import DownloadLink from './DownloadLink';
import { DOWNLOAD_LINK_VARIANTS } from '../Link';

const meta = {
  title: 'Components/DownloadLink',
  component: DownloadLink,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: [undefined, ...DOWNLOAD_LINK_VARIANTS],
      control: { type: 'radio' }
    }
  }
} satisfies Meta<typeof DownloadLink>;

const baseArgs = {
  filename: 'test-file',
  href: '/assets/images/50-50-split.jpg',
  children: 'Download CTA'
};

export default meta;
type Story = StoryObj<typeof DownloadLink>;

export const Playground: Story = {
  args: {
    ...baseArgs
  }
};
