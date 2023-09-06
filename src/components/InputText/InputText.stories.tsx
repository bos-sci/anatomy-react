import type { Meta, StoryObj } from '@storybook/react';

import InputText from './InputText';

const meta = {
  title: 'Components/Text input',
  component: InputText,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  args: {
    label: 'Text input'
  }
} satisfies Meta<typeof InputText>;

export default meta;
type Story = StoryObj<typeof InputText>;

const helpText = 'This is an example of help text. It can wrap to two lines, but try not to go longer than three.';
const errorText = 'This is an example of an error message.';

export const Playground: Story = {};

export const WithPlaceholder: Story = {
  args: {
    placeholder: 'Placeholder text'
  }
};

export const WithHelp: Story = {
  args: {
    helpText
  }
};

export const WithError: Story = {
  args: {
    errorText,
    forceValidation: true
  }
};

export const WithHelpAndError: Story = {
  args: {
    helpText,
    errorText,
    forceValidation: true
  }
};
