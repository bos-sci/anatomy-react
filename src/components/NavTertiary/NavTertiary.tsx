import { useId } from 'react';
import Link from '../Link';

export interface NavItemTertiary {
  id: string;
  text: string;
}

export interface NavTertiaryProps {
  navTertiaryItems?: NavItemTertiary[];
  tertiaryNavAriaLabel?: string;
  hasReactRouter?: boolean;
}

const NavTertiary = ({
  navTertiaryItems,
  tertiaryNavAriaLabel,
  hasReactRouter = true
}: NavTertiaryProps): JSX.Element => {
  const navTitleId = useId();

  return (
    <nav className="bsds-nav-tertiary" aria-label={tertiaryNavAriaLabel || 'Table of contents'}>
      <h2 className="bsds-nav-tertiary-title" aria-hidden="true" id={'tertiaryNav' + navTitleId}>
        On this page
      </h2>
      <ul className="bsds-nav">
        {!!navTertiaryItems &&
          Array.from(navTertiaryItems).map((navItem, i) => {
            return (
              <li key={`tertiaryNavItem${navItem.id}`} className="bsds-nav-item">
                <Link
                  to={hasReactRouter ? { hash: navItem.id } : ''}
                  href={!hasReactRouter ? `#${navItem.id}` : ''}
                  className="bsds-nav-link"
                >
                  {navItem.text}
                </Link>
              </li>
            );
          })}
      </ul>
    </nav>
  );
};

export default NavTertiary;
