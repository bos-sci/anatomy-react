import { ButtonHTMLAttributes, ForwardedRef, forwardRef, useEffect, useState } from 'react';
import Icon from '../Icon';

export type ButtonVariants = 'assertive' | 'ghost' | 'subtle';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariants;
  size?: 'small';
  icon?: string;
  iconAlignment?: 'left' | 'right';
  iconSize?: 'sm' | 'md' | 'lg' | '2x' | '3x' | '4x' | 'base';
}

const Button = forwardRef(
  (
    { children, variant, size, icon, iconAlignment = 'left', iconSize, className, ...buttonAttrs }: ButtonProps,
    ref: ForwardedRef<HTMLButtonElement>
  ): JSX.Element => {
    let classes = '';
    switch (variant) {
      case 'assertive':
        classes = 'bsds-button-assertive';
        break;
      case 'ghost':
        classes = 'bsds-button-ghost';
        break;
      case 'subtle':
        classes = 'bsds-button-subtle';
        break;
      default:
        classes = 'bsds-button';
        break;
    }

    let buttonSizeClass = '';
    let buttonIconSizeClass = iconSize;
    switch (size) {
      case 'small':
        buttonSizeClass = 'bsds-button-small';
        buttonIconSizeClass = 'lg';
        break;

      default:
        break;
    }

    const [iconWithChildren, setIconWithChildren] = useState(children);
    useEffect(() => {
      if (icon && children) {
        setIconWithChildren(<span className="bsds-button-text">{children}</span>);
      } else {
        setIconWithChildren(children);
      }
    }, [icon, children]);

    if (icon && !children) {
      return (
        <button ref={ref} className={`bsds-button-icon ${classes} ${className || ''}`} {...buttonAttrs}>
          <Icon name={icon} size={iconSize} />
        </button>
      );
    }

    return (
      <button ref={ref} className={`${classes} ${className || ''} ${buttonSizeClass}`} {...buttonAttrs}>
        {!!(icon && iconAlignment === 'left') && (
          <Icon name={icon} size={buttonIconSizeClass} className="bsds-icon-left" />
        )}
        {iconWithChildren}
        {!!(icon && iconAlignment === 'right') && (
          <Icon name={icon} size={buttonIconSizeClass} className="bsds-icon-right" />
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';
export default Button;
