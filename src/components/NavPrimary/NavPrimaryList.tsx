import Link from '../Link';
import { NavNodePrimary } from './NavPrimary';
import NavPrimaryListParent from './NavPrimaryListParent';
import { HistoryNodePrimary } from './NavPrimary';
import NavPrimaryLeaf from './NavPrimaryLeaf';
import { RefObject } from 'react';

interface NavPrimaryListProps {
  navItems: NavNodePrimary[];
  activeNode: NavNodePrimary | null;
  isActiveNode: (node: NavNodePrimary, ref: RefObject<HTMLAnchorElement>) => boolean;
  setActiveNode: (node: NavNodePrimary) => void;
  depth: number;
  activeDepth: number;
  setActiveDepth: (activeDepth: number) => void;
  history: HistoryNodePrimary[];
  pushHistory: (navItem: NavNodePrimary, depth: number) => void;
  popHistory: () => void;
}

const NavPrimaryList = (props: NavPrimaryListProps) => {
  const parent = props.navItems[0].parent;
  return (
    <div
      className={
        'bsds-nav-menu-panel' +
        (parent?.altLinkText && props.depth === 1 ? ' has-header' : '') +
        ((props.history.length === 0 && props.depth === 0) ||
        (parent !== null && props.history[props.history.length - 1]?.node) === parent
          ? ' bsds-nav-active-list'
          : '') +
        (parent && Array.from(props.history, (h) => h.node).includes(parent) ? ' bsds-nav-list-history' : '')
      }
    >
      {!!parent?.altLinkText && props.depth === 1 && (
        <div className="bsds-nav-menu-panel-header">
          <p className="bsds-nav-menu-panel-title">{parent.text}</p>
          <p className="bsds-body-subtle">{parent.description}</p>
          <Link to={parent.altTo} href={parent.altHref} className="bsds-body-subtle bsds-nav-menu-panel-header-link">
            {parent.altLinkText}
          </Link>
        </div>
      )}
      <ul className="bsds-nav" aria-describedby={parent?.id}>
        {props.navItems.map((navItem, i) => {
          if (navItem.children) {
            // Parent Button
            return (
              <NavPrimaryListParent
                key={navItem.to || navItem.href || navItem.text + props.depth}
                navItem={navItem}
                activeNode={props.activeNode}
                isActiveNode={props.isActiveNode}
                setActiveNode={props.setActiveNode}
                depth={props.depth}
                activeDepth={props.activeDepth}
                setActiveDepth={props.setActiveDepth}
                history={props.history}
                pushHistory={props.pushHistory}
                popHistory={props.popHistory}
              />
            );
          } else {
            return (
              // Leaf Node
              <NavPrimaryLeaf
                key={'NavPrimaryLeaf' + navItem.text || navItem.id}
                navItem={navItem}
                isActiveNode={props.isActiveNode}
                setActiveNode={props.setActiveNode}
              />
            );
          }
        })}

        {/* Bottom Link */}
        {!!parent?.altLinkText && props.depth !== 1 && (
          <li key={parent.altLinkText + props.depth} className="bsds-nav-item">
            <Link href={parent.altHref} to={parent.altTo} className="bsds-nav-link-see-all">
              {parent.altLinkText}
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
};

export default NavPrimaryList;
