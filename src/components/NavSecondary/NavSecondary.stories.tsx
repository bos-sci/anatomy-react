import type { Meta, StoryObj } from '@storybook/react';

import NavSecondary, { NavItemSecondary } from './NavSecondary';

const meta = {
  title: 'Components/Secondary navigation',
  component: NavSecondary,
  tags: ['autodocs'],
  argTypes: {
    navItems: {
      // TODO: ADS-755 Figure out how to show this control by resolving cyclic object error when shown (occurs on navigation)
      control: false
    },
    texts: {
      control: false
    }
  },
  args: {
    location: window.location
  }
} satisfies Meta<typeof NavSecondary>;

export default meta;
type Story = StoryObj<typeof NavSecondary>;

const navItems: NavItemSecondary[] = [
  {
    text: 'Page',
    href: '/page'
  },
  {
    text: 'Active page',
    href: '#'
  },
  {
    text: 'Page group',
    children: [
      {
        text: 'Child page 1',
        href: '/child-page'
      },
      {
        text: 'Child page 2',
        href: '/child-page'
      },
      {
        text: 'Nested page group',
        children: [
          {
            text: 'Nested child page 1',
            href: '/nested-child-page'
          },
          {
            text: 'Nested child page 2',
            href: '/nested-child-page'
          },
          {
            text: 'Nested child page 3',
            href: '/nested-child-page'
          }
        ]
      }
    ]
  }
];

export const Playground: Story = {
  args: {
    navItems
  }
};
