import { ReactNode } from 'react';
import { StoplightColor, StoplightSize, StoplightTextColor } from './Stoplight.types';
import useConcatenation from '../../hooks/useConcatenation';

export interface StoplightProps {
  children: ReactNode;
  lightColor: StoplightColor;
  textColor?: StoplightTextColor;
  size?: StoplightSize;
  className?: string;
}

const Stoplight = ({ children, lightColor, textColor, size, className }: StoplightProps): JSX.Element => {
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

  // TODO: replace ghost with theming
  let textColorClasses = '';
  switch (textColor) {
    case 'ghost':
      textColorClasses = 'bsds-stoplight-ghost';
      break;
  }

  return (
    <p className={useConcatenation([lightColorClasses, textColorClasses, sizeClasses, `${className || ''}`])}>
      {children}
    </p>
  );
};

export default Stoplight;
