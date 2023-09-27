import { render, screen } from '@testing-library/react';
import Ribbon from './Ribbon';

describe('Ribbon', () => {
  const baseClass = 'bsds-ribbon';
  const testId = baseClass;

  it('renders without crashing', () => {
    render(<Ribbon />);
  });

  it('applies is-constrained class correctly', () => {
    render(<Ribbon data-testid={testId} isConstrained />);
    expect(screen.getByTestId(testId)).toHaveClass(`is-constrained`);
  });

  it('applies text alignment class correctly', () => {
    render(<Ribbon data-testid={testId} textAlign="center" />);
    expect(screen.getByTestId(testId)).toHaveClass('bsds-text-center');
  });

  it('applies variant class correctly', () => {
    render(<Ribbon data-testid={testId} variant="informational" />);
    expect(screen.getByTestId(testId)).toHaveClass(`${baseClass}-informational`);
  });

  it('applies shadow class correctly', () => {
    render(<Ribbon data-testid={testId} withShadow />);
    expect(screen.getByTestId(testId)).toHaveClass(`${baseClass}-shadow`);
  });

  it('appends a custom class correctly', () => {
    const testClassName = 'test-class';
    render(<Ribbon data-testid={testId} className={testClassName} />);
    expect(screen.getByTestId(testId)).toHaveClass(...[baseClass, testClassName]);
  });
});
