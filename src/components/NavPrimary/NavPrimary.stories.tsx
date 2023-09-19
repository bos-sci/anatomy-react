import type { Meta } from '@storybook/react';

import NavPrimary, { NavNodePrimary, NavPrimaryProps } from './NavPrimary';
import logoTagline from '../../stories/assets/logo-bsc-tagline.svg';
import { intermediateData, utilityData } from './navPrimaryData';
import { RefObject } from 'react';

const meta = {
  title: 'Components/Primary navigation',
  component: NavPrimary,
  tags: ['autodocs'],
  parameters: {
    layout: 'flush'
  },
  argTypes: {
    navItems: {
      control: false
    }
  }
} satisfies Meta<typeof NavPrimary>;

export default meta;

export const Playground = ({ location, navItems, ...args }: NavPrimaryProps) => {
  const items = intermediateData;
  const utilItems = utilityData;
  const logo = {
    src: logoTagline,
    alt: 'Boston Scientific logo',
    href: '/'
  };

  const isActiveNode = (node: NavNodePrimary, ref: RefObject<HTMLAnchorElement>) => {
    return ref.current?.href === window.location.href;
  };

  return (
    <NavPrimary
      logo={logo}
      navItems={items}
      utilityItems={utilItems}
      location={window.location}
      isActiveNode={(node: NavNodePrimary, ref: RefObject<HTMLAnchorElement>) => isActiveNode(node, ref)}
      navigateToSearchResult={(result) => (window.location.href = result.href as string)}
    />
  );
};
