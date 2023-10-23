import {
  ChangeEvent,
  FocusEvent,
  ForwardedRef,
  forwardRef,
  InputHTMLAttributes,
  InvalidEvent,
  MutableRefObject,
  useCallback,
  useEffect,
  useId,
  useRef,
  useState
} from 'react';
import { getValidationMessage } from '../../helpers/validation';

export interface InputCheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  helpText?: string;
  errorText?: string;
  forceValidation?: boolean;
}

const InputCheckbox = forwardRef(
  (
    {
      label,
      helpText,
      errorText,
      forceValidation,
      onBlur,
      onChange,
      onInvalid,
      className,
      ...inputAttrs
    }: InputCheckboxProps,
    ref: ForwardedRef<HTMLInputElement>
  ): JSX.Element => {
    const [inputId, setInputId] = useState('');
    const [helpTextId, setHelpTextId] = useState('');
    const [errorTextId, setErrorTextId] = useState('');
    const [validationMessage, setValidationMessage] = useState('');

    const id = useId();

    const inputEl = useRef<HTMLInputElement>(null);

    const validate = useCallback(() => {
      if (inputEl.current) {
        const isValid = inputEl.current.checkValidity();
        if (isValid) {
          setValidationMessage('');
        }
      }
    }, [inputEl]);

    const handleInvalid = (e: InvalidEvent<HTMLInputElement>) => {
      if (onInvalid) {
        onInvalid(e);
      }
      setValidationMessage(getValidationMessage(e.target));
    };

    const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
      validate();
      if (onBlur) {
        onBlur(e);
      }
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      validate();
      if (onChange) {
        onChange(e);
      }
    };

    useEffect(() => {
      inputEl?.current?.setCustomValidity(errorText ? errorText : '');
    }, [inputEl, errorText]);

    useEffect(() => {
      if (forceValidation) {
        validate();
      }
    }, [forceValidation, validate]);

    // Component mount
    useEffect(() => {
      setInputId(id + 'checkbox');
      setHelpTextId(id + 'checkboxHelpText');
      setErrorTextId(id + 'checkboxErrorText');
    }, [id]);

    return (
      <div className={`bsds-field ${className || ''}`}>
        <input
          ref={(node) => {
            if (node) {
              (inputEl as MutableRefObject<HTMLInputElement>).current = node;
              if (typeof ref === 'function') {
                ref(node);
              } else if (ref) {
                (ref as MutableRefObject<HTMLInputElement>).current = node;
              }
            }
          }}
          type="checkbox"
          id={inputId}
          className="bsds-input-checkbox"
          aria-invalid={!!validationMessage}
          aria-describedby={`${validationMessage ? errorTextId : ''} ${helpText ? helpTextId : ''}`}
          {...inputAttrs}
          onInvalid={handleInvalid}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        <label htmlFor={inputId} className="bsds-input-checkbox-label">
          {label}
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

InputCheckbox.displayName = 'InputCheckbox';
export default InputCheckbox;
