import { HTMLAttributes, PropsWithChildren } from 'react';

export interface RibbonProps extends PropsWithChildren<HTMLAttributes<HTMLDivElement>> {
  isConstrained?: boolean;
  isCentered?: boolean;
  variant?: 'informational';
  withShadow?: boolean;
}

const Ribbon = ({
  children,
  className,
  variant,
  isCentered = false,
  withShadow = false,
  isConstrained = false,
  ...rest
}: RibbonProps) => {
  const baseClass = 'bsds-ribbon';

  const classesFromProps = [
    variant ? `${baseClass}-${variant}` : null,
    isCentered ? `bsds-text-center` : null,
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
