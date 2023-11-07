import { ReactNode, useState, useEffect } from 'react';

export interface CalloutProps {
  children: ReactNode;
  className?: string;
  isCentered?: boolean;
  isGhost?: boolean;
}

const Callout = (props: CalloutProps): JSX.Element => {
  const [classes, setClasses] = useState('');

  useEffect(() => {
    let calloutClass = '';

    if (props.isCentered) {
      calloutClass ? (calloutClass += ' bsds-callout-centered') : (calloutClass += ' bsds-callout-centered');
    }

    if (props.isGhost) {
      // TODO: replace isGhost with theming
      calloutClass ? (calloutClass += ' bsds-callout-ghost') : (calloutClass += ' bsds-callout-ghost');
    }

    setClasses(calloutClass);
  }, [props.isCentered, props.isGhost]);

  return <p className={`bsds-callout${classes} ${props.className || ''}`}>{props.children}</p>;
};

export default Callout;
