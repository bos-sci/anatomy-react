import { render, screen } from '@testing-library/react';
import Download from './Download';

describe('Download', () => {
  const baseClass = 'bsds-download';
  const testId = baseClass;

  it('renders without crashing', () => {
    render(<Download data-testid={testId} />);
  });

  /**
   * Replace and add more useful tests
   */
  it('applies className correctly', () => {
    render(<Download data-testid={testId} className={baseClass} />);
    expect(screen.getByTestId(testId)).toHaveClass(baseClass);
  });
});
