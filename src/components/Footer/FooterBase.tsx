import Link from '../Link';
import { RequireOnlyOne, NavItem } from '../../types';
import logoTagline from '../../../public/assets/images/logo-bsc-tagline.svg';
import iconNewWindow from '../../../public/assets/images/icon-new-window.svg';

interface LegalLinksBase extends NavItem {
  children?: LegalLinkItem[];
}
export type SocialMediaItem = {
  name: string;
  link: string;
  icon: string;
};

export type LegalLinkItem = RequireOnlyOne<LegalLinksBase, 'to' | 'href'>;
export interface FooterBaseProps {
  legalLinkItems?: LegalLinkItem[];
  legalLinkAriaLabel?: string;
  corporateLink?: boolean;
  customizeCookiesLink?: string;
  complianceCode?: string;
  socialMedia?: SocialMediaItem[];

  texts?: {
    corporateLinkText?: string;
    tagline?: string;
    customCookiesLinkText?: string;
    complianceCodeText?: string;
    copyrightText?: string;
  };
}

const FooterBase = ({
  legalLinkItems,
  legalLinkAriaLabel,
  corporateLink,
  texts,
  customizeCookiesLink,
  complianceCode,
  socialMedia
}: FooterBaseProps) => {
  return (
    <div className="bsds-footer-base">
      {!!legalLinkItems && (
        <nav className="bsds-nav-footer-legal" aria-label={legalLinkAriaLabel ?? 'Footer utility menu'}>
          <ul className="bsds-nav">
            {legalLinkItems?.map((legalLinkItem) => (
              <li key={'legalLinkItem' + legalLinkItem.text} className="bsds-nav-item">
                <Link to={legalLinkItem.to} href={legalLinkItem.href} className="bsds-nav-link">
                  {legalLinkItem.text}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
      <div className="bsds-footer-base-container">
        <img className="bsds-footer-logo" src={logoTagline} alt="Boston Scientific" />
        {!!corporateLink && (
          <Link className="bsds-footer-link-corp" href="https://www.bostonscientific.com/">
            {texts?.corporateLinkText ?? 'Boston Scientific home site'}
            <img src={iconNewWindow} alt="" className="bsds-icon-right bsds-footer-icon" />
          </Link>
        )}
        {!!texts?.tagline && <p className="bsds-footer-tagline">{texts?.tagline}</p>}

        {!!socialMedia && (
          <ul className="bsds-footer-social-media">
            {socialMedia.map(({ name, link, icon }) => (
              <li key={name} className="bsds-footer-social-media-item">
                <Link href={link} aria-label={name}>
                  <img src={icon} alt="" className="bsds-footer-social-media-icon" aria-hidden />
                </Link>
              </li>
            ))}
          </ul>
        )}

        {!!customizeCookiesLink && (
          <Link className="bsds-footer-link-cookie" href={customizeCookiesLink}>
            {texts?.customCookiesLinkText ?? 'Customize cookies'}
          </Link>
        )}

        {!!complianceCode && (
          <small className="bsds-footer-text-small">
            {texts?.complianceCodeText ?? 'Approval #'} {complianceCode}
          </small>
        )}

        <small className="bsds-footer-text-small">
          &copy; {new Date().getFullYear()}{' '}
          {texts?.copyrightText ?? 'Boston Scientific Corporation or its affiliates. All rights reserved.'}
        </small>
      </div>
    </div>
  );
};

export default FooterBase;
