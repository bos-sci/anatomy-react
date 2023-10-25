import type { Meta, StoryObj } from '@storybook/react';
import { errorText, helpText } from '../../stories/helpers';

import RadioGroup from './RadioGroup';
import InputRadio from '../InputRadio';

const meta = {
  title: 'Components/Radio group',
  component: RadioGroup,
  argTypes: {
    children: {
      control: false
    }
  },
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

export const ButtonGroup: Story = {
  name: 'Button group',
  render: (args) => (
    <RadioGroup buttonGroup {...args}>
      <InputRadio
        label="Radio 1"
        name="groupButtonStyleRadio"
        value="groupButtonStyleRadio1"
        defaultChecked
        forceValidation
      />
      <InputRadio label="Radio 2" name="groupButtonStyleRadio" value="groupButtonStyleRadio2" />
      <InputRadio label="Radio 3" name="groupButtonStyleRadio" value="groupButtonStyleRadio3" inputUnavailable />
    </RadioGroup>
  )
};

export const ButtonGroupWithHelp: Story = {
  name: 'Button group with help',
  args: {
    helpText
  },
  render: (args) => (
    <RadioGroup buttonGroup {...args}>
      <InputRadio
        label="Radio 1"
        name="groupButtonStyleRadio"
        value="groupButtonStyleRadio1"
        defaultChecked
        forceValidation
      />
      <InputRadio label="Radio 2" name="groupButtonStyleRadio" value="groupButtonStyleRadio2" />
      <InputRadio label="Radio 3" name="groupButtonStyleRadio" value="groupButtonStyleRadio3" inputUnavailable />
    </RadioGroup>
  )
};

export const ButtonGroupWithError: Story = {
  name: 'Button group with error',
  args: {
    errorText
  },
  render: (args) => (
    <RadioGroup buttonGroup {...args}>
      <InputRadio
        label="Radio 1"
        name="groupButtonStyleRadio"
        value="groupButtonStyleRadio1"
        defaultChecked
        forceValidation
      />
      <InputRadio label="Radio 2" name="groupButtonStyleRadio" value="groupButtonStyleRadio2" />
      <InputRadio label="Radio 3" name="groupButtonStyleRadio" value="groupButtonStyleRadio3" inputUnavailable />
    </RadioGroup>
  )
};

export const ButtonGroupWithHelpAndError: Story = {
  name: 'Button group with help and error',
  args: {
    helpText,
    errorText
  },
  render: (args) => (
    <RadioGroup buttonGroup {...args}>
      <InputRadio
        label="Radio 1"
        name="groupButtonStyleRadio"
        value="groupButtonStyleRadio1"
        defaultChecked
        forceValidation
      />
      <InputRadio label="Radio 2" name="groupButtonStyleRadio" value="groupButtonStyleRadio2" />
      <InputRadio label="Radio 3" name="groupButtonStyleRadio" value="groupButtonStyleRadio3" inputUnavailable />
    </RadioGroup>
  )
};
