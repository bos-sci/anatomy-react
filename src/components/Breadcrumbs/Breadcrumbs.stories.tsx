// TODO:
// decide if we want to show overflow as a separate story
// decide if we can/want to share dummy data across components

import type { Meta, StoryObj } from '@storybook/react';

import Breadcrumbs from './Breadcrumbs';

const meta = {
  title: 'Components/Breadcrumbs',
  component: Breadcrumbs,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof Breadcrumbs>;

export default meta;
type Story = StoryObj<typeof Breadcrumbs>;

export const Playground: Story = {
  args: {
    crumbs: [
      {
        name: 'Great grandparent page',
        href: 'docs-demo-link'
      },
      {
        name: 'Grandparent page',
        href: 'docs-demo-link'
      },
      {
        name: 'Parent page',
        href: 'docs-demo-link'
      }
    ],
    currentPage: 'Current page',
    hasOverflow: false,
    texts: {
      breadcrumbsNavAriaLabel: 'Breadcrumbs'
    }
  }
};

export const Overflow: Story = {
  parameters: {
    docs: {
      story: {
        height: '10rem'
      }
    }
  },
  // TODO: should this be "With overflow" like button with icon on the left/right?
  args: {
    crumbs: [
      {
        name: 'Great grandparent page',
        href: 'docs-demo-link'
      },
      {
        name: 'Grandparent page',
        href: 'docs-demo-link'
      },
      {
        name: 'Parent page',
        href: 'docs-demo-link'
      }
    ],
    currentPage: 'Current page',
    hasOverflow: true,
    texts: {
      breadcrumbsNavAriaLabel: 'Breadcrumbs',
      breadcrumbsDropdownAriaLabel: 'Toggle breadcrumbs menu'
    }
  }
};
