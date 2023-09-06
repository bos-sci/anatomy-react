/* eslint-disable react/no-unused-prop-types */
import { ReactNode } from 'react';

export interface TabPanelProps {
  tabName: string;
  children: ReactNode;
}

const TabPanel = ({ children }: TabPanelProps): JSX.Element => {
  return <>{children}</>;
};

export default TabPanel;
