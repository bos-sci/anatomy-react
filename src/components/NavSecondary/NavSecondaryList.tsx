import { RefObject } from 'react';
import Link from '../Link';
import NavSecondaryListParent from './NavSecondaryListParent';
import { NavNodeSecondary } from './NavSecondary';
import { Location as ReactLocation } from 'react-router-dom';

interface NavListProps {
  navListId?: string;
  navItems: NavNodeSecondary[];
  parent: NavNodeSecondary | null;
  activeParent: NavNodeSecondary | null;
  activeParentRef: RefObject<HTMLButtonElement> | null;
  setActiveParentRef: (ref: RefObject<HTMLButtonElement> | null) => unknown;
  expandedChild: (node: NavNodeSecondary | null) => unknown;
  location: Location | ReactLocation;
}

const NavSecondaryList = ({
  navListId,
  navItems,
  parent,
  activeParent,
  activeParentRef,
  setActiveParentRef,
  expandedChild,
  location
}: NavListProps) => {
  return (
    <ul
      id={navListId}
      className={`bsds-nav${parent?.text === activeParent?.text ? ' bsds-nav-active-list' : ''}`}
      role={parent?.text === activeParent?.text ? '' : 'none'}
    >
      {navItems.map((navItem, i) => {
        if (navItem.to || navItem.href) {
          return (
            <li key={`secondaryNavItem${navItem.text}`} className="bsds-nav-item">
              <Link
                to={navItem.to}
                href={navItem.href}
                className="bsds-nav-link"
                isCurrentPage={!!(navItem.isActive && navItem.isActive(location))}
                isNavLink
              >
                {navItem.text}
              </Link>
            </li>
          );
        } else {
          return (
            <NavSecondaryListParent
              key={`secondaryNavItemParent${navItem.text}`}
              navItem={navItem}
              activeParent={activeParent}
              activeParentRef={activeParentRef}
              setActiveParentRef={setActiveParentRef}
              expandedChild={expandedChild}
              location={location}
            />
          );
        }
      })}
    </ul>
  );
};

export default NavSecondaryList;
