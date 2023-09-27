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
  useRef,
  useState
} from 'react';
import { getValidationMessage } from '../../helpers/validation';

export interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  helpText?: string;
  errorText?: string;
  requiredText?: string;
  /**
   * When true, component validates on load, blur, and change.
   * When false, component validates on blur and change.
   */
  forceValidation?: boolean;
}

let inputId = 0;

const InputText = forwardRef(
  (
    {
      label,
      helpText,
      errorText,
      requiredText = 'required',
      forceValidation = false,
      onInvalid,
      onBlur,
      onChange,
      ...inputAttrs
    }: InputTextProps,
    ref: ForwardedRef<HTMLInputElement>
  ): JSX.Element => {
    const [helpTextId, setHelpTextId] = useState('');
    const [errorTextId, setErrorTextId] = useState('');
    const [validationMessage, setValidationMessage] = useState('');
    const [value, setValue] = useState('');
    const [isDirty, setIsDirty] = useState(false);

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
      setValue(e.target.value);
      if (!isDirty) {
        setIsDirty(true);
      }
      if (onChange) {
        onChange(e);
      }
    };

    useEffect(() => {
      inputEl?.current?.setCustomValidity(errorText ? errorText : '');
    }, [inputEl, errorText]);

    // Sets input to dirty
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
      const idNum = ++inputId;
      setHelpTextId('inputHelpText' + idNum);
      setErrorTextId('inputErrorText' + idNum);
    }, []);

    return (
      <div className="bsds-field">
        <label className="bsds-field-label">
          <div className="bsds-field-label-text">
            {label}
            {!!inputAttrs.required && <span className="bsds-field-required-text">{requiredText}</span>}
          </div>
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
            className="bsds-input"
            aria-invalid={!!validationMessage}
            aria-describedby={`${validationMessage ? errorTextId : ''} ${helpText ? helpTextId : ''}`}
            onInvalid={handleInvalid}
            onBlur={handleBlur}
            onChange={handleChange}
            {...inputAttrs}
          />
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

InputText.displayName = 'InputText';
export default InputText;
