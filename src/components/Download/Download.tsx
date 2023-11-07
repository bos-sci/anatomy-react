import { HTMLAttributes, PropsWithChildren } from 'react';
// import DownloadLink from './DownloadLink';
import { FileExtension } from './Download.types';

interface BaseProps extends PropsWithChildren<HTMLAttributes<HTMLDivElement>> {}

/**
 * Create download component in anatomy-react

Exclude anything marked “not MVP” in the mockup

Exclude dark theme

Exclude anything card-related:
- build the download link (text link and cta styles)
- and properties (filename, type, etc)

Reference product card component for heading level implementation (allow h2-h6, exclude h1)

Write Storybook stories for download component

Reference primary nav’s logo control for an example of providing a default source to the component that illustrates how we expect people to use the download href attribute
 */

type FileNameWithExtension = `${string}.${FileExtension}`;

type FileHref = `${string}/${FileNameWithExtension}` | `/${FileNameWithExtension}`;

interface FileProps {
  filename?: string;
  filetype?: string;
  href: FileHref;
  properties?: {
    size?: string;
    type?: string;
    test?: string;
  };
}

export interface DownloadProps extends BaseProps {
  file?: FileProps;
  withButton?: boolean;
  withProperties?: boolean;
}

const Download = ({ file, withButton, withProperties, ...rest }: DownloadProps) => {
  // const fileName =
  // const fileProperties =

  // file-name
  // file size
  // file type
  return (
    <>
      hello
      {/* {withProperties && (
        
      )} */}
      {/* <DownloadLink href={file.href} filename={file.filename} {...rest} /> */}
    </>
  );
};

export default Download;
