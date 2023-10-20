// TODO: ADS-756 Create default texts object and assign in function params or NavWizard.defaultProps instead of at each use case then re-enable control in story

import { RefObject, useEffect, useState, useRef } from 'react';
import { RequireOnlyOne } from '../../types';
import Button from '../Button';
import { NavItem } from '../../types';
import NavWizardList from './NavWizardList';
import useConcatenation from '../../hooks/useConcatenation';

interface NavItemWizardBase extends NavItem {
  children?: NavItemWizard[];
  description?: string;
  title?: string;
  overflowTo?: string;
  overflowHref?: string;
  overflowLinkText?: string;
  isActive?: () => boolean;
}

export type NavItemWizard = RequireOnlyOne<NavItemWizardBase, 'to' | 'href' | 'children'>;

interface NavTreeNode extends NavItemWizardBase {
  parent: NavNodeWizard | null;
  children?: NavNodeWizard[];
  id: string;
}

export type NavNodeWizard = RequireOnlyOne<NavTreeNode, 'to' | 'href' | 'children'>;

export interface HistoryNodeWizard {
  node: NavNodeWizard;
  depth: number;
  ref: RefObject<HTMLButtonElement>;
}

export interface NavWizardProps {
  navItems: NavItemWizard[];
  texts: {
    firstTitle?: string;
    firstDescription?: string;
    wizardNavAriaLabel: string;
    backButtonText?: string;
    backButtonAriaLabel?: string;
  };
  className?: string;
}

const NavWizard = (props: NavWizardProps) => {
  const [navTree, setNavTree] = useState<NavNodeWizard[]>([]);
  const [history, setHistory] = useState<HistoryNodeWizard[]>([]);

  const [breadcrumb, setBreadcrumb] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const backBtnRef = useRef<HTMLButtonElement>(null);

  const pushHistory = (navItem: NavNodeWizard, depth: number, ref: RefObject<HTMLButtonElement>) => {
    const newHistory = [...history];
    if (newHistory.length > 0 && depth <= newHistory[newHistory.length - 1].depth) {
      newHistory.splice(depth);
    }
    newHistory.push({
      node: navItem,
      depth,
      ref
    });
    setHistory(newHistory);
  };

  const popHistory = () => {
    const newHistory = [...history];
    newHistory.pop();
    setHistory(newHistory);
  };

  const focusBackBtn = () => {
    setTimeout(() => backBtnRef.current?.focus(), 0);
  };

  const backStep = () => {
    popHistory();
    setTimeout(() => history[history.length - 1].ref.current?.focus(), 0);
  };

  useEffect(() => {
    if (history.length > 0) {
      setBreadcrumb(history[history.length - 1].node.text);
      setTitle(history[history.length - 1].node.title || '');
      setDescription(history[history.length - 1].node.description || '');
    } else {
      setBreadcrumb('');
      setTitle(props.texts.firstTitle || '');
      setDescription(props.texts.firstDescription || '');
    }
  }, [history, props.texts.firstTitle, props.texts.firstDescription]);

  useEffect(() => {
    const tree = [...props.navItems] as NavNodeWizard[];

    const populateParents = (nodes: NavNodeWizard[], parent: NavNodeWizard | null = null, index = 0) => {
      nodes.forEach((node, i) => {
        node.parent = parent;
        node.id = `navWizardNode${index}-${i}`;
        if (node.children) {
          populateParents(node.children as NavNodeWizard[], node, ++index);
        }
      });
    };
    populateParents(tree);
    setNavTree(tree);
  }, [props.navItems]);

  return (
    <nav
      className={useConcatenation(['bsds-nav-wizard', `${props.className || ''}`])}
      aria-label={props.texts.wizardNavAriaLabel}
    >
      <div className="bsds-nav-wizard-header">
        {history.length > 0 && (
          <Button
            ref={backBtnRef}
            type="button"
            className="bsds-button-nav-back"
            aria-label={props.texts.backButtonAriaLabel ? props.texts.backButtonAriaLabel : 'Back to previous step'}
            onClick={backStep}
          >
            {props.texts.backButtonText ? props.texts.backButtonText : 'Back'}
          </Button>
        )}
        {!!breadcrumb && (
          <p className="bsds-nav-breadcrumb" aria-current="step">
            {breadcrumb}
          </p>
        )}
        {!!title && <h2 className="bsds-nav-title">{title}</h2>}
        {!!description && <p className="bsds-nav-description">{description}</p>}
      </div>
      {navTree.length > 0 && (
        <div className="bsds-nav-wizard-menu">
          <NavWizardList
            navItems={navTree}
            history={history}
            pushHistory={pushHistory}
            popHistory={popHistory}
            depth={0}
            focusBackBtn={focusBackBtn}
          />
        </div>
      )}
    </nav>
  );
};

export default NavWizard;
