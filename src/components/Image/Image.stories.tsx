import type { Meta, StoryObj } from '@storybook/react';

import Image from './Image';

//TODO: Figure out why the image isn't responsive
const meta = {
  title: 'Components/Image',
  component: Image,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof Image>;

export const Playground: Story = {
  args: {
    src: '/assets/images/50-50-split.jpg',
    alt: ''
  },
  render: (args) => <Image {...args} />
};
