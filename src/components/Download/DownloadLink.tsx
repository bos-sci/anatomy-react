import Link from '../Link';

export interface DownloadLinkProps extends Omit<React.HTMLAttributes<HTMLAnchorElement>, 'href' | 'children'> {
  /**
   * Optionally display download link as a button
   * */
  asButton?: boolean;
  /**
   * The text to display on the link.
   */
  cta: string;
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
  source: string;
}

const DownloadLink = ({ asButton, cta, filename = '', source, title, ...rest }: DownloadLinkProps) => {
  /** Shown on hover */
  const linkTitle = title || filename.length ? `Download ${filename}` : 'Download this file';
  const linkVariant = asButton ? 'download-button' : undefined;

  return (
    <Link href={source} download={filename} variant={linkVariant} title={linkTitle} {...rest}>
      {cta}
    </Link>
  );
};

export default DownloadLink;
