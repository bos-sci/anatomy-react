import type { Meta, StoryObj } from '@storybook/react';

import ContentCard from './ContentCard';
import Tag from '../Tag/Tag';
import Image from '../Image/Image';

const meta = {
  title: 'Components/Content card',
  component: ContentCard,
  argTypes: {
    variant: {
      options: ['', 'border-light', 'border-ghost', 'ghost'],
      control: { type: 'radio' }
    },
    gradientBrand: {
      if: { arg: 'linkHref', truthy: true }
    },
    dropShadow: {
      if: { arg: 'linkHref', truthy: true }
    },
    tag: {
      control: false
    },
    image: {
      control: false
    }
  },
  tags: ['autodocs']
} satisfies Meta<typeof ContentCard>;

export default meta;
type Story = StoryObj<typeof ContentCard>;

export const Playground: Story = {
  args: {
    texts: {
      cardTitle: 'Card title',
      cardDescription:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum augue, viverra aliquet nunc. Cras eget felis sodales, vestibulum neque ac, rhoncus ipsum.'
    },
    headingLevel: 'h2'
  }
};

export const WithLink = {
  name: 'With link',
  args: {
    ...Playground.args,
    actionLink: true,
    actionLinkText: 'Link',
    linkHref: 'docs-demo-link'
  }
};

export const WithLinkedTitle = {
  name: 'With linked title',
  args: {
    ...Playground.args,
    linkTitle: true,
    linkHref: 'docs-demo-link'
  }
};

export const WithTag = {
  name: 'With tag',
  args: {
    ...Playground.args,
    tag: <Tag>Tag</Tag>
  }
};

export const WithShadow = {
  name: 'With shadow',
  args: {
    ...WithLink.args,
    dropShadow: true
  }
};

export const WithGradient = {
  name: 'With gradient',
  args: {
    ...WithLink.args,
    gradientBrand: true
  }
};

export const WithIcon = {
  name: 'With icon',
  args: {
    ...Playground.args,
    icon: true,
    iconName: 'demoCardIcon'
  }
};

export const WithImage = {
  name: 'With image',
  args: {
    ...Playground.args,
    image: <Image ratio="16:9" src="/images/50-50-split.jpg" alt={''} />
  }
};
