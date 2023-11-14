import DropdownMenu from '../DropdownMenu';
import Link from '../Link';
import { NavItemUtility } from '../NavPrimary';

export interface NavUtilityProps {
  logoSecondary?: {
    src: string;
    alt: string;
  };
  utilityItems: NavItemUtility[];
  ariaLabel?: string;
}

const NavUtility = ({ logoSecondary, utilityItems, ariaLabel = 'Utility' }: NavUtilityProps): JSX.Element => {
  return (
    <div className="bsds-nav-utility" style={{ display: logoSecondary ? 'flex' : 'none' }}>
      {!!logoSecondary && (
        <div className="bsds-nav-logo">
          <img src={logoSecondary.src} alt={logoSecondary.alt} />
        </div>
      )}
      <nav className="bsds-nav" aria-label={ariaLabel}>
        <ul className="bsds-nav">
          {utilityItems.map((utilityItem) => (
            <li key={'utilityItem' + utilityItem.text} className="bsds-nav-item">
              {utilityItem.children ? (
                <DropdownMenu triggerText={utilityItem.text} className="bsds-nav-link" menuPosition="bottom-end">
                  {utilityItem.children.map((child) => (
                    <Link key={child.text + (child.to || child.href)} href={child.href} to={child.to}>
                      {child.text}
                    </Link>
                  ))}
                </DropdownMenu>
              ) : (
                <Link to={utilityItem.to} href={utilityItem.href} className="bsds-nav-link">
                  {utilityItem.text}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default NavUtility;
