import type { Meta } from '@storybook/react';

import NavSecondary, { NavItemSecondary, NavSecondaryProps } from './NavSecondary';

const meta = {
  title: 'Components/Secondary navigation',
  component: NavSecondary,
  tags: ['autodocs'],
  argTypes: {
    navItems: {
      control: false
    }
  }
} satisfies Meta<typeof NavSecondary>;

export default meta;

export const Playground = ({ location, navItems, ...args }: NavSecondaryProps) => {
  const items: NavItemSecondary[] = [
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
  return <NavSecondary navItems={items} location={window.location} {...args} />;
};