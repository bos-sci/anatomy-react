import { FormEvent, FormHTMLAttributes, ReactNode } from 'react';

export interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode;
}

const Form = ({ children, onInvalid, ...formAttrs }: FormProps): JSX.Element => {
  const handleInvalid = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (onInvalid) {
      onInvalid(e);
    }
  };

  return (
    <form className="bsds-form" onInvalid={handleInvalid} {...formAttrs}>
      {children}
    </form>
  );
};

export default Form;
