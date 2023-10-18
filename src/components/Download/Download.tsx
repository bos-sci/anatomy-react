import { HTMLAttributes, PropsWithChildren } from 'react';

interface BaseProps extends PropsWithChildren<HTMLAttributes<HTMLDivElement>> {}

export interface DownloadProps extends BaseProps {}

const Download = (props: DownloadProps) => {
  return <div>Download</div>;
};

export default Download;
