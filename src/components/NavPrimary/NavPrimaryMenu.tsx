import { ForwardedRef, RefObject, forwardRef, useState } from 'react';
import Button from '../Button';
import { HistoryNodePrimary, NavNodePrimary, Texts } from './NavPrimary';
import NavPrimaryList from './NavPrimaryList';

interface NavPrimaryMenuProps {
  navItems: NavNodePrimary[];
  activeNode: NavNodePrimary | null;
  isActiveNode: (node: NavNodePrimary, ref: RefObject<HTMLAnchorElement>) => boolean;
  setActiveNode: (node: NavNodePrimary) => void;
  menuId: string;
  isMenuExpanded: boolean;
  isIntermediateNav: boolean;
  history: HistoryNodePrimary[];
  pushHistory: (navItem: NavNodePrimary, depth: number) => void;
  popHistory: () => void;
  texts?: Texts;
}

const NavPrimaryMenu = forwardRef((props: NavPrimaryMenuProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
  const [activeDepth, setActiveDepth] = useState(0);

  return (
    <div
      ref={ref}
      id={props.menuId}
      className={
        'bsds-nav-menu' +
        (props.isMenuExpanded ? ' is-expanded' : '') +
        (props.isIntermediateNav ? ' intermediate' : '')
      }
    >
      {props.history.length > 0 && (
        <Button type="button" className="bsds-button-nav-back" onClick={() => props.popHistory()}>
          {props.texts?.menuBackButton ? props.texts.menuBackButton : 'Back'}
        </Button>
      )}
      <div className="bsds-nav-menu-panels">
        <NavPrimaryList
          navItems={props.navItems}
          activeNode={props.activeNode}
          isActiveNode={props.isActiveNode}
          setActiveNode={props.setActiveNode}
          depth={0}
          activeDepth={activeDepth}
          setActiveDepth={setActiveDepth}
          history={props.history}
          pushHistory={props.pushHistory}
          popHistory={props.popHistory}
        />
      </div>
    </div>
  );
});

NavPrimaryMenu.displayName = 'NavPrimaryMenu';
export default NavPrimaryMenu;
