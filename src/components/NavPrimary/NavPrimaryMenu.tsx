import { ForwardedRef, RefObject, forwardRef, useState } from 'react';
import Button from '../Button';
import DropdownMenu from '../DropdownMenu';
import Link from '../Link';
import { HistoryNodePrimary, NavItemUtility, NavNodePrimary, Texts } from './NavPrimary';
import NavPrimaryList from './NavPrimaryList';

interface NavPrimaryMenuProps {
  navItems: NavNodePrimary[];
  utilityItems?: NavItemUtility[];
  activeNode: NavNodePrimary | null;
  isActiveNode: (node: NavNodePrimary, ref: RefObject<HTMLAnchorElement>) => boolean | undefined;
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
      {props.history.length === 0 && !!props.utilityItems && (
        <ul className="bsds-nav bsds-nav-block">
          {props.utilityItems.map((item) => (
            <li key={'utilityItem' + item.text} className="bsds-nav-item">
              {item.children ? (
                <DropdownMenu key={'utilityItemDropdown' + item.text} triggerText={item.text} className="bsds-nav-link">
                  {item.children.map((child) => (
                    <Link key={'utilityItemDropdownChild' + (child.to || child.href)} href={child.href} to={child.to}>
                      {child.text}
                    </Link>
                  ))}
                </DropdownMenu>
              ) : (
                <Link to={item.to} href={item.href} className="bsds-nav-link">
                  {item.text}
                </Link>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
});

NavPrimaryMenu.displayName = 'NavPrimaryMenu';
export default NavPrimaryMenu;
