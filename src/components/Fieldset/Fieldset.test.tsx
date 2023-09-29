import { render, screen } from '@testing-library/react';
import Fieldset from '../Fieldset';
import InputText from '../InputText';

describe('Fieldset', () => {
  it('Renders a fieldset by default', () => {
    render(
      <Fieldset legend="Default fieldset">
        <InputText label="Default related input" />
      </Fieldset>
    );
    expect(screen.getByText('Default fieldset')).toBeInTheDocument();
    expect(screen.getByLabelText('Default related input')).toBeInTheDocument();
  });
  it("renders help text when 'helpText' is present", () => {
    render(
      <Fieldset legend="With help fieldset" helpText="Help text">
        <InputText label="Help related input" />
      </Fieldset>
    );
    expect(screen.getByText('With help fieldset')).toBeInTheDocument();
    expect(screen.getByLabelText('Help related input')).toBeInTheDocument();
    expect(screen.getByText('Help text')).toBeInTheDocument();
  });
  it("renders an error node when 'forceValidation' is true and 'errorText' is present", () => {
    render(
      <Fieldset legend="With error fieldset" errorText="Error text">
        <InputText label="Error related input" forceValidation />
      </Fieldset>
    );
    expect(screen.getByText('With error fieldset')).toBeInTheDocument();
    expect(screen.getByText('Error text')).toBeInTheDocument();
  });
  it("does not render an error node if 'forceValidation' is false", () => {
    render(
      <Fieldset legend="With error fieldset" errorText="Error text">
        <InputText label="Error related input" />
      </Fieldset>
    );
    expect(screen.queryByText('Error text')).not.toBeInTheDocument();
  });
});
