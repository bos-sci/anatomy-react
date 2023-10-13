/* eslint-disable react/no-unused-prop-types */
import { ReactNode } from 'react';
import { StoplightColor } from '../Stoplight';

export interface AccordionPanelProps {
  heading: string;
  stoplightColor?: StoplightColor;
  children: ReactNode;
}

const AccordionPanel = ({ children }: AccordionPanelProps): JSX.Element => {
  return <>{children}</>;
};

export default AccordionPanel;
