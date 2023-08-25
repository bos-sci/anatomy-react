import type { Meta, StoryObj } from '@storybook/react';

import ProductCard from './ProductCard';

const meta = {
  title: 'Components/ProductCard',
  component: ProductCard,
  argTypes: {
    variant: {
      options: ['', 'border-light', 'border-ghost', 'ghost'],
      control: { type: 'radio' }
    }
  },
  tags: ['autodocs']
} satisfies Meta<typeof ProductCard>;

export default meta;
type Story = StoryObj<typeof ProductCard>;

export const Playground: Story = {
  render: (args) => (
    <ProductCard
      {...args}
      texts={{
        title: 'Product card title',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum augue, viverra aliquet nunc. Cras eget felis sodales, vestibulum neque ac, rhoncus ipsum.'
      }}
    />
  )
};
