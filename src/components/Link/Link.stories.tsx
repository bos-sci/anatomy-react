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
  render: (args) => <Link {...args}>Link</Link>
};

export const DefaultLink: Story = {
  args: {
    children: 'Default link'
  }
};

DefaultLink.storyName = 'Default';

export const SubtleLink: Story = {
  args: {
    variant: 'subtle',
    children: 'Subtle link'
  }
};

SubtleLink.storyName = 'Subtle';

export const NavLink: Story = {
  // TODO: add nav link as an actual variant
  args: {
    className: 'bsds-link-nav',
    children: 'Navigation link'
  }
};

NavLink.storyName = 'Navigation';

export const CallToAction: Story = {
  render: (args) => (
    <Link {...args} variant="cta">
      CTA link
    </Link>
  )
};

CallToAction.storyName = 'Call-to-action (CTA)';
