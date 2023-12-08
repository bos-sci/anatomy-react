import FooterNav, { NavItemsFooter } from './FooterNav';
import FooterBase, { FooterBaseProps } from './FooterBase';
export interface FooterProps extends FooterBaseProps {
  navItems?: NavItemsFooter[];
  navAriaLabel?: string;
}

const Footer = ({
  navItems,
  navAriaLabel,
  legalLinkItems,
  corporateLink,
  tagline,
  customizeCookies,
  complianceCode,
  socialMedia
}: FooterProps) => {
  return (
    <footer className="bsds-footer">
      {!!navItems && <FooterNav navItems={navItems} aria-label={navAriaLabel} />}
      <FooterBase
        legalLinkItems={legalLinkItems}
        corporateLink={corporateLink}
        tagline={tagline}
        customizeCookies={customizeCookies}
        complianceCode={complianceCode}
        socialMedia={socialMedia}
      />
    </footer>
  );
};

export default Footer;
