import type { Meta, StoryObj } from '@storybook/react';

import NavUtility from './NavUtility';
import { utilityData } from '../NavPrimary/navPrimaryData';

const meta = {
  title: 'Components/Utility navigation',
  component: NavUtility,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen'
  }
} satisfies Meta<typeof NavUtility>;

export default meta;
type Story = StoryObj<typeof NavUtility>;

export const Playground: Story = {
  args: {
    utilityItems: utilityData
  }
};
