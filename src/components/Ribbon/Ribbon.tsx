import { HTMLAttributes, PropsWithChildren } from 'react';

export interface RibbonProps extends PropsWithChildren<HTMLAttributes<HTMLDivElement>> {
  isConstrained?: boolean;
  textAlign?: 'left' | 'center';
  variant?: 'default' | 'informational';
  withShadow?: boolean;
}

const Ribbon = ({
  children,
  className,
  variant = 'default',
  textAlign = 'left',
  withShadow = false,
  isConstrained = false,
  ...rest
}: RibbonProps) => {
  const baseClass = 'bsds-ribbon';

  const classesFromProps = [
    variant !== 'default' ? `${baseClass}-${variant}` : null,
    textAlign !== 'left' ? `bsds-text-${textAlign}` : null,
    withShadow ? `${baseClass}-shadow` : null,
    isConstrained ? `is-constrained` : null,
    className || null
  ].filter(Boolean);

  const conditionalClasses = classesFromProps.length ? ` ${classesFromProps.join(' ')}` : '';

  return (
    <div className={baseClass + conditionalClasses} {...rest}>
      <div className={baseClass + '-content'}>{children}</div>
    </div>
  );
};

export default Ribbon;
