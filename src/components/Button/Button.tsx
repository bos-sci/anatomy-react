import { ButtonHTMLAttributes, ForwardedRef, forwardRef } from 'react';
import classNames from 'classnames';
import Icon from '../Icon';

export type ButtonVariants = 'assertive' | 'ghost' | 'subtle';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariants;
  size?: 'small' | null;
  icon?: string;
  iconAlignment?: 'left' | 'right';
  iconSize?: 'sm' | 'md' | 'lg' | '2x' | '3x' | '4x' | 'base';
}

const Button = forwardRef(
  (
    { children, variant, size, icon, iconAlignment = 'left', iconSize, className, ...buttonAttrs }: ButtonProps,
    ref: ForwardedRef<HTMLButtonElement>
  ): JSX.Element => {
    const buttonClasses = classNames(
      'bsds-button',
      {
        'bsds-button-assertive': variant === 'assertive',
        'bsds-button-ghost': variant === 'ghost',
        'bsds-button-subtle': variant === 'subtle',
        'bsds-button-small': size === 'small',
        'bsds-button-icon': icon && !children
      },
      className
    );

    const buttonIconSize = size === 'small' ? 'lg' : iconSize;

    const iconClasses = classNames({
      'bsds-icon-left order-1': icon && iconAlignment === 'left',
      'bsds-icon-right order-2': icon && iconAlignment === 'right'
    });

    const textClasses = classNames('bsds-button-text', {
      'order-1': icon && iconAlignment === 'right',
      'order-2': icon && iconAlignment === 'left'
    });

    return (
      <button ref={ref} className={buttonClasses} {...buttonAttrs}>
        {!!icon && <Icon name={icon} size={buttonIconSize} className={iconClasses} />}
        <span className={textClasses}>{children}</span>
      </button>
    );
  }
);

Button.displayName = 'Button';
export default Button;
