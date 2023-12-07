import FooterNav, { NavItemsFooter } from './FooterNav';

export interface FooterProps {
  navItems?: NavItemsFooter[];
}

const Footer = (props: FooterProps) => {
  return <footer className="bsds-footer">{!!props.navItems && <FooterNav navItems={props.navItems} />}</footer>;
};

export default Footer;
