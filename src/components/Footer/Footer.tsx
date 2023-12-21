import FooterNav, { NavItemsFooter } from './FooterNav';
import FooterBase, { FooterBaseProps } from './FooterBase';
export interface FooterProps extends FooterBaseProps {
  navItems?: NavItemsFooter[];
  navAriaLabel?: string;
  className?: string;
}

const Footer = ({
  navItems,
  navAriaLabel,
  legalLinkItems,
  corporateLink,
  texts,
  customizeCookiesLink,
  complianceCode,
  socialMedia,
  className
}: FooterProps) => {
  return (
    <footer className={`bsds-footer ${className || ''}`}>
      {!!navItems && <FooterNav navItems={navItems} aria-label={navAriaLabel} />}
      <FooterBase
        legalLinkItems={legalLinkItems}
        corporateLink={corporateLink}
        texts={texts}
        customizeCookiesLink={customizeCookiesLink}
        complianceCode={complianceCode}
        socialMedia={socialMedia}
      />
    </footer>
  );
};

export default Footer;
