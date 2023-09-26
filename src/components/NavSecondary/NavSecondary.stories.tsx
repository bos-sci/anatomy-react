import type { Meta, StoryObj } from '@storybook/react';

import NavSecondary, { NavItemSecondary } from './NavSecondary';
import { MemoryRouter, Routes, Route } from 'react-router-dom';

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
  },
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Routes>
          <Route path="/" element={<Story />} />
        </Routes>
      </MemoryRouter>
    )
  ]
} satisfies Meta<typeof NavSecondary>;

export default meta;
type Story = StoryObj<typeof NavSecondary>;

const navItems: NavItemSecondary[] = [
  {
    text: 'Page',
    to: '/page'
  },
  {
    text: 'Active page',
    to: '/'
  },
  {
    text: 'Page group',
    children: [
      {
        text: 'Child page 1',
        to: '/child-page'
      },
      {
        text: 'Child page 2',
        to: '/child-page'
      },
      {
        text: 'Nested page group',
        children: [
          {
            text: 'Nested child page 1',
            to: '/nested-child-page'
          },
          {
            text: 'Nested child page 2',
            to: '/nested-child-page'
          },
          {
            text: 'Nested child page 3',
            to: '/nested-child-page'
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
