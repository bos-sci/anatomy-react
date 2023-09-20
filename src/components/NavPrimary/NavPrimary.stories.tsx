import type { Meta } from '@storybook/react';

import NavPrimary, { NavNodePrimary, NavPrimaryProps } from './NavPrimary';
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
      alt: 'Boston Scientific logo',
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

export const Playground = ({ navItems, ...args }: NavPrimaryProps) => {
  const items = intermediateData;
  return <NavPrimary navItems={items} {...args} />;
};

export const Simple = ({ navItems, ...args }: NavPrimaryProps) => {
  const items = simpleData;
  return <NavPrimary navItems={items} {...args} />;
};

export const Intermediate = ({ navItems, ...args }: NavPrimaryProps) => {
  const items = intermediateData;
  return <NavPrimary navItems={items} {...args} />;
};

export const Complex = ({ navItems, ...args }: NavPrimaryProps) => {
  const items = complexData;
  return <NavPrimary navItems={items} {...args} />;
};
