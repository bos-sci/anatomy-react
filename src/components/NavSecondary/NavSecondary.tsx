// TODO: ADS-756 Create default texts object and assign in function params or NavSecondary.defaultProps instead of at each use case then re-enable control in story

import { RefObject, useEffect, useRef, useState } from 'react';
import { Location as ReactLocation } from 'react-router-dom';
import { RequireOnlyOne, NavItem } from '../../types';
import Button from '../Button';
import NavSecondaryList from './NavSecondaryList';

interface NavItemExtended extends NavItem {
  pathname?: string;
  children?: NavItemSecondary[];
  isActive?: (location: Location | ReactLocation) => boolean;
}

export type NavItemSecondary = RequireOnlyOne<NavItemExtended, 'to' | 'href' | 'children'>;

interface NavTreeNode extends NavItemExtended {
  parent: NavNodeSecondary | null;
  children?: NavNodeSecondary[];
}

export type NavNodeSecondary = RequireOnlyOne<NavTreeNode, 'to' | 'href' | 'children'>;

export interface NavSecondaryProps {
  navItems: NavItemSecondary[];
  /**
   * Manually set the route for the current page
   */
  activeSlug?: string;
  /**
   * The current application location. Either window.location, react-router location, or other equivalent object
   */
  location: Location | ReactLocation;
  className?: string;
  texts?: {
    menuToggleAriaLabel?: string;
    menuToggleText?: string;
    navAriaLabel?: string;
    backButtonText?: string;
  };
}

let navSecondaryIndex = 0;

const NavSecondary = ({ navItems, activeSlug, location, className, texts }: NavSecondaryProps): JSX.Element => {
  const [navTree, setNavTree] = useState<NavNodeSecondary[]>([]);
  const [activeParent, setActiveParent] = useState<NavNodeSecondary | null>(null);
  const [activeParentRef, setActiveParentRef] = useState<RefObject<HTMLButtonElement> | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [navSecondaryId, setNavSecondaryId] = useState('');

  const nav = useRef<HTMLElement>(null);
  const backBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const tree = [...navItems] as NavNodeSecondary[];

    const populateParents = (nodes: NavNodeSecondary[], parent: NavNodeSecondary | null = null) => {
      nodes.forEach((node) => {
        node.parent = parent;
        if (node.children) {
          populateParents(node.children as NavNodeSecondary[], node);
        }
      });
    };
    populateParents(tree);
    setNavTree(tree);
  }, [navItems]);

  useEffect(() => {
    const findNodeBySlug = (nodes: NavNodeSecondary[], pathname: string): NavNodeSecondary | undefined => {
      function findInTree(node: NavNodeSecondary, pathname: string): NavNodeSecondary | null {
        if ((node.href && pathname.includes(node.href)) || (node.to && pathname.includes(node.to))) {
          return node;
        } else if (node.children) {
          for (let i = 0; i < node.children.length; i++) {
            //eslint-disable-next-line prefer-const
            let found: NavNodeSecondary | null = findInTree(node.children[i], pathname);
            if (found) {
              return found;
            }
          }
          return null;
        } else {
          return null;
        }
      }

      for (let i = 0; i < nodes.length; i++) {
        const foundNode = findInTree(nodes[i], pathname);
        if (foundNode) {
          return foundNode;
        }
      }
    };
    const currentNode = findNodeBySlug(navTree, activeSlug ? activeSlug : location.pathname);
    if (currentNode) {
      setActiveParent(currentNode.parent);
    }
  }, [activeSlug, location, navTree]);

  const goBack = () => {
    setActiveParent(activeParent?.parent || null);
    setTimeout(() => activeParentRef?.current?.focus(), 0);
  };

  const expandedChild = (navItem: NavNodeSecondary | null) => {
    setActiveParent(navItem);
    setTimeout(() => backBtnRef.current?.focus(), 0);
  };

  useEffect(() => {
    setNavSecondaryId('navSecondary' + navSecondaryIndex++);
  }, []);

  useEffect(() => {
    const onFocusWithinOut = (e: FocusEvent | PointerEvent) => {
      if (!nav.current?.contains(e.target as Node) && isExpanded) {
        setIsExpanded(false);
      }
    };
    window.addEventListener('focusin', onFocusWithinOut);
    window.addEventListener('pointerup', onFocusWithinOut);
    return () => {
      window.removeEventListener('focusin', onFocusWithinOut);
      window.removeEventListener('pointerup', onFocusWithinOut);
    };
  }, [isExpanded]);

  useEffect(() => {
    setIsExpanded(false);
  }, [location.pathname]);

  return (
    <nav ref={nav} className={`bsds-nav-secondary ${className || ''}`} aria-label={texts?.navAriaLabel || 'secondary'}>
      <Button
        className="bsds-nav-secondary-menu-trigger"
        aria-expanded={isExpanded}
        aria-controls={navSecondaryId}
        aria-label={texts?.menuToggleAriaLabel || texts?.menuToggleText || 'Secondary menu'}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {texts?.menuToggleText || 'Menu'}
      </Button>
      <div id={navSecondaryId} className={`bsds-nav-secondary-menu${isExpanded ? ' is-expanded' : ''}`}>
        {!!activeParent && (
          <Button ref={backBtnRef} type="button" className="bsds-button-text" onClick={goBack}>
            {texts?.backButtonText || 'Back'}
          </Button>
        )}
        <NavSecondaryList
          navItems={navTree}
          parent={null}
          activeParent={activeParent}
          activeParentRef={activeParentRef}
          setActiveParentRef={setActiveParentRef}
          expandedChild={expandedChild}
          location={location}
        />
      </div>
    </nav>
  );
};

export default NavSecondary;
