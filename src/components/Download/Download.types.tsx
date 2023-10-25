import { LinkProps } from '../Link';

export interface DownloadLinkProps extends LinkProps {
  /**
   * Optionally customize the name of the downloaded file.
   * @example If `href` is "original.jpg" and `filename` is "custom-name", the file will be downloaded as "custom-name.jpg".
   */
  filename?: string;
  /**
   * The URL of the file to download. Must be on the same origin as the current page*.
   * @example
   * ✅ "https://www.bostonscientific.com/image.jpg"
   * ✅ "/image.jpg"
   * ❌ "https://www.google.com/image.jpg"
   */
  href: string;
}

export const COMMON_FILE_EXTENSIONS = [
  'jpg', // JPEG image
  'jpeg', // JPEG image
  'png', // Portable Network Graphics image
  'gif', // Graphics Interchange Format image
  'bmp', // Bitmap image
  'pdf', // Portable Document Format
  'doc', // Microsoft Word document (older format)
  'docx', // Microsoft Word document (XML-based format)
  'xls', // Microsoft Excel spreadsheet (older format)
  'xlsx', // Microsoft Excel spreadsheet (XML-based format)
  'ppt', // Microsoft PowerPoint presentation (older format)
  'pptx', // Microsoft PowerPoint presentation (XML-based format)
  'zip', // ZIP archive
  'rar', // RAR archive
  '7z', // 7-Zip archive
  'tar', // Tape archive (tarball)
  'gz', // GZIP compressed archive
  'mp3', // MPEG Audio Layer III audio
  'mp4', // MPEG-4 video
  'avi', // Audio Video Interleave video
  'mkv', // Matroska video
  'iso', // ISO disk image
  'txt', // Plain text
  'csv', // Comma-separated values data
  'json', // JavaScript Object Notation data
  'xml' // Extensible Markup Language data
] as const;

export type FileExtension = (typeof COMMON_FILE_EXTENSIONS)[number];
