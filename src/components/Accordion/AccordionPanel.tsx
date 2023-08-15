/* eslint-disable react/no-unused-prop-types */
import { ReactNode } from 'react';

export interface AccordionPanelProps {
  heading: string;
  stoplightColor?: 'red' | 'yellow' | 'green';
  children: ReactNode;
}

const AccordionPanel = ({ children }: AccordionPanelProps): JSX.Element => {
  return <>{children}</>;
};

export default AccordionPanel;
