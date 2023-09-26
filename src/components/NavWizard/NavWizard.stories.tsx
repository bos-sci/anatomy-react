import type { Meta, StoryObj } from '@storybook/react';

import NavWizard from './NavWizard';
import navWizardData from './navWizardData-3Step';

const meta = {
  title: 'Components/Wizard navigation',
  component: NavWizard,
  tags: ['autodocs'],
  argTypes: {
    texts: {
      control: false
    },
    navItems: {
      // TODO: ADS-755 Figure out how to show this control by resolving cyclic object error when shown (occurs on navigation)
      control: false
    }
  }
} satisfies Meta<typeof NavWizard>;

export default meta;
type Story = StoryObj<typeof NavWizard>;

export const Playground: Story = {
  args: {
    texts: {
      firstTitle: 'First step title',
      wizardNavAriaLabel: 'wizard'
    },
    navItems: navWizardData
  }
};
