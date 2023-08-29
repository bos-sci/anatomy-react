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
      options: ['', 'subtle', 'ghost', 'cta'],
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

export const DefaultLink: Story = {
  args: {
    children: 'Default link',
    href: 'docs-demo-link'
  }
};

DefaultLink.storyName = 'Default';

export const SubtleLink: Story = {
  args: {
    variant: 'subtle',
    children: 'Subtle link',
    href: 'docs-demo-link'
  }
};

SubtleLink.storyName = 'Subtle';

export const NavLink: Story = {
  // TODO: add nav link as an actual variant
  args: {
    className: 'bsds-link-nav',
    children: 'Navigation link',
    href: 'docs-demo-link'
  }
};

NavLink.storyName = 'Navigation';

export const CallToAction: Story = {
  args: {
    href: 'docs-demo-link',
    variant: 'cta',
    children: 'CTA link'
  }
};

CallToAction.storyName = 'Call-to-action (CTA)';
