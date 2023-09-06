import type { Meta, StoryObj } from '@storybook/react';

import Fieldset from './Fieldset';
import InputText from '../InputText/InputText';
import Textarea from '../Textarea/Textarea';

const meta = {
  title: 'Components/Fieldset',
  component: Fieldset,
  parameters: {
    layout: 'padded'
  },
  tags: ['autodocs']
} satisfies Meta<typeof Fieldset>;

export default meta;
type Story = StoryObj<typeof Fieldset>;

export const Playground: Story = {
  args: {
    legend: 'Legend',
    helpText: 'This is an example of help text. It can wrap to two lines, but try not to go longer than three.',
    errorText: 'This is an example of an error message.'
  },
  render: (args) => (
    <Fieldset {...args}>
      <InputText label="Related text input" />
      <Textarea label="Related textarea" />
    </Fieldset>
  )
};
