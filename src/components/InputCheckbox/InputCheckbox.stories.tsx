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

interface Checkbox {
  text: string;
  isChecked: boolean;
}

const checkboxDefaults = [
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

const isValid = (checkboxes: Checkbox[]) => checkboxes.filter((c: Checkbox) => c.isChecked === true).length >= 2;

export const Group = ({ ...args }) => {
  return (
    <Fieldset legend="Legend">
      {checkboxDefaults.map((checkbox, i) => (
        <InputCheckbox key={'checkboxList' + checkbox.text} label={checkbox.text} />
      ))}
    </Fieldset>
  );
};

export const GroupWithHelp = ({ ...args }) => {
  const [checkboxes, setCheckboxes] = useState(
    checkboxDefaults.map((checkbox) => {
      return { ...checkbox };
    })
  );
  const handleGroupChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const updatedCheckboxes = [...checkboxes];
    updatedCheckboxes[index].isChecked = e.target.checked;
    setCheckboxes(updatedCheckboxes);
  };

  return (
    <Fieldset legend="Legend" helpText={helpText} helpId="groupWithHelpId">
      {checkboxes.map((checkbox, i) => (
        <InputCheckbox
          key={'checkboxListWithHelp' + checkbox.text}
          label={checkbox.text}
          aria-describedby="groupWithHelpId"
          checked={checkboxes[i].isChecked}
          onChange={(e) => handleGroupChange(e, i)}
        />
      ))}
    </Fieldset>
  );
};
GroupWithHelp.storyName = 'Group with help';

export const GroupWithError = ({ ...args }) => {
  const [error, setError] = useState(errorText);
  const [checkboxes, setCheckboxes] = useState(
    checkboxDefaults.map((checkbox) => {
      return { ...checkbox };
    })
  );
  const handleGroupChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const updatedCheckboxes = [...checkboxes];
    updatedCheckboxes[index].isChecked = e.target.checked;
    setCheckboxes(updatedCheckboxes);
    setError(isValid(checkboxes) ? '' : errorText);
  };
  return (
    <Fieldset legend="Legend" errorText={error} errorId="groupWithErrorId">
      {checkboxes.map((checkbox, i) => (
        <InputCheckbox
          key={'checkboxListWithError' + checkbox.text}
          label={checkbox.text}
          aria-describedby="groupWithErrorId"
          aria-invalid={!!error}
          checked={checkboxes[i].isChecked}
          onChange={(e) => handleGroupChange(e, i)}
        />
      ))}
    </Fieldset>
  );
};
GroupWithError.storyName = 'Group with error';

export const GroupWithHelpAndError = ({ ...args }) => {
  const [error, setError] = useState(errorText);
  const [checkboxes, setCheckboxes] = useState(
    checkboxDefaults.map((checkbox) => {
      return { ...checkbox };
    })
  );
  const handleGroupChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const updatedCheckboxes = [...checkboxes];
    updatedCheckboxes[index].isChecked = e.target.checked;
    setCheckboxes(updatedCheckboxes);
    setError(isValid(checkboxes) ? '' : errorText);
  };
  return (
    <Fieldset legend="Legend" helpText={helpText} errorText={error} errorId="groupWithErrorId" helpId="groupWithHelpId">
      {checkboxes.map((checkbox, i) => (
        <InputCheckbox
          key={'checkboxListWithHelpAndError' + checkbox.text}
          label={checkbox.text}
          aria-describedby="groupWithErrorId groupWithHelpId"
          aria-invalid={!!error}
          checked={checkboxes[i].isChecked}
          onChange={(e) => handleGroupChange(e, i)}
        />
      ))}
    </Fieldset>
  );
};
GroupWithHelpAndError.storyName = 'Group with help and error';
