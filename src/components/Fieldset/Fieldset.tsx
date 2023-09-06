import { FieldsetHTMLAttributes, useEffect, useState } from 'react';

export interface FieldsetProps extends FieldsetHTMLAttributes<HTMLFieldSetElement> {
  /**
   * Caption that describes the set of form controls grouped together in the fieldset
   */
  legend: string;
  errorText?: string;
  helpText?: string;
}

let fieldsetId = 0;

const Fieldset = ({ legend, errorText, helpText, children, ...fieldsetAttrs }: FieldsetProps): JSX.Element => {
  const [helpTextId, setHelpTextId] = useState('');
  const [errorTextId, setErrorTextId] = useState('');

  useEffect(() => {
    const idNum = ++fieldsetId;
    setHelpTextId('fieldsetHelpText' + idNum);
    setErrorTextId('fieldsetErrorText' + idNum);
  }, []);

  return (
    <fieldset className="bsds-fieldset" aria-describedby={helpTextId ? helpTextId : ''} {...fieldsetAttrs}>
      <legend className="bsds-legend">{legend}</legend>
      {!!errorText && (
        <p id={errorTextId} className="bsds-field-error">
          {errorText}
        </p>
      )}
      {!!helpText && (
        <p id={helpTextId} className="bsds-field-help-text">
          {helpText}
        </p>
      )}
      {children}
    </fieldset>
  );
};

export default Fieldset;
