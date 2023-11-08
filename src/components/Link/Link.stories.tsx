import type { Meta, StoryObj } from '@storybook/react';

import Link from './Link';
import { DOWNLOAD_LINK_VARIANTS, LINK_VARIANTS } from './Link.types';

/** Exclude download link variant options */
const variantOptions = LINK_VARIANTS.filter(
  (opt) => !DOWNLOAD_LINK_VARIANTS.includes(opt as (typeof DOWNLOAD_LINK_VARIANTS)[number])
);

const meta = {
  title: 'Components/Link',
  component: Link,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    to: {
      control: 'text'
    },
    variant: {
      options: [undefined, ...variantOptions],
      control: { type: 'radio' }
    }
  }
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof Link>;

export const Playground: Story = {
  args: {
    href: 'docs-demo-link',
    children: 'Link'
  }
};
