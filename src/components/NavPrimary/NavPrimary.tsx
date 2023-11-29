// TODO: ADS-756 Create default texts object and assign in function params or NavPrimary.defaultProps instead of at each use case then re-enable control in story

import { ChangeEvent, FormEvent, MouseEvent, RefObject, useCallback, useEffect, useRef, useState } from 'react';
import { Location as ReactLocation } from 'react-router-dom';
import { RequireOnlyOne, NavItem } from '../../types';
import Button from '../Button';
import Link from '../Link';
import { SearchResult } from '../Search';
import NavPrimarySearch from './NavPrimarySearch';
import NavPrimaryMenu from './NavPrimaryMenu';
import NavUtility from '../NavUtility';

interface NavItemPrimaryBase extends NavItem {
  children?: NavItemPrimary[];
  description?: string;
  title?: string;
  altTo?: string;
  altHref?: string;
  altLinkText?: string;
  isExactMatch?: boolean;
  isActive?: (location: Location | ReactLocation) => boolean;
}

interface NavItemUtilityBase extends NavItem {
  children?: NavItemUtility[];
}

export type NavItemPrimary = RequireOnlyOne<NavItemPrimaryBase, 'to' | 'href' | 'children'>;

export type NavItemUtility = RequireOnlyOne<NavItemUtilityBase, 'to' | 'href' | 'children'>;

interface NavTreeNode extends NavItemPrimaryBase {
  parent: NavNodePrimary | null;
  children?: NavNodePrimary[];
  id: string;
}

export type NavNodePrimary = RequireOnlyOne<NavTreeNode, 'to' | 'href' | 'children'>;

export interface HistoryNodePrimary {
  node: NavNodePrimary;
  depth: number;
}

export interface Texts {
  menuToggleAriaLabel?: string;
  menuToggleTextOpen?: string;
  menuToggleTextClose?: string;
  menuBackButton?: string;
  searchLabel?: string;
  searchAriaLabel?: string;
  searchToggleAriaLabel?: string;
  searchToggleText?: string;
  searchButtonText?: string;
  searchButtonAriaLabel?: string;
  searchInputAriaLabel?: string;
  searchClearTextAriaLabel?: string;
  searchNoResults?: string;
  utilityNavAriaLabel?: string;
  primaryNavAriaLabel?: string;
}

export interface NavPrimaryProps {
  logo: {
    src: string;
    alt: string;
    href?: string;
    to?: string;
  };
  logoSecondary?: {
    src: string;
    alt: string;
  };
  texts?: Texts;
  navItems: NavItemPrimary[];
  utilityItems?: NavItemUtility[];
  hasSearch?: boolean;
  isConstrained?: boolean;
  searchResults?: SearchResult[];
  location: Location | ReactLocation;
  isActiveNode: (node: NavNodePrimary, ref: RefObject<HTMLAnchorElement>) => boolean;
  navigateToSearchResult?: (result: SearchResult) => void;
  onSearch?: (query: string, e: FormEvent<HTMLFormElement>) => void;
  onSearchChange?: (query: string, e: ChangeEvent<HTMLInputElement>) => void;
}

let navPrimaryMenuIndex = 0;

const NavPrimary = ({
  logo,
  logoSecondary,
  texts,
  utilityItems,
  navItems,
  hasSearch = true,
  isConstrained = false,
  searchResults,
  location,
  isActiveNode,
  navigateToSearchResult,
  onSearchChange,
  onSearch
}: NavPrimaryProps): JSX.Element => {
  const [navTree, setNavTree] = useState<NavNodePrimary[]>([]);
  const [isMenuExpanded, setIsMenuExpanded] = useState(false);
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const [history, setHistory] = useState<HistoryNodePrimary[]>([]);
  const [activeNode, setActiveNode] = useState<NavNodePrimary | null>(null);
  const [menuId, setMenuId] = useState('');
  const [isViewportSmall, setIsViewportSmall] = useState(false);
  const [isIntermediateNav, setIsIntermediateNav] = useState(false);
  const [isNavTouched, setIsNavTouched] = useState(false);
  const [rootButton, setRootButton] = useState<HTMLButtonElement>();
  const [toggleText, setToggleText] = useState('');

  const navRef = useRef<HTMLElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const linkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    setMenuId('navPrimaryMenu' + navPrimaryMenuIndex++);
  }, []);

  const pushHistory = (navItem: NavNodePrimary, depth: number) => {
    const newHistory = [...history];
    if (newHistory.length > 0 && depth <= newHistory[newHistory.length - 1].depth) {
      newHistory.splice(depth);
    }
    newHistory.push({
      node: navItem,
      depth: depth
    });
    setHistory(newHistory);
  };

  const popHistory = () => {
    const newHistory = [...history];
    newHistory.pop();
    setHistory(newHistory);
  };

  // Open menu to right place or close menu on click of root item
  const updateMenu = (e: MouseEvent<HTMLButtonElement>, navItem: NavNodePrimary): void => {
    setRootButton(e.target as HTMLButtonElement);
    if (history.length && history[0].node === navItem) {
      setHistory([]);
      setIsMenuExpanded(false);
    } else {
      pushHistory(navItem, 0);
      setIsMenuExpanded(true);
      setIsSearchExpanded(false);
    }
  };

  // Travels up the tree from the active node to get the root item
  const getActiveRoot = (): NavNodePrimary | null => {
    let node = activeNode;
    while (node?.parent) {
      node = node.parent;
    }
    return node;
  };

  useEffect(() => {
    const tree = [...navItems] as NavNodePrimary[];

    let treeDepth = 0;

    // Add 'parent' property to each nav item that points to the items parent
    const populateParents = (nodes: NavNodePrimary[], parent: NavNodePrimary | null = null, index = 0) => {
      if (index > treeDepth) {
        treeDepth = index;
      }
      nodes.forEach((node, i) => {
        node.parent = parent;
        node.id = `navPrimaryNode${index}-${i}`;
        if (node.children) {
          populateParents(node.children as NavNodePrimary[], node, ++index);
        }
      });
    };
    populateParents(tree);
    setNavTree(tree);
    setIsIntermediateNav(treeDepth + 1 === 2);
  }, [navItems]);

  // Close menu when viewport goes from small to large before making a root item selection
  const onResize = useCallback(() => {
    const fontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
    if (window.innerWidth >= fontSize * 62) {
      if (isViewportSmall) {
        setIsViewportSmall(false);
      }
      if (history.length === 0) {
        setIsMenuExpanded(false);
      }
    } else if (!isViewportSmall) {
      setIsViewportSmall(true);
    }
  }, [history.length, isViewportSmall]);

  useEffect(() => {
    if (isMenuExpanded) {
      setIsNavTouched(true);
    }
  }, [isMenuExpanded]);

  useEffect(() => {
    if (location) {
      setIsSearchExpanded(false);
      setIsMenuExpanded(false);
      setHistory([]);
    }
  }, [location]);

  useEffect(() => {
    // Close menu on focus out or click out
    const onFocusWithinOut = (e: FocusEvent | PointerEvent) => {
      if (!navRef.current?.contains(e.target as Node)) {
        setIsSearchExpanded(false);
        setIsMenuExpanded(false);
        setHistory([]);
      }
    };

    onResize();

    window.addEventListener('focusin', onFocusWithinOut);
    window.addEventListener('pointerup', onFocusWithinOut);
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('focusin', onFocusWithinOut);
      window.removeEventListener('pointerup', onFocusWithinOut);
      window.removeEventListener('resize', onResize);
    };
  }, [onResize]);

  const handleKeyUp = (e: React.KeyboardEvent<HTMLUListElement>) => {
    switch (e.key) {
      case 'Escape':
        if (isMenuExpanded || isSearchExpanded) {
          rootButton?.focus();
        }
        e.preventDefault();
        setIsMenuExpanded(false);
        setHistory([]);
        setIsSearchExpanded(false);
        break;

      default:
        break;
    }
  };

  const toggleMenu = (e: MouseEvent<HTMLButtonElement>) => {
    setRootButton(e.target as HTMLButtonElement);
    if (!isMenuExpanded && isSearchExpanded) {
      setIsSearchExpanded(false);
    }
    if (isMenuExpanded) {
      setHistory([]);
    }
    setIsMenuExpanded(!isMenuExpanded);
  };

  const toggleSearch = (e: MouseEvent<HTMLButtonElement>) => {
    setRootButton(e.target as HTMLButtonElement);
    if (!isSearchExpanded && isMenuExpanded) {
      setIsMenuExpanded(false);
      setHistory([]);
    }
    setIsSearchExpanded(!isSearchExpanded);
  };

  const isCurrent = (node: NavNodePrimary, ref: RefObject<HTMLAnchorElement>): boolean | undefined => {
    if (node.isActive) {
      return node.isActive(location);
    } else if (isActiveNode) {
      return isActiveNode(node, ref);
    } else {
      return undefined;
    }
  };

  useEffect(() => {
    if (isMenuExpanded) {
      setToggleText(texts?.menuToggleTextClose || 'Close');
    } else {
      setToggleText(texts?.menuToggleTextOpen || 'Menu');
    }
  }, [isMenuExpanded, texts?.menuToggleTextClose, texts?.menuToggleTextOpen]);

  return (
    <header ref={navRef} className={'bsds-nav-header' + (isConstrained ? ' is-constrained' : '')}>
      {!!utilityItems && (
        <NavUtility
          utilityItems={utilityItems}
          ariaLabel={texts?.utilityNavAriaLabel}
          // eslint-disable-next-line react/jsx-no-leaked-render
          logoSecondary={logoSecondary?.src ? { src: logoSecondary?.src, alt: logoSecondary?.alt } : undefined}
        />
      )}
      <nav className="bsds-nav-primary" aria-label={texts?.primaryNavAriaLabel || 'primary'}>
        <div className="bsds-nav-bar">
          {logo.to || logo.href ? (
            <Link to={logo.to} href={logo.href} className="bsds-link-logo" isNavLink>
              <img src={logo.src} alt={logo.alt} className="bsds-nav-link-logo" />
            </Link>
          ) : (
            <img className="bsds-nav-link-logo" src={logo.src} alt={logo.alt} />
          )}
          <ul className="bsds-nav" role="menubar" onKeyUp={handleKeyUp}>
            {navTree.map((navItem, i) => (
              <li
                key={navItem.text + (navItem?.to || navItem?.href)}
                role="none"
                className="bsds-nav-item bsds-nav-item-root"
              >
                {!!navItem.children && (
                  // eslint-disable-next-line jsx-a11y/prefer-tag-over-role
                  <Button
                    role="menuitem"
                    id={navItem.id}
                    type="button"
                    variant="subtle"
                    className={'bsds-nav-link' + (navItem === getActiveRoot() ? ' is-current' : '')}
                    aria-haspopup="true"
                    aria-expanded={navItem === history[0]?.node}
                    aria-controls={menuId}
                    onClick={(e) => updateMenu(e, navItem)}
                  >
                    {navItem.text}
                  </Button>
                )}
                {!!(navItem.to || navItem.href) && (
                  // eslint-disable-next-line jsx-a11y/prefer-tag-over-role
                  <Link
                    ref={linkRef}
                    to={navItem.to}
                    href={navItem.href}
                    className="bsds-nav-link"
                    isCurrentPage={isCurrent(navItem as NavNodePrimary, linkRef)}
                    aria-current={(isCurrent(navItem as NavNodePrimary, linkRef) && 'page') ?? undefined}
                    role="menuitem"
                    isNavLink
                  >
                    {navItem.text}
                  </Link>
                )}
                {navTree.length > 0 &&
                  history.length > 0 &&
                  history[0].node.text === navItem.text &&
                  !isViewportSmall && (
                    <NavPrimaryMenu
                      ref={menuRef}
                      navItems={navTree}
                      utilityItems={utilityItems}
                      logoSecondary={logoSecondary}
                      activeNode={activeNode}
                      isActiveNode={isCurrent}
                      setActiveNode={setActiveNode}
                      menuId={menuId}
                      isMenuExpanded={isMenuExpanded}
                      isIntermediateNav={isIntermediateNav}
                      history={history}
                      pushHistory={pushHistory}
                      popHistory={popHistory}
                      texts={texts}
                    />
                  )}
              </li>
            ))}
            {!!hasSearch && !!navigateToSearchResult && (
              <li role="none" className="bsds-nav-item bsds-nav-item-search">
                {/* eslint-disable-next-line jsx-a11y/prefer-tag-over-role */}
                <Button
                  role="menuitem"
                  variant="subtle"
                  className="bsds-nav-link"
                  aria-label={texts?.searchToggleAriaLabel || 'Toggle search'}
                  aria-expanded={isSearchExpanded}
                  onClick={toggleSearch}
                >
                  <span className="bsds-nav-link-search-text">{texts?.searchToggleText || 'Search'}</span>
                </Button>
                <NavPrimarySearch
                  texts={texts}
                  isExpanded={isSearchExpanded}
                  searchResults={searchResults}
                  navigateToResult={navigateToSearchResult}
                  onSearchChange={onSearchChange}
                  onSearch={onSearch}
                />
              </li>
            )}
            <li role="none" className="bsds-nav-item bsds-nav-item-toggle">
              {/* eslint-disable-next-line jsx-a11y/prefer-tag-over-role */}
              <Button
                role="menuitem"
                variant="subtle"
                className="bsds-nav-link"
                aria-label={texts?.menuToggleAriaLabel || 'Toggle menu'}
                aria-expanded={isMenuExpanded}
                onClick={toggleMenu}
              >
                {toggleText}
              </Button>
            </li>
          </ul>
        </div>
        {!!(navTree.length > 0 && (isViewportSmall || !isNavTouched)) && (
          <NavPrimaryMenu
            ref={menuRef}
            navItems={navTree}
            utilityItems={utilityItems}
            logoSecondary={logoSecondary}
            activeNode={activeNode}
            isActiveNode={isCurrent}
            setActiveNode={setActiveNode}
            menuId={menuId}
            isMenuExpanded={isMenuExpanded}
            isIntermediateNav={isIntermediateNav}
            history={history}
            pushHistory={pushHistory}
            popHistory={popHistory}
            texts={texts}
          />
        )}
      </nav>
    </header>
  );
};

export default NavPrimary;
