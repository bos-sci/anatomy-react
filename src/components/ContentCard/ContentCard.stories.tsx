import type { Meta, StoryObj } from '@storybook/react';

import ContentCard from './ContentCard';
import Tag from '../Tag/Tag';
import Image from '../Image/Image';
import image5050 from '/assets/images/50-50-split.jpg';

const meta = {
  title: 'Components/ContentCard',
  component: ContentCard,
  argTypes: {
    variant: {
      options: ['', 'border-light', 'border-ghost', 'ghost'],
      control: { type: 'radio' },
      table: { defaultValue: { summary: '' } }
    },
    actionLinkText: {
      if: { arg: 'actionLink' }
    }
  },
  tags: ['autodocs']
} satisfies Meta<typeof ContentCard>;

export default meta;
type Story = StoryObj<typeof ContentCard>;

export const Default: Story = {
  args: {
    texts: {
      cardTitle: 'Card title',
      cardDescription:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum augue, viverra aliquet nunc. Cras eget felis sodales, vestibulum neque ac, rhoncus ipsum.'
    },
    headingLevel: 'h2',
    variant: '',
    actionLink: false,
    actionLinkText: 'Call-to-action'
  },
  render: (args) => <ContentCard {...args} />
};

export const WithTag = {
  args: {
    ...Default.args,
    tag: <Tag>Tag Text</Tag>
  }
};

export const WithImage = {
  args: {
    ...Default.args,
    image: <Image ratio="50:50" src={image5050} alt=" " />
  }
};
