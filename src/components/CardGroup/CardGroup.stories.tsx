import type { Meta, StoryObj } from '@storybook/react';

import CardGroup from './CardGroup';
import ContentCard from '../ContentCard/ContentCard';

const meta = {
  title: 'Components/Card group',
  component: CardGroup
} satisfies Meta<typeof CardGroup>;

export default meta;
type Story = StoryObj<typeof CardGroup>;

export const Playground: Story = {
  render: (args) => (
    <CardGroup {...args}>
      <ContentCard
        texts={{
          cardTitle: 'Card title',
          cardDescription:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum augue, viverra aliquet nunc. Cras eget felis sodales, vestibulum neque ac, rhoncus ipsum.'
        }}
        headingLevel="h2"
      />
      <ContentCard
        texts={{
          cardTitle: 'Card title',
          cardDescription:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum augue, viverra aliquet nunc. Cras eget felis sodales, vestibulum neque ac, rhoncus ipsum.'
        }}
        headingLevel="h2"
      />
    </CardGroup>
  )
};
