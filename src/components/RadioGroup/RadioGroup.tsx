import { createContext, FieldsetHTMLAttributes, ReactElement, useEffect, useState } from 'react';
import { InputRadioProps } from '../InputRadio';

export const RadioAddonPropsContext = createContext({
  ariaInvalid: false,
  ariaDescribedby: '',
  errorText: '',
  isDirty: false,
  setIsDirty: (isDirty: boolean) => {
    return;
  },
  setFieldsetError: (text: string) => {
    return;
  },
  buttonGroup: false,
  setButtonGroup: (buttonGroup: boolean) => {
    return;
  }
});

export interface RadioGroupProps extends FieldsetHTMLAttributes<HTMLFieldSetElement> {
  legend: string;
  errorText?: string;
  helpText?: string;
  buttonGroup?: boolean;
  children: ReactElement<InputRadioProps>[];
  className?: string;
}

export interface AddonProps {
  ariaInvalid: boolean;
  ariaDescribedby: string;
  errorText: string;
  isDirty: boolean;
  setIsDirty: (isDirty: boolean) => void;
  setFieldsetError: (text: string) => void;
  buttonGroup: boolean;
  setButtonGroup: (buttonGroup: boolean) => void;
}

let radioGroupId = 0;

const RadioGroup = ({
  legend,
  errorText = '',
  helpText,
  buttonGroup,
  children,
  className,
  ...fieldsetAttrs
}: RadioGroupProps): JSX.Element => {
  const [helpTextId, setHelpTextId] = useState('');
  const [errorTextId, setErrorTextId] = useState('');
  const [validationMessage, setValidationMessage] = useState('');
  const [addonProps, setAddonProps] = useState<AddonProps>({} as AddonProps);
  const [isInvalid, setIsInvalid] = useState(!!errorText);
  const [areRadiosDirty, setAreRadiosDirty] = useState(!!errorText);
  const [buttonGroupStyle, setButtonGroupStyle] = useState(!!buttonGroup);

  useEffect(() => {
    setAddonProps({
      errorText,
      ariaInvalid: isInvalid,
      ariaDescribedby: isInvalid ? errorTextId : '',
      isDirty: areRadiosDirty,
      setIsDirty: (isDirty: boolean) => {
        setAreRadiosDirty(isDirty);
      },
      setFieldsetError: (text) => {
        setValidationMessage(text);
        setIsInvalid(!!text);
      },
      buttonGroup: buttonGroupStyle,
      setButtonGroup: (buttonGroup: boolean) => {
        setButtonGroupStyle(buttonGroup);
      }
    });
  }, [isInvalid, errorTextId, errorText, areRadiosDirty, buttonGroupStyle]);

  useEffect(() => {
    const idNum = ++radioGroupId;
    setHelpTextId('radioGroupHelpText' + idNum);
    setErrorTextId('radioGroupErrorText' + idNum);
  }, []);

  return (
    <fieldset
      className={`bsds-fieldset${buttonGroup ? '-button-group' : ''} ${className || ''}`}
      aria-describedby={helpText ? helpTextId : ''}
      {...fieldsetAttrs}
      role="radiogroup"
      aria-invalid={!!addonProps.ariaInvalid && addonProps.isDirty}
    >
      <legend className={'bsds-legend'}>{legend}</legend>
      {!!validationMessage && (
        <p id={errorTextId} className={'bsds-field-error'}>
          {validationMessage}
        </p>
      )}
      {!!helpText && (
        <p id={helpTextId} className={'bsds-field-help-text'}>
          {helpText}
        </p>
      )}
      <RadioAddonPropsContext.Provider value={addonProps}>{children}</RadioAddonPropsContext.Provider>
    </fieldset>
  );
};

export default RadioGroup;
