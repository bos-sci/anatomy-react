import { render, screen } from '@testing-library/react';
import Ribbon from './Ribbon';

describe('Ribbon', () => {
  const baseClass = 'bsds-ribbon';

  it('renders without crashing', () => {
    render(<Ribbon />);
  });

  it('applies isConstrained class correctly', () => {
    render(<Ribbon isConstrained />);
    expect(screen.getByTestId('ribbon')).toHaveClass(`${baseClass}-is-constrained`);
  });

  it('applies textAlign class correctly', () => {
    render(<Ribbon textAlign="center" />);
    expect(screen.getByTestId('ribbon')).toHaveClass('bsds-text-center');
  });

  it('applies variant class correctly', () => {
    render(<Ribbon variant="informational" />);
    expect(screen.getByTestId('ribbon')).toHaveClass(`${baseClass}-informational`);
  });

  it('applies withShadow class correctly', () => {
    render(<Ribbon withShadow />);
    expect(screen.getByTestId('ribbon')).toHaveClass(`${baseClass}-with-shadow`);
  });
});
