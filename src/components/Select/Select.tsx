import {
  ChangeEvent,
  FocusEvent,
  SelectHTMLAttributes,
  useCallback,
  useEffect,
  useRef,
  useState,
  MutableRefObject,
  forwardRef,
  ForwardedRef,
  useId
} from 'react';
import { errorValueMissing } from '../../helpers/validation';

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  helpText?: string;
  errorText?: string;
  requiredText?: string;
  forceValidation?: boolean;
}

const Select = forwardRef(
  (
    {
      label,
      helpText,
      errorText = '',
      requiredText = 'required',
      forceValidation = false,
      children,
      onBlur,
      onChange,
      className,
      ...selectAttrs
    }: SelectProps,
    ref: ForwardedRef<HTMLSelectElement>
  ): JSX.Element => {
    const [helpTextId, setHelpTextId] = useState('');
    const [errorTextId, setErrorTextId] = useState('');
    const [validationMessage, setValidationMessage] = useState('');
    const [value, setValue] = useState('');
    const [isDirty, setIsDirty] = useState(false);

    const selectEl = useRef<HTMLSelectElement>(null);
    const selectId = 'inputHelpText' + useId();

    const validate = useCallback(() => {
      if (selectEl.current) {
        if (selectEl.current.selectedOptions[0].disabled && selectEl.current.required) {
          setValidationMessage(errorValueMissing);
        } else if (errorText) {
          setValidationMessage(errorText);
        } else {
          setValidationMessage('');
        }
      }
    }, [selectEl, errorText]);

    const handleBlur = (e: FocusEvent<HTMLSelectElement>) => {
      validate();
      if (onBlur) {
        onBlur(e);
      }
    };

    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
      setValue(e.target.value);
      if (!isDirty) {
        setIsDirty(true);
      }
      if (onChange) {
        onChange(e);
      }
    };

    useEffect(() => {
      if (forceValidation && !isDirty) {
        validate();
      } else if (isDirty || forceValidation) {
        const whenDone = setTimeout(() => {
          validate();
        }, 1000);
        return () => clearTimeout(whenDone);
      }
    }, [value, isDirty, validate, forceValidation]);

    useEffect(() => {
      if (forceValidation) {
        validate();
      }
    }, [forceValidation, validate]);

    // On component mount
    useEffect(() => {
      setHelpTextId('inputHelpText' + selectId);
      setErrorTextId('inputErrorText' + selectId);
    }, [selectId]);

    return (
      <div className={`bsds-field ${className || ''}`}>
        <label className="bsds-field-label">
          <div className="bsds-field-label-text">
            {label}
            {!!selectAttrs.required && <span className="bsds-field-required-text">{requiredText}</span>}
          </div>
          <div className="bsds-select-control">
            <select
              ref={(node) => {
                if (node) {
                  (selectEl as MutableRefObject<HTMLSelectElement>).current = node;
                  if (typeof ref === 'function') {
                    ref(node);
                  } else if (ref) {
                    (ref as MutableRefObject<HTMLSelectElement>).current = node;
                  }
                }
              }}
              name={label}
              className="bsds-select"
              aria-invalid={!!validationMessage}
              aria-describedby={`${validationMessage ? errorTextId : ''} ${helpText ? helpTextId : ''}`}
              onBlur={handleBlur}
              onChange={handleChange}
              {...selectAttrs}
            >
              {children}
            </select>
          </div>
        </label>
        {!!validationMessage && (
          <p id={errorTextId} className="bsds-field-error">
            {validationMessage}
          </p>
        )}
        {!!helpText && (
          <p id={helpTextId} className="bsds-field-help-text">
            {helpText}
          </p>
        )}
      </div>
    );
  }
);

Select.displayName = 'Select';
export default Select;
