import Link from '../Link';
import logoTagline from '../../stories/assets/logo-bsc-tagline.svg';
import { RequireOnlyOne, NavItem } from '../../types';
import Facebook from '../../stories/assets/icon-facebook.svg';
import Twitter from '../../stories/assets/icon-twitter.svg';
import LinkedIn from '../../stories/assets/icon-linkedin.svg';
import YouTube from '../../stories/assets/icon-youtube.svg';

interface LegalLinksBase extends NavItem {
  children?: LegalLinkItem[];
}

export type LegalLinkItem = RequireOnlyOne<LegalLinksBase, 'to' | 'href'>;

export interface FooterBaseProps {
  legalLinkItems?: LegalLinkItem[];
  legalLinkAriaLabel?: string;
  corporateLink?: boolean;
  tagline?: string;
  customizeCookies?: string;
  complianceCode?: string;
  socialMedia?: {
    facebook?: string;
    twitter?: string;
    linkedIn?: string;
    youTube?: string;
  };
}

const FooterBase = ({
  legalLinkItems,
  legalLinkAriaLabel,
  corporateLink,
  tagline,
  customizeCookies,
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
            Boston Scientific home site
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              aria-hidden="true"
              className="bsds-icon-right bsds-footer-icon"
            >
              <path
                fill="currentColor"
                d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"
              />
            </svg>
          </Link>
        )}
        {!!tagline && <p className="bsds-footer-tagline">{tagline}</p>}

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

        {!!customizeCookies && (
          <Link className="bsds-footer-link-cookie" href={customizeCookies}>
            Customize cookies
          </Link>
        )}

        {!!complianceCode && <small className="bsds-footer-text-small">Approval # {complianceCode}</small>}

        <small className="bsds-footer-text-small">
          &copy; {new Date().getFullYear()} Boston Scientific Corporation or its affiliates. All rights reserved.
        </small>
      </div>
    </div>
  );
};

export default FooterBase;
