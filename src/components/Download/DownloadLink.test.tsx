import { render, screen } from '@testing-library/react';
import DownloadLink from './DownloadLink';

describe('DownloadLink', () => {
  it('renders correctly', () => {
    render(<DownloadLink cta="Download" source="/file.pdf" />);
    const linkElement = screen.getByText('Download');
    expect(linkElement).toBeInTheDocument();
  });

  it('has the correct href attribute', () => {
    render(<DownloadLink cta="Download" source="/file.pdf" />);
    const linkElement = screen.getByRole('link');
    expect(linkElement).toHaveAttribute('href', '/file.pdf');
  });

  it('uses the correct title when filename is provided', () => {
    render(<DownloadLink cta="Download" source="/file.pdf" filename="custom-name.pdf" />);
    const linkElement = screen.getByRole('link');
    expect(linkElement).toHaveAttribute('title', 'Download custom-name.pdf');
  });

  it('uses the default title when filename is not provided', () => {
    render(<DownloadLink cta="Download" source="/file.pdf" />);
    const linkElement = screen.getByRole('link');
    expect(linkElement).toHaveAttribute('title', 'Download this file');
  });

  it('applies the correct variant when asButton is true', () => {
    render(<DownloadLink cta="Download" source="/file.pdf" asButton />);
    const linkElement = screen.getByText('Download');
    expect(linkElement).toHaveClass('bsds-link-download');
  });
});
