import { FormEvent, FormHTMLAttributes, ReactNode } from 'react';

export interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode;
  className?: string;
}

const Form = ({ children, onInvalid, className, ...formAttrs }: FormProps): JSX.Element => {
  const handleInvalid = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (onInvalid) {
      onInvalid(e);
    }
  };

  return (
    <form className={`bsds-form ${className || ''}`} onInvalid={handleInvalid} {...formAttrs}>
      {children}
    </form>
  );
};

export default Form;
