import type { Meta, StoryObj } from '@storybook/react';

import NavPrimary, { NavNodePrimary } from './NavPrimary';
import logoTagline from '../../stories/assets/logo-bsc-tagline.svg';
import { complexData, intermediateData, simpleData } from './navPrimaryData';
import { RefObject } from 'react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';

const meta = {
  title: 'Components/Primary navigation',
  component: NavPrimary,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen'
  },
  argTypes: {
    navItems: {
      // TODO: Figure out how to show this control by resolving cyclic object error when shown (occurs on navigation)
      control: false
    },
    searchResults: {
      control: false
    },
    texts: {
      control: false
    }
  },
  args: {
    logo: {
      src: logoTagline,
      alt: 'Boston Scientific',
      href: '/'
    },
    isActiveNode: (node: NavNodePrimary, ref: RefObject<HTMLAnchorElement>) => {
      return ref.current?.pathname === window.parent.window.location.pathname;
    },
    navigateToSearchResult: (result) => (window.location.href = result.href as string),
    location: window.parent.window.location
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
} satisfies Meta<typeof NavPrimary>;

export default meta;
type Story = StoryObj<typeof NavPrimary>;

export const Playground: Story = {
  args: {
    navItems: intermediateData
  }
};

export const Simple: Story = {
  args: {
    navItems: simpleData
  }
};

export const Intermediate: Story = {
  args: {
    navItems: intermediateData
  }
};

export const Complex: Story = {
  args: {
    navItems: complexData
  }
};
