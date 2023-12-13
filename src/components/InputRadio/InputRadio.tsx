import {
  ChangeEvent,
  FocusEvent,
  ForwardedRef,
  forwardRef,
  InputHTMLAttributes,
  InvalidEvent,
  MutableRefObject,
  useCallback,
  useContext,
  useEffect,
  useId,
  useRef,
  useState
} from 'react';
import { getValidationMessage } from '../../helpers/validation';
import { AddonProps, RadioAddonPropsContext } from '../RadioGroup';

export interface InputRadioProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  value?: string;
  helpText?: string;
  forceValidation?: boolean;
  inputUnavailable?: boolean;
}

const InputRadio = forwardRef(
  (
    { label, helpText, forceValidation, inputUnavailable, onBlur, onInput, onInvalid, ...inputAttrs }: InputRadioProps,
    ref: ForwardedRef<HTMLInputElement>
  ): JSX.Element => {
    const [inputId, setInputId] = useState('');
    const [helpTextId, setHelpTextId] = useState('');
    const [errorText, setErrorText] = useState('');
    const [describedBy, setDescribedBy] = useState('');
    const [isGroupStyle, setIsGroupStyle] = useState(false);
    const addonProps: AddonProps = useContext(RadioAddonPropsContext);

    const id = useId();

    const inputEl = useRef<HTMLInputElement>(null);

    const validate = useCallback(() => {
      if (inputEl.current) {
        const isValid = inputEl.current.checkValidity();
        if (isValid) {
          addonProps.setFieldsetError('');
        }
      }
    }, [inputEl, addonProps]);

    const handleInvalid = (e: InvalidEvent<HTMLInputElement>) => {
      addonProps.setFieldsetError(getValidationMessage(e.target));
      if (onInvalid) {
        onInvalid(e);
      }
    };

    const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
      addonProps.setIsDirty(true);
      if (onBlur) {
        onBlur(e);
      }
      validate();
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      addonProps.setIsDirty(true);
      if (onInput) {
        onInput(e);
      }
      validate();
    };

    useEffect(() => {
      const help = helpText ? helpTextId : '';
      const describedBy = addonProps.isDirty ? addonProps.ariaDescribedby : '';
      setDescribedBy([help, describedBy].join(' ').trim());
    }, [addonProps.ariaDescribedby, addonProps.isDirty, helpText, helpTextId]);

    useEffect(() => {
      if (addonProps.isDirty) {
        setErrorText(addonProps.errorText);
      }
    }, [validate, addonProps]);

    useEffect(() => {
      if (forceValidation && addonProps.setIsDirty) {
        addonProps.setIsDirty(true);
        validate();
      }
    }, [forceValidation, validate, addonProps]);

    useEffect(() => {
      inputEl?.current?.setCustomValidity(errorText ? errorText : '');
      if (addonProps.isDirty) {
        validate();
      }
    }, [inputEl, errorText, addonProps.isDirty, validate]);

    useEffect(() => {
      setInputId(id + 'radio');
      setHelpTextId(id + 'radioHelpText');
    }, [id]);

    useEffect(() => {
      if (addonProps.buttonGroup) {
        setIsGroupStyle(addonProps.buttonGroup);
      }
    }, [isGroupStyle, addonProps]);

    return (
      <div className="bsds-field bsds-mt-2x">
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
          type="radio"
          id={inputId}
          className="bsds-input-radio"
          aria-describedby={describedBy}
          onInvalid={handleInvalid}
          onBlur={handleBlur}
          onInput={handleChange}
          {...inputAttrs}
        />
        <label
          htmlFor={inputId}
          className={`bsds-input-radio-label${isGroupStyle && inputUnavailable ? '-unavailable' : ''}`}
        >
          {label}
        </label>
        {!!helpText && (
          <p id={helpTextId} className="bsds-field-help-text">
            {helpText}
          </p>
        )}
      </div>
    );
  }
);

InputRadio.displayName = 'InputRadio';
export default InputRadio;
