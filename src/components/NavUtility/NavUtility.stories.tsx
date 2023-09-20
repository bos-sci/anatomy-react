import type { Meta } from '@storybook/react';

import NavUtility, { NavUtilityProps } from './NavUtility';
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

export const Playground = ({ utilityItems, ...args }: NavUtilityProps) => {
  return <NavUtility utilityItems={utilityData} {...args} />;
};
