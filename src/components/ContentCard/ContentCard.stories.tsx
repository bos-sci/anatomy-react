import type { Meta, StoryObj } from '@storybook/react';

import ContentCard from './ContentCard';

const meta = {
  title: 'Components/ContentCard',
  component: ContentCard,
  argTypes: {
    variant: {
      options: ['', 'border-light', 'border-ghost', 'ghost'],
      control: { type: 'radio' }
    }
  },
  tags: ['autodocs']
} satisfies Meta<typeof ContentCard>;

export default meta;
type Story = StoryObj<typeof ContentCard>;

export const Playground: Story = {
  render: (args) => (
    <ContentCard
      {...args}
      texts={{
        cardTitle: 'Card title',
        cardDescription:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum augue, viverra aliquet nunc. Cras eget felis sodales, vestibulum neque ac, rhoncus ipsum.'
      }}
    />
  )
};
