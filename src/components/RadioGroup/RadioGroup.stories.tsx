import type { Meta, StoryObj } from '@storybook/react';
import { errorText, helpText } from '../../stories/helpers';

import RadioGroup from './RadioGroup';
import InputRadio from '../InputRadio';

const meta = {
  title: 'Components/Radio group',
  component: RadioGroup,
  args: {
    legend: 'Legend'
  }
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof RadioGroup>;

// TODO: Check IDs for duplicates after deciding if we want stories on docs

export const Playground: Story = {
  render: (args) => (
    <RadioGroup {...args}>
      <InputRadio label="Radio 1" name="groupDefault" value="defaultRadio1" defaultChecked />
      <InputRadio label="Radio 2" name="groupDefault" value="defaultRadio2" />
      <InputRadio label="Radio 3" name="groupDefault" value="defaultRadio3" />
    </RadioGroup>
  )
};

export const WithHelp: Story = {
  name: 'With help',
  args: {
    helpText
  },
  render: (args) => (
    <RadioGroup {...args}>
      <InputRadio label="Radio 1" name="groupDefault" value="defaultRadio1" defaultChecked />
      <InputRadio label="Radio 2" name="groupDefault" value="defaultRadio2" />
      <InputRadio label="Radio 3" name="groupDefault" value="defaultRadio3" />
    </RadioGroup>
  )
};

export const WithError: Story = {
  name: 'With error',
  args: {
    errorText
  },
  render: (args) => (
    <RadioGroup {...args}>
      <InputRadio label="Radio 1" name="groupDefault" value="defaultRadio1" defaultChecked forceValidation />
      <InputRadio label="Radio 2" name="groupDefault" value="defaultRadio2" />
      <InputRadio label="Radio 3" name="groupDefault" value="defaultRadio3" />
    </RadioGroup>
  )
};

export const WithHelpAndError: Story = {
  name: 'With help and error',
  args: {
    helpText,
    errorText
  },
  render: (args) => (
    <RadioGroup {...args}>
      <InputRadio label="Radio 1" name="groupDefault" value="defaultRadio1" defaultChecked forceValidation />
      <InputRadio label="Radio 2" name="groupDefault" value="defaultRadio2" />
      <InputRadio label="Radio 3" name="groupDefault" value="defaultRadio3" />
    </RadioGroup>
  )
};
