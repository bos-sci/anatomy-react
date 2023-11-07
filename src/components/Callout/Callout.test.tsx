import { render, screen } from '@testing-library/react';
import Callout from './Callout';

describe('Callout', () => {
  it('Renders ghost when prop is present', () => {
    render(<Callout isGhost>Ghost callout!</Callout>);

    expect(screen.getByText('Ghost callout!')).toBeInTheDocument();
    expect(screen.getByText('Ghost callout!')).toHaveClass('bsds-callout-ghost');
  });

  it('Renders centered when prop is present', () => {
    render(<Callout isCentered>Centered callout!</Callout>);

    expect(screen.getByText('Centered callout!')).toBeInTheDocument();
    expect(screen.getByText('Centered callout!')).toHaveClass('bsds-callout-centered');
  });
});
