import type { Meta, StoryObj } from '@storybook/react';
import NavTertiary from './NavTertiary';

const meta = {
  title: 'Components/Tertiary navigation',
  component: NavTertiary,
  tags: ['autodocs']
} satisfies Meta<typeof NavTertiary>;

export default meta;
type Story = StoryObj<typeof NavTertiary>;

export const Playground: Story = {
  args: {
    navTertiaryItems: [
      {
        id: 'section1',
        text: 'First section heading'
      },
      {
        id: 'section2',
        text: 'Second section heading'
      },
      {
        id: 'section3',
        text: 'Third section heading'
      }
    ],
    hasReactRouter: false
  }
};
