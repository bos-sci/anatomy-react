import type { Meta, StoryObj } from '@storybook/react';
import Footer from './Footer';
import { navItems, legalLinks } from './footerData';

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
    navItems
  }
};

export const WithAllOptional: Story = {
  name: 'With all optional',
  args: {
    navItems,
    legalLinkItems: legalLinks,
    corporateLink: true,
    tagline:
      'Boston Scientific is dedicated to transforming lives through innovative medical solutions that improve the health of patients around the world.',
    customizeCookies: '#',
    complianceCode: '124234234',
    socialMedia: {}
  }
};
