import { FormEvent, FormHTMLAttributes, ReactNode } from 'react';
import useConcatenation from '../../hooks/useConcatenation';

export interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode;
}

const Form = ({ children, onInvalid, className, ...formAttrs }: FormProps): JSX.Element => {
  const handleInvalid = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (onInvalid) {
      onInvalid(e);
    }
  };

  return (
    <form className={useConcatenation(['bsds-form', `${className || ''}`])} onInvalid={handleInvalid} {...formAttrs}>
      {children}
    </form>
  );
};

export default Form;
