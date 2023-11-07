import { render, screen } from '@testing-library/react';
import Download from './Download';

describe('Download', () => {
  const baseClass = 'bsds-download';
  const testId = baseClass;

  const downloadProps = {
    bodyText: 'Sample body text',
    cta: 'Download this file',
    file: {
      filename: 'test-file',
      href: 'https://www.bostonscientific.com/image.jpg',
      size: '1.2 MB',
      type: 'JPG'
    },
    headerProps: {
      isSemantic: true,
      text: 'Download Card Title'
    }
  };

  /**
   * Replace and/or add more useful tests
   */
  it('renders without crashing', () => {
    render(<Download data-testid={testId} {...downloadProps} />);
  });

  it('applies className correctly', () => {
    render(<Download data-testid={testId} {...downloadProps} />);
    expect(screen.getByTestId(testId)).toHaveClass(baseClass);
  });
});
