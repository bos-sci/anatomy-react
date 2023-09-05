import type { Meta, StoryObj } from '@storybook/react';

import NavWizard from './NavWizard';
import navWizardData from './navWizardData-3Step';

const meta = {
  title: 'Components/Wizard navigation',
  component: NavWizard,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof NavWizard>;

export default meta;
type Story = StoryObj<typeof NavWizard>;

export const Playground: Story = {
  render: (args) => (
    <NavWizard
      {...args}
      texts={{
        firstTitle: 'First step title',
        wizardNavAriaLabel: 'wizard'
      }}
      navItems={navWizardData}
    />
  )
};
