import type { Meta, StoryObj } from '@storybook/react';
import { errorText, helpText } from '../../stories/helpers';
import { useState, ChangeEvent } from 'react';

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

const radios = [
  {
    label: 'Radio 1',
    value: 'defaultRadio1',
    isChecked: true
  },
  {
    label: 'Radio 2',
    value: 'defaultRadio2',
    isChecked: false
  },
  {
    label: 'Radio 3',
    value: 'defaultRadio3',
    isChecked: false
  }
];

const useErrorState = (
  initialRadios: typeof radios,
  errorText: string
): [string, (e: ChangeEvent<HTMLInputElement>, index: number) => void] => {
  const [error, setError] = useState(errorText);
  const [radios, setRadios] = useState(initialRadios);

  const handleChange: (e: ChangeEvent<HTMLInputElement>, index: number) => void = (e, index) => {
    const updatedRadios = [...radios];
    updatedRadios.forEach((radio) => (radio.isChecked = false));
    updatedRadios[index].isChecked = e.target.checked;
    setRadios(updatedRadios);

    if (radios.filter((c) => c.isChecked && c.value === 'defaultRadio1').length > 0) {
      setError(errorText);
    } else {
      setError('');
    }
  };

  return [error, handleChange];
};

export const WithError = ({ ...args }) => {
  const [error, handleChange] = useErrorState(radios, errorText as string);
  return (
    <RadioGroup legend="Legend" errorText={error}>
      {radios.map((radio, i) => (
        <InputRadio
          key={'checkboxListWithError' + radio.label}
          label={radio.label}
          name="groupDefault"
          value={radio.value}
          defaultChecked={radio.isChecked}
          forceValidation
          onChange={(e) => handleChange(e, i)}
        />
      ))}
    </RadioGroup>
  );
};
WithError.storyName = 'With error';

export const WithHelpAndError = ({ ...args }) => {
  const [error, handleChange] = useErrorState(radios, errorText as string);
  return (
    <RadioGroup legend="Legend" errorText={error} helpText={helpText}>
      {radios.map((radio, i) => (
        <InputRadio
          key={'checkboxListWithError' + radio.label}
          label={radio.label}
          name="groupDefault"
          value={radio.value}
          defaultChecked={radio.isChecked}
          forceValidation
          onChange={(e) => handleChange(e, i)}
        />
      ))}
    </RadioGroup>
  );
};
WithHelpAndError.storyName = 'With help and error';

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
