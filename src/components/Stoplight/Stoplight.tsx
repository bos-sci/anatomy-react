import { ReactNode } from 'react';

export interface StoplightProps {
  children: ReactNode;
  lightColor: 'red' | 'yellow' | 'green';
  textColor?: 'ghost';
  size?: 'assertive' | 'subtle';
}

const Stoplight = ({ children, lightColor, textColor, size }: StoplightProps): JSX.Element => {
  let lightColorClasses = '';
  switch (lightColor) {
    case 'red':
      lightColorClasses = 'bsds-stoplight-red';
      break;
    case 'yellow':
      lightColorClasses = 'bsds-stoplight-yellow';
      break;
    case 'green':
      lightColorClasses = 'bsds-stoplight-green';
      break;
  }

  let sizeClasses = '';
  switch (size) {
    case 'assertive':
      sizeClasses = 'bsds-body-assertive';
      break;
    case 'subtle':
      sizeClasses = 'bsds-body-subtle';
      break;
  }

  let textColorClasses = '';
  switch (textColor) {
    case 'ghost':
      textColorClasses = 'bsds-stoplight-ghost';
      break;
  }

  return <p className={`${lightColorClasses} ${textColorClasses} ${sizeClasses}`}>{children}</p>;
};

export default Stoplight;
