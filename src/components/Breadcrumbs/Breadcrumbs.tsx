import { useEffect, useState } from 'react';
import { RequireOnlyOne } from '../../types';
import DropdownMenu from '../DropdownMenu/DropdownMenu';
import Link from '../Link';

interface CrumbBase {
  name: string;
  href?: string;
  to?: string;
}

export type Crumb = RequireOnlyOne<CrumbBase, 'href' | 'to'>;

export interface BreadcrumbsProps {
  crumbs: Crumb[];
  currentPage: string;
  texts?: {
    breadcrumbNavAriaLabel?: string;
    breadcrumbDropdownAriaLabel?: string;
  };
  hasOverflow?: boolean;
}

const Breadcrumbs = ({ crumbs, currentPage, texts, hasOverflow = true }: BreadcrumbsProps): JSX.Element => {
  const [overflowCrumbs, setOverflowCrumbs] = useState<Crumb[]>([]);
  const [visibleCrumbs, setVisibleCrumbs] = useState<Crumb[]>([]);

  useEffect(() => {
    if (crumbs) {
      if (hasOverflow) {
        setVisibleCrumbs(crumbs.slice(-1));
        setOverflowCrumbs(crumbs.slice(0, -1));
      } else {
        setVisibleCrumbs(crumbs);
        setOverflowCrumbs([]);
      }
    }
  }, [crumbs, hasOverflow]);

  return (
    <nav aria-label={texts?.breadcrumbNavAriaLabel || 'breadcrumbs'}>
      <ol className="bsds-breadcrumbs">
        {overflowCrumbs.length > 0 && (
          <li className="bsds-breadcrumb-overflow">
            {overflowCrumbs.length > 0 && (
              <DropdownMenu
                variant="subtle"
                triggerText={texts?.breadcrumbDropdownAriaLabel || 'previous pages'}
                icon="ellipsis"
                listType="ol"
              >
                {overflowCrumbs.map((crumb) => (
                  <Link key={`crumb${crumb.name}`} href={crumb.href} to={crumb.to}>
                    {crumb.name}
                  </Link>
                ))}
              </DropdownMenu>
            )}
          </li>
        )}
        {visibleCrumbs.map((crumb) => (
          <li key={`crumb${crumb.name}`} className="bsds-breadcrumb-item">
            <Link href={crumb.href} to={crumb.to} className="bsds-breadcrumb-link">
              {crumb.name}{' '}
            </Link>
          </li>
        ))}
        <li className="bsds-breadcrumb-item" aria-current="page">
          {currentPage}
        </li>
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
