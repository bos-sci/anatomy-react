// TODO: ADS-606 Add default Radio group tests

import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import RadioGroup from './RadioGroup';
import InputRadio from '../InputRadio';

describe('Button style Radio Group component', () => {
  it('Renders correctly with buttonGroup props', () => {
    render(
      <RadioGroup legend="Test button group" buttonGroup>
        <InputRadio label="Test Radio 1" />
        <InputRadio label="Test Radio 2" />
      </RadioGroup>
    );
    expect(screen.getByRole('radiogroup')).toBeInTheDocument();
    expect(screen.getByRole('radiogroup')).toHaveClass('bsds-fieldset-button-group');
  });

  it('Calls onChange when clicked', async () => {
    const onChange = jest.fn();

    render(
      <RadioGroup legend="Test button group" buttonGroup>
        <InputRadio label="Test Radio 1" onChange={onChange} />
        <InputRadio label="Test Radio 2" onChange={onChange} />
      </RadioGroup>
    );

    const user = userEvent.setup();

    const buttonRadio = screen.getByLabelText('Test Radio 1');

    await user.click(buttonRadio);

    expect(onChange).toBeCalled();
    expect(buttonRadio).toBeChecked();
  });

  it('Has error node on blur when required and not checked', async () => {
    render(
      <RadioGroup legend="Test button group" buttonGroup>
        <InputRadio label="Test Radio 1" required />
        <InputRadio label="Test Radio 2" required />
      </RadioGroup>
    );
    const checkbox = screen.getByLabelText('Test Radio 1');
    await waitFor(() => checkbox.focus());
    await waitFor(() => checkbox.blur());
    const errorNode = screen.getByText('Please complete the required field.');

    expect(errorNode).toBeInTheDocument();
  });

  it('Renders an unavailable button style input when inputUnavailable is true', () => {
    render(
      <RadioGroup legend="Test button group" buttonGroup>
        <InputRadio label="Test Radio 1" inputUnavailable />
        <InputRadio label="Test Radio 2" inputUnavailable />
      </RadioGroup>
    );
    expect(screen.getByText('Test Radio 1')).toHaveClass('bsds-input-radio-label-unavailable');
  });
});
