import type { Meta, StoryObj } from '@storybook/react';
import Footer from './Footer';
import { navItems, navItemsIntermediate, legalLinks, SocialLinks } from './footerData';

const meta = {
  title: 'Components/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs']
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof Footer>;

export const Playground: Story = {
  args: {
    navItems: navItems
  }
};

export const Simple: Story = {
  args: {
    legalLinkItems: legalLinks,
    corporateLink: true,
    texts: {
      tagline:
        'Boston Scientific is dedicated to transforming lives through innovative medical solutions that improve the health of patients around the world.'
    },
    customizeCookiesLink: 'docs-demo-link',
    complianceCode: '123456789',
    socialMedia: SocialLinks
  }
};

export const Intermediate: Story = {
  args: {
    navItems: navItemsIntermediate,
    ...Simple.args
  }
};

export const Complex: Story = {
  args: {
    navItems,
    ...Simple.args
  }
};
