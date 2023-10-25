import Link from '../Link';
import { DownloadLinkProps } from './Download.types';

const DownloadLink = ({ filename, href, ...rest }: DownloadLinkProps) => {
  return <Link href={href} download={filename} {...rest} />;
};

export default DownloadLink;
