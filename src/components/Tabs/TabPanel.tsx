import { ReactNode } from 'react';

export interface TabPanelProps {
  // eslint-disable-next-line react/no-unused-prop-types
  tabName: string;
  children: ReactNode;
}

const TabPanel = ({ children }: TabPanelProps): JSX.Element => {
  return <>{children}</>;
};

export default TabPanel;
