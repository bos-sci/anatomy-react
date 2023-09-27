import { RefObject, useEffect, useRef } from 'react';
import Link from '../Link';
import { NavNodePrimary } from './NavPrimary';

interface NavPrimaryLeafProps {
  navItem: NavNodePrimary;
  setActiveNode: (node: NavNodePrimary) => void;
  isActiveNode: (node: NavNodePrimary, ref: RefObject<HTMLAnchorElement>) => boolean;
}

const NavPrimaryLeaf = (props: NavPrimaryLeafProps) => {
  const linkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (props.isActiveNode(props.navItem, linkRef)) {
      props.setActiveNode(props.navItem);
    }
  }, [props]);

  return (
    <li className="bsds-nav-item">
      <Link
        ref={linkRef}
        href={props.navItem.href}
        to={props.navItem.to}
        className="bsds-nav-link"
        isCurrentPage={props.isActiveNode(props.navItem, linkRef)}
        aria-current={props.isActiveNode(props.navItem, linkRef) && 'page'}
        isNavLink
      >
        {props.navItem.text}
      </Link>
    </li>
  );
};

export default NavPrimaryLeaf;
