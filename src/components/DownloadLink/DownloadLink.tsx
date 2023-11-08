import Link, { DOWNLOAD_LINK_VARIANTS } from '../Link';

export interface DownloadLinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
  /**
   * Optionally customize the name of the downloaded file. If `href` is "original.jpg" and `filename` is "custom-name", the file will be downloaded as "custom-name.jpg".
   */
  filename?: string;
  /**
   * The URL of the file to download. Must be on the same origin as the current page.
   * @example
   * ✅ "https://www.bostonscientific.com/image.jpg"
   * ✅ "/image.jpg"
   * ❌ "https://www.google.com/image.jpg"
   */
  href: string;
  /**
   * Optionally display download link as a button
   * */
  variant?: (typeof DOWNLOAD_LINK_VARIANTS)[number];
}

const DownloadLink = ({ children, filename = '', href, title, ...rest }: DownloadLinkProps) => {
  /** Shown on hover */
  const linkTitle = title || filename.length ? `Download ${filename}` : 'Download this file';

  return (
    <Link href={href} download={filename} title={linkTitle} {...rest}>
      {children}
    </Link>
  );
};

export default DownloadLink;
