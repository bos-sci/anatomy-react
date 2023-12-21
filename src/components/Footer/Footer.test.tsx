import { render, screen } from '@testing-library/react';
import { navItems, legalLinks, socialLinks } from './footerData';
import Footer from './Footer';

describe('Footer with all optional', () => {
  it('Renders all optional props with nav items', () => {
    render(
      <Footer
        navItems={navItems}
        legalLinkItems={legalLinks}
        texts={{
          tagline:
            'Boston Scientific is dedicated to transforming lives through innovative medical solutions that improve the health of patients around the world.'
        }}
        customizeCookiesLink="docs-demo-link"
        complianceCode="123456789"
        socialMedia={socialLinks}
        corporateLink
      />
    );
    expect(screen.getAllByText(/Page group [0-9]/)).toHaveLength(7);
    expect(screen.getAllByText(/Page [0-9]/)).toHaveLength(20);
    expect(screen.getByTestId('bsdsFooterUtility')).toBeInTheDocument();
    expect(
      screen.getByText(
        'Boston Scientific is dedicated to transforming lives through innovative medical solutions that improve the health of patients around the world.'
      )
    ).toBeInTheDocument();
    expect(screen.getByText('Boston Scientific home site')).toBeInTheDocument();
    expect(screen.getByText('Approval # 123456789')).toBeInTheDocument();
    expect(screen.getByTestId('bsdsFooterSocial')).toBeInTheDocument();
  });
});

describe('Intermediate Footer', () => {
  it('Renders nav items when passed navItems', () => {
    render(<Footer navItems={navItems} />);
    expect(screen.getAllByText(/Page group [0-9]/)).toHaveLength(7);
    expect(screen.getAllByText(/Page [0-9]/)).toHaveLength(20);
  });
});
