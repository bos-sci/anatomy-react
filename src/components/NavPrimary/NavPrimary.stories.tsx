import type { Meta, StoryObj } from '@storybook/react';

import NavPrimary, { NavNodePrimary } from './NavPrimary';
import logoTagline from '../../stories/assets/logo-bsc-tagline.svg';
import { complexData, intermediateData, simpleData } from './navPrimaryData';
import { RefObject } from 'react';

const meta = {
  title: 'Components/Primary navigation',
  component: NavPrimary,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen'
  },
  argTypes: {
    navItems: {
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
      return ref.current?.href === window.location.href;
    },
    navigateToSearchResult: (result) => (window.location.href = result.href as string),
    location: window.location
  }
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
