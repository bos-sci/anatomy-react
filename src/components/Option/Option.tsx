import { OptionHTMLAttributes, ReactNode } from 'react';

export interface OptionProps extends OptionHTMLAttributes<HTMLOptionElement> {
  children?: ReactNode;
}

const Option = ({ children, ...optionAttrs }: OptionProps): JSX.Element => {
  return <option {...optionAttrs}>{children}</option>;
};
Option.displayName = 'Option';
export default Option;
