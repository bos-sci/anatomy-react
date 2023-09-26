import { HTMLAttributes, PropsWithChildren } from 'react';

export interface RibbonProps extends PropsWithChildren<HTMLAttributes<HTMLDivElement>> {
  isConstrained?: boolean;
  textAlign?: 'left' | 'center';
  variant?: '' | 'informational';
  withShadow?: boolean;
}

const Ribbon = ({ children, className, isConstrained, textAlign = 'left', variant, withShadow }: RibbonProps) => {
  const baseClass = 'bsds-ribbon';

  const classesFromProps = [
    isConstrained ? `is-constrained` : null,
    textAlign !== 'left' ? `bsds-text-${textAlign}` : null,
    variant ? `${baseClass}-${variant}` : null,
    withShadow ? `${baseClass}-shadow` : null,
    className || null
  ].filter(Boolean);

  const conditionalClasses = classesFromProps.length ? ` ${classesFromProps.join(' ')}` : '';

  return (
    <div className={baseClass + conditionalClasses}>
      <div className={baseClass + '-content'}>{children}</div>
    </div>
  );
};

export default Ribbon;
