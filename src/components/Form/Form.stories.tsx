import type { Meta, StoryObj } from '@storybook/react';
import Form from './Form';
import InputText from '../InputText';
import { WithHelp } from '../InputText/InputText.stories';
import Fieldset from '../Fieldset';
import Select from '../Select/Select';
import Option from '../Option/Option';
import InputCheckbox from '../InputCheckbox/InputCheckbox';
import { helpText } from '../../stories/helpers';
import RadioGroup from '../RadioGroup/RadioGroup';
import InputRadio from '../InputRadio/InputRadio';
import Button from '../Button/Button';
import Textarea from '../Textarea/Textarea';

const meta = {
  title: 'Components/Form',
  component: Form,
  argTypes: {
    children: {
      control: false
    }
  },
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof Form>;

export default meta;
type Story = StoryObj<typeof Form>;

export const Playground: Story = {
  render: (args) => (
    <>
      <h2>Form example</h2>
      <p>Submit the form to see an example of validation.</p>
      <Form {...args}>
        <InputText className="bsds-mt-2x" label="Text input" {...WithHelp.args} />
        <InputText className="bsds-mt-3x" label="Required text input" required />
        <InputText className="bsds-mt-3x" label="Disabled text input" disabled />
        <Textarea className="bsds-mt-3x" label="Textarea" />
        <Select className="bsds-mt-3x" label="Select">
          <Option value="" disabled selected />
          <Option value="option1">Option 1</Option>
          <Option value="option2">Option 2</Option>
          <Option value="option3">Option 3</Option>
        </Select>
        <Fieldset className="bsds-mt-4x" legend="Checkbox group" helpText={helpText} helpId="groupWithHelpId">
          <InputCheckbox label="Checkbox 1" />
          <InputCheckbox label="Checkbox 2" />
          <InputCheckbox label="Checkbox 3" />
        </Fieldset>
        <RadioGroup className="bsds-mt-4x" legend="Radio group">
          <InputRadio label="Radio 1" name="groupDefault" value="defaultRadio1" defaultChecked />
          <InputRadio label="Radio 2" name="groupDefault" value="defaultRadio2" />
          <InputRadio label="Radio 3" name="groupDefault" value="defaultRadio3" />
        </RadioGroup>
        <InputCheckbox className="bsds-mt-4x" label="Required checkbox" required />
        <Button className="bsds-mt-4x" variant="assertive">
          Submit
        </Button>
      </Form>
    </>
  )
};
