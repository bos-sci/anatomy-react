import { AnchorHTMLAttributes, ReactNode } from 'react';
import { To } from 'react-router-dom';

export const DOWNLOAD_LINK_VARIANTS = ['cta-download'] as const;
export const MAILTO_LINK_VARIANTS = ['cta-mailto'] as const;

export const LINK_VARIANTS = [
  'cta',
  ...DOWNLOAD_LINK_VARIANTS,
  ...MAILTO_LINK_VARIANTS,
  'ghost',
  'nav',
  'subtle'
] as const;

export type LinkVariants = (typeof LINK_VARIANTS)[number];

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  href?: string;
  to?: To;
  variant?: LinkVariants;
  isNavLink?: boolean;
  isCurrentPage?: boolean;
  target?: string;
  rel?: string;
  className?: string;
}
