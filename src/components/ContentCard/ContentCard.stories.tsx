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

export const WithTag = {
  args: {
    ...Playground.args,
    tag: <Tag variant="">Tag text</Tag>
  }
};

export const WithImage = {
  args: {
    ...Playground.args,
    image: <Image ratio="16:9" src="/images/50-50-split.jpg" alt={''} />
  }
};
