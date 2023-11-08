import { render, screen } from '@testing-library/react';
import DownloadLink from './DownloadLink';

describe('DownloadLink', () => {
  it('renders correctly', () => {
    render(<DownloadLink href="/file.pdf">Download</DownloadLink>);
    const linkElement = screen.getByText('Download');
    expect(linkElement).toBeInTheDocument();
  });

  it('has the correct href attribute', () => {
    render(<DownloadLink href="/file.pdf">Download</DownloadLink>);
    const linkElement = screen.getByRole('link');
    expect(linkElement).toHaveAttribute('href', '/file.pdf');
  });

  it('uses the correct title when filename is provided', () => {
    render(
      <DownloadLink href="/file.pdf" filename="custom-name.pdf">
        Download
      </DownloadLink>
    );
    const linkElement = screen.getByRole('link');
    expect(linkElement).toHaveAttribute('title', 'Download custom-name.pdf');
  });

  it('uses the default title when filename is not provided', () => {
    render(<DownloadLink href="/file.pdf">Download</DownloadLink>);
    const linkElement = screen.getByRole('link');
    expect(linkElement).toHaveAttribute('title', 'Download this file');
  });

  it('applies the correct classname for CTA styling', () => {
    render(
      <DownloadLink href="/file.pdf" variant="cta-download">
        Download
      </DownloadLink>
    );
    const linkElement = screen.getByText('Download');
    expect(linkElement).toHaveClass('bsds-link-cta-download');
  });
});
