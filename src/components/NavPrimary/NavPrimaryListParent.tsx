import Button from '../Button';
import { NavNodePrimary } from './NavPrimary';
import NavPrimaryList from './NavPrimaryList';
import { HistoryNodePrimary } from './NavPrimary';
import { RefObject } from 'react';

interface NavPrimaryListParentProps {
  navItem: NavNodePrimary;
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

const NavPrimaryListParent = (props: NavPrimaryListParentProps) => {
  const updateHistory = () => {
    if (props.history.length && props.navItem === props.history[props.history.length - 1].node) {
      props.popHistory();
    } else {
      props.pushHistory(props.navItem, props.depth);
    }
  };

  const isLocationParent = (): boolean => {
    let node = props.activeNode;
    while (node?.parent) {
      if (node === props.navItem) {
        return true;
      } else {
        node = node.parent;
      }
    }
    return false;
  };

  const isActive = Array.from(props.history, (h) => h.node).includes(props.navItem);
  return (
    <li className="bsds-nav-item-parent">
      <Button
        id={props.navItem.id}
        variant="subtle"
        className={'bsds-nav-link' + (isActive ? ' is-active' : '') + (isLocationParent() ? ' is-current' : '')}
        aria-expanded={isActive}
        onClick={updateHistory}
      >
        <div className="bsds-nav-link-text">{props.navItem.text}</div>
        {!!props.navItem.description && <div className="bsds-nav-link-description">{props.navItem.description}</div>}
      </Button>
      {!!props.navItem.children && (
        <NavPrimaryList
          navItems={props.navItem.children}
          activeNode={props.activeNode}
          isActiveNode={props.isActiveNode}
          setActiveNode={props.setActiveNode}
          depth={props.depth + 1}
          activeDepth={props.activeDepth}
          setActiveDepth={props.setActiveDepth}
          history={props.history}
          pushHistory={props.pushHistory}
          popHistory={props.popHistory}
        />
      )}
    </li>
  );
};

export default NavPrimaryListParent;
