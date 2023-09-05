import type { Meta, StoryObj } from '@storybook/react';

import ProductCard from './ProductCard';
import Tag from '../Tag/Tag';
import Image from '../Image/Image';

const meta = {
  title: 'Components/Product card',
  component: ProductCard,
  argTypes: {
    variant: {
      options: ['', 'border-light', 'border-ghost', 'ghost'],
      control: { type: 'radio' }
    },
    dropShadow: {
      if: { arg: 'gradientBrand', truthy: false }
    },
    gradientBrand: {
      if: { arg: 'dropShadow', truthy: false }
    }
  },
  tags: ['autodocs']
} satisfies Meta<typeof ProductCard>;

export default meta;
type Story = StoryObj<typeof ProductCard>;

export const Playground: Story = {
  args: {
    texts: {
      title: 'Product card title',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum augue, viverra aliquet nunc. Cras eget felis sodales, vestibulum neque ac, rhoncus ipsum.'
    },
    linkTo: 'docs-demo-link',
    headingLevel: 'h2'
  }
};

export const Default = {
  args: {
    ...Playground.args
  }
};

export const SemanticCardTitle = {
  args: {
    ...Playground.args
  }
};

export const NonSemanticCardTitle = {
  args: {
    ...Playground.args,
    headingLevel: '',
    assertiveTitle: true
  }
};

export const WithTag = {
  args: {
    ...Playground.args,
    tag: <Tag variant="">Product family name</Tag>
  }
};

export const WithShadow = {
  args: {
    ...Playground.args,
    dropShadow: true
  }
};

export const WithGradient = {
  args: {
    ...Playground.args,
    gradientBrand: true
  }
};

export const WithImage = {
  args: {
    ...Playground.args,
    image: <Image ratio="50:50" src="/images/50-50-split.jpg" alt={''} />
  }
};
