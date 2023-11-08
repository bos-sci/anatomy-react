import type { Meta, StoryObj } from '@storybook/react';
import { errorText, helpText } from '../../stories/helpers';
import { useState } from 'react';
import InputCheckbox from './InputCheckbox';
import Fieldset from '../Fieldset';
import { ChangeEvent, ChangeEventHandler } from 'react';

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

const useErrorState = (errorText: string): [string, ChangeEventHandler<HTMLInputElement>] => {
  const [error, setError] = useState(errorText);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setError(e.target.checked ? '' : errorText);
  };

  return [error, handleChange];
};

export const WithError = ({ ...args }) => {
  const [error, handleChange] = useErrorState(errorText);
  return <InputCheckbox label="Checkbox" errorText={error} forceValidation onChange={handleChange} />;
};
WithError.storyName = 'With error';

export const WithHelpAndError = ({ ...args }) => {
  const [error, handleChange] = useErrorState(errorText);
  return (
    <InputCheckbox label="Checkbox" helpText={helpText} errorText={error} forceValidation onChange={handleChange} />
  );
};
WithHelpAndError.storyName = 'With help and error';

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

const handleGroupChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
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
          key={'checkboxListWithHelp' + checkbox.text}
          label={checkbox.text}
          aria-describedby="groupWithHelpId"
          defaultChecked={checkbox.isChecked}
          onChange={(e) => handleGroupChange(e, i)}
        />
      ))}
    </Fieldset>
  )
};

const useGroupErrorState = (
  initialCheckboxes: typeof checkboxes,
  errorText: string
): [string, (e: ChangeEvent<HTMLInputElement>, index: number) => void] => {
  const [error, setError] = useState(errorText);
  const [checkboxes, setCheckboxes] = useState(initialCheckboxes);

  const handleGroupErrorChange: (e: ChangeEvent<HTMLInputElement>, index: number) => void = (e, index) => {
    const updatedCheckboxes = [...initialCheckboxes];
    updatedCheckboxes[index].isChecked = e.target.checked;
    setCheckboxes(updatedCheckboxes);

    if (checkboxes.filter((c) => c.isChecked === true).length < 2) {
      setError(errorText);
    } else {
      setError('');
    }
  };

  return [error, handleGroupErrorChange];
};

export const GroupWithError = ({ ...args }) => {
  const [error, handleGroupErrorChange] = useGroupErrorState(checkboxes, errorText as string);
  return (
    <Fieldset legend="Legend" errorText={error} errorId="groupWithErrorId">
      {checkboxes.map((checkbox, i) => (
        <InputCheckbox
          key={'checkboxListWithError' + checkbox.text}
          label={checkbox.text}
          aria-describedby="groupWithErrorId"
          aria-invalid={!!error}
          defaultChecked={checkbox.isChecked}
          onChange={(e) => handleGroupErrorChange(e, i)}
        />
      ))}
    </Fieldset>
  );
};
GroupWithError.storyName = 'Group with error';

export const GroupWithHelpAndError = ({ ...args }) => {
  const [error, handleGroupErrorChange] = useGroupErrorState(checkboxes, errorText as string);
  return (
    <Fieldset legend="Legend" helpText={helpText} errorText={error} errorId="groupWithErrorId" helpId="groupWithHelpId">
      {checkboxes.map((checkbox, i) => (
        <InputCheckbox
          key={'checkboxListWithHelpError' + checkbox.text}
          label={checkbox.text}
          aria-describedby="groupWithErrorId groupWithHelpId"
          aria-invalid={!!error}
          defaultChecked={checkbox.isChecked}
          onChange={(e) => handleGroupErrorChange(e, i)}
        />
      ))}
    </Fieldset>
  );
};
GroupWithHelpAndError.storyName = 'Group with help and error';
