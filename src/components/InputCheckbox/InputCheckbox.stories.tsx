import type { Meta, StoryObj } from '@storybook/react';
import { errorText, helpText } from '../../stories/helpers';

import InputCheckbox from './InputCheckbox';
import Fieldset from '../Fieldset';
import { ChangeEvent } from 'react';

const meta = {
  title: 'Components/Checkbox',
  component: InputCheckbox,
  tags: ['autodocs'],
  args: {
    label: 'Checkbox'
  }
} satisfies Meta<typeof InputCheckbox>;

export default meta;
type Story = StoryObj<typeof InputCheckbox>;

export const Playground: Story = {};

export const WithHelp: Story = {
  name: 'With help',
  args: {
    helpText
  }
};

export const WithError: Story = {
  name: 'With error',
  args: {
    errorText,
    forceValidation: true
  }
};

export const WithHelpAndError: Story = {
  name: 'With help and error',
  args: {
    helpText,
    errorText,
    forceValidation: true
  }
};

// TODO: Do we want checkbox group here or with fieldset?

let checkboxes = [
  {
    text: 'Checkbox 1',
    isChecked: true
  },
  {
    text: 'Checkbox 2',
    isChecked: false
  },
  {
    text: 'Checkbox 3',
    isChecked: false
  }
];

const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
  const updatedCheckboxes = [...checkboxes];
  updatedCheckboxes[index].isChecked = e.target.checked;
  checkboxes = updatedCheckboxes;
};

export const Group: Story = {
  render: (args) => (
    <Fieldset legend="Legend">
      <InputCheckbox label="Checkbox 1" />
      <InputCheckbox label="Checkbox 2" />
      <InputCheckbox label="Checkbox 3" />
    </Fieldset>
  )
};

export const GroupWithHelp: Story = {
  name: 'Group with help',
  render: (args) => (
    <Fieldset legend="Legend" helpText={helpText} helpId="groupWithHelpId">
      {checkboxes.map((checkbox, i) => (
        <InputCheckbox
          key={'checkboxListWithError' + checkbox.text}
          label={checkbox.text}
          aria-describedby="groupWithHelpId"
          defaultChecked={checkbox.isChecked}
          onChange={(e) => handleChange(e, i)}
        />
      ))}
    </Fieldset>
  )
};

export const GroupWithError: Story = {
  name: 'Group with error',
  render: (args) => (
    <Fieldset legend="Legend" errorText={errorText} errorId="groupWithErrorId">
      {checkboxes.map((checkbox, i) => (
        <InputCheckbox
          key={'checkboxListWithError' + checkbox.text}
          label={checkbox.text}
          aria-describedby="groupWithErrorId"
          aria-invalid={!!errorText}
          defaultChecked={checkbox.isChecked}
          onChange={(e) => handleChange(e, i)}
        />
      ))}
    </Fieldset>
  )
};

export const GroupWithHelpAndError: Story = {
  name: 'Group with help and error',
  render: (args) => (
    <Fieldset
      legend="Legend"
      helpText={helpText}
      errorText={errorText}
      errorId="groupWithErrorId"
      helpId="groupWithHelpId"
    >
      {checkboxes.map((checkbox, i) => (
        <InputCheckbox
          key={'checkboxListWithError' + checkbox.text}
          label={checkbox.text}
          aria-describedby="groupWithErrorId groupWithHelpId"
          aria-invalid={!!errorText}
          defaultChecked={checkbox.isChecked}
          onChange={(e) => handleChange(e, i)}
        />
      ))}
    </Fieldset>
  )
};
