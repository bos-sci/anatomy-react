import type { Meta, StoryObj } from '@storybook/react';

import NavPrimary from './NavPrimary';
import logoTagline from '../../../public/assets/images/logo-bsc-tagline.svg';
import { complexData, intermediateData, simpleData, utilityData } from './navPrimaryData';

const meta = {
  title: 'Components/Primary navigation',
  component: NavPrimary,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      story: {
        height: '42rem'
      }
    }
  },
  argTypes: {
    navItems: {
      // TODO: ADS-755 Figure out how to show this control by resolving cyclic object error when shown (occurs on navigation)
      control: false
    },
    utilityItems: {
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
      href: '.'
    },
    navigateToSearchResult: (result) => (window.location.href = result.href as string),
    location: window.location,
    utilityItems: utilityData
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
