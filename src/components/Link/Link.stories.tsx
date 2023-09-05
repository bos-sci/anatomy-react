// TODO: can we turn off controls for all non-playground stories?
import type { Meta, StoryObj } from '@storybook/react';

import Link from './Link';

const meta = {
  title: 'Components/Link',
  component: Link,
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    variant: {
      options: ['', 'cta', 'ghost', 'nav', 'subtle'],
      control: { type: 'radio' }
    }
  },
  tags: ['autodocs']
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof Link>;

export const Playground: Story = {
  // TODO: consider removing playground in lieu of default link story
  args: {
    href: 'docs-demo-link',
    children: 'Link'
  }
};
