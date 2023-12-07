import { render, screen } from '@testing-library/react';
import { navItems } from './footerData';
import Footer from './Footer';

describe('Footer', () => {
  it('Renders nav items when passed navItems', () => {
    render(<Footer navItems={navItems} />);
    expect(screen.getAllByText(/Group [0-9]/)).toHaveLength(7);
    expect(screen.getAllByText(/Item [0-9]/)).toHaveLength(20);
  });
});
