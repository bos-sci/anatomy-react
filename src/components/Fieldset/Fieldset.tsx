import { FieldsetHTMLAttributes, ReactNode, useEffect, useId, useState } from 'react';

export interface FieldsetProps extends FieldsetHTMLAttributes<HTMLFieldSetElement> {
  /**
   * Caption that describes the set of form controls grouped together in the fieldset
   */
  legend: string;
  errorText?: string;
  helpText?: string;
  errorId?: string;
  helpId?: string;
  children: ReactNode;
}

const Fieldset = ({
  legend,
  errorText,
  helpText,
  children,
  errorId,
  helpId,
  ...fieldsetAttrs
}: FieldsetProps): JSX.Element => {
  const [helpTextId, setHelpTextId] = useState('');
  const [errorTextId, setErrorTextId] = useState('');
  const id = useId();

  useEffect(() => {
    setHelpTextId(helpId ?? id + 'help');
    setErrorTextId(errorId ?? id + 'error');
  }, [errorId, helpId, id]);

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
