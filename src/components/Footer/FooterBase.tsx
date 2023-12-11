import Link from '../Link';
import logoTagline from '../../stories/assets/logo-bsc-tagline.svg';
import { RequireOnlyOne, NavItem } from '../../types';
import Facebook from '../../stories/assets/icon-facebook.svg';
import Twitter from '../../stories/assets/icon-twitter.svg';
import LinkedIn from '../../stories/assets/icon-linkedin.svg';
import YouTube from '../../stories/assets/icon-youtube.svg';
import NewWindowIcon from '../../../public/assets/images/icon-new-window.svg';

interface LegalLinksBase extends NavItem {
  children?: LegalLinkItem[];
}

export type LegalLinkItem = RequireOnlyOne<LegalLinksBase, 'to' | 'href'>;

export interface FooterBaseProps {
  legalLinkItems?: LegalLinkItem[];
  legalLinkAriaLabel?: string;
  corporateLink?: boolean;
  customizeCookiesLink?: string;
  complianceCode?: string;
  socialMedia?: {
    facebook?: string;
    twitter?: string;
    linkedIn?: string;
    youTube?: string;
  };
  texts?: {
    corporateLinkText?: string;
    tagline?: string;
    customCookiesLinkText?: string;
    complianceCodeLabel?: string;
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
  const socials = [
    {
      platform: 'Facebook',
      socialLink: socialMedia?.facebook,
      icon: Facebook,
      defaultLink: 'https://www.facebook.com/BostonScientific'
    },
    {
      platform: 'Twitter',
      socialLink: socialMedia?.twitter,
      icon: Twitter,
      defaultLink: 'https://twitter.com/bostonsci'
    },
    {
      platform: 'LinkedIn',
      socialLink: socialMedia?.linkedIn,
      icon: LinkedIn,
      defaultLink: 'https://www.linkedin.com/company/boston-scientific'
    },
    {
      platform: 'YouTube',
      socialLink: socialMedia?.youTube,
      icon: YouTube,
      defaultLink: 'https://www.youtube.com/channel/UC6mvgpoLzpXU-tlbATlrXUw'
    }
  ];
  return (
    <div className="bsds-footer-base">
      {!!legalLinkItems && (
        <nav className="bsds-nav-footer-legal" aria-label={legalLinkAriaLabel}>
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
            <img src={NewWindowIcon} alt="" className="bsds-icon-right bsds-footer-icon" />
          </Link>
        )}
        {!!texts?.tagline && <p className="bsds-footer-tagline">{texts?.tagline}</p>}

        {!!socialMedia && (
          <ul className="bsds-footer-social-media">
            {socials.map(({ platform, socialLink, icon, defaultLink }) => (
              <li key={platform} className="bsds-footer-social-media-item">
                <Link href={socialLink ?? defaultLink} aria-label={platform}>
                  <img src={icon} alt={platform} className="bsds-footer-social-media-icon" aria-hidden />
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
            {texts?.complianceCodeLabel ?? 'Approval #'} {complianceCode}
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
