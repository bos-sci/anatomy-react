import {
  ChangeEvent,
  FocusEvent,
  ForwardedRef,
  forwardRef,
  TextareaHTMLAttributes,
  InvalidEvent,
  MutableRefObject,
  useCallback,
  useEffect,
  useRef,
  useState
} from 'react';
import { getValidationMessage } from '../../helpers/validation';
import useTextareaResize from '../../hooks/useTextareaResize';

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  helpText?: string;
  errorText?: string;
  requiredText?: string;
  forceValidation?: boolean;
  autoResize?: boolean;
  className?: string;
}

let textAreaId = 0;

const Textarea = forwardRef(
  (
    {
      label,
      helpText,
      errorText,
      requiredText = 'required',
      forceValidation = false,
      autoResize = false,
      onInvalid,
      onBlur,
      onChange,
      className,
      ...textareaAttrs
    }: TextareaProps,
    ref: ForwardedRef<HTMLTextAreaElement>
  ): JSX.Element => {
    const [helpTextId, setHelpTextId] = useState('');
    const [errorTextId, setErrorTextId] = useState('');
    const [validationMessage, setValidationMessage] = useState('');
    const [value, setValue] = useState('');
    const [isDirty, setIsDirty] = useState(false);

    const textareaEl = useRef<HTMLTextAreaElement>(null);
    useTextareaResize(textareaEl.current, value, autoResize);

    const validate = useCallback(() => {
      if (textareaEl.current) {
        const isValid = textareaEl.current.checkValidity();
        if (isValid) {
          setValidationMessage('');
        }
      }
    }, [textareaEl]);

    const handleInvalid = (e: InvalidEvent<HTMLTextAreaElement>) => {
      if (onInvalid) {
        onInvalid(e);
      }
      setValidationMessage(getValidationMessage(e.target));
    };

    const handleBlur = (e: FocusEvent<HTMLTextAreaElement>) => {
      validate();
      if (onBlur) {
        onBlur(e);
      }
    };

    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
      setValue(e.target.value);
      if (!isDirty) {
        setIsDirty(true);
      }
      if (onChange) {
        onChange(e);
      }
    };

    useEffect(() => {
      textareaEl?.current?.setCustomValidity(errorText ? errorText : '');
    }, [textareaEl, errorText]);

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
      const idNum = ++textAreaId;
      setHelpTextId('inputHelpText' + idNum);
      setErrorTextId('inputErrorText' + idNum);
    }, []);

    return (
      <div className={`bsds-field ${className || ''}`}>
        <label className="bsds-field-label">
          <div className="bsds-field-label-text">
            {label}
            {!!textareaAttrs.required && <span className="bsds-field-required-text">{requiredText}</span>}
          </div>
          <textarea
            ref={(node) => {
              if (node) {
                (textareaEl as MutableRefObject<HTMLTextAreaElement>).current = node;
                if (typeof ref === 'function') {
                  ref(node);
                } else if (ref) {
                  (ref as MutableRefObject<HTMLTextAreaElement>).current = node;
                }
              }
            }}
            className={autoResize ? 'bsds-textarea-autoresize' : 'bsds-textarea'}
            aria-invalid={!!validationMessage}
            aria-describedby={`${validationMessage ? errorTextId : ''} ${helpText ? helpTextId : ''}`}
            onInvalid={handleInvalid}
            onBlur={handleBlur}
            onChange={handleChange}
            {...textareaAttrs}
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

Textarea.displayName = 'Textarea';
export default Textarea;
