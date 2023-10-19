import {
  Children,
  cloneElement,
  createRef,
  FunctionComponent,
  HTMLAttributes,
  ReactElement,
  RefObject,
  useEffect,
  useRef,
  useState
} from 'react';
import Button, { ButtonVariants, ButtonProps } from '../Button';
import { LinkProps } from '../Link';
import DropdownItem, { DropdownItemElements } from './DropdownItem';
import Icon from '../Icon';
import { autoUpdate, flip, Placement, shift, useFloating } from '@floating-ui/react-dom';

export interface DropdownMenuProps extends HTMLAttributes<HTMLButtonElement> {
  triggerText: string;
  listType?: 'ol' | 'ul';
  icon?: string;
  variant?: ButtonVariants;
  highlightedAction?: ReactElement<ButtonProps | LinkProps>;
  menuPosition?: Placement;
  children?: DropdownItemElements[] | DropdownItemElements;
}

let dropdownIndex = 0;

// TODO: ADS-382 allow implementer to add refs to dropdown children. Currently they are being removed in the clone process.

const DropdownMenu = (props: DropdownMenuProps) => {
  const {
    triggerText,
    listType = 'ul',
    icon,
    variant,
    menuPosition = 'bottom-start',
    children = [],
    className = '',
    highlightedAction,
    ...buttonAttrs
  } = props;

  const [isMenuExpanded, setIsMenuExpanded] = useState(false);
  const [dropdownItems, setDropdownItems] = useState<DropdownItemElements[]>([]);
  const [dropdownId, setDropdownId] = useState('');
  const [ariaText, setAriaText] = useState('');

  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownItemRefs = useRef(Children.map(children, () => createRef<HTMLElement>()));

  const { x, y, reference, floating, strategy, refs } = useFloating({
    whileElementsMounted: autoUpdate,
    placement: menuPosition,
    strategy: 'fixed',
    middleware: [flip(), shift()]
  });

  useEffect(() => {
    if (isMenuExpanded) {
      const firstAction = dropdownItemRefs.current.find(
        (ref) => ref.current?.tagName === 'BUTTON' || ref.current?.tagName === 'A'
      );
      if (firstAction) {
        firstAction.current?.focus();
      } else {
        console.error('Dropdown must contain at least one button or link.');
      }
    }
  }, [isMenuExpanded]);

  const moveFocus = (distance: number) => {
    if (dropdownItemRefs.current) {
      let currentIndex = distance > 0 ? 0 : dropdownItemRefs.current.length - 1;
      dropdownItemRefs.current.forEach((item, i) => {
        if (item.current === document.activeElement) {
          currentIndex = i;
        }
      });

      let newIndex = currentIndex + distance;
      if (newIndex > dropdownItemRefs.current.length - 1) {
        newIndex -= dropdownItemRefs.current.length;
      } else if (newIndex < 0) {
        newIndex += dropdownItemRefs.current.length;
      }
      if (
        dropdownItemRefs.current[newIndex].current?.tagName !== 'BUTTON' &&
        dropdownItemRefs.current[newIndex].current?.tagName !== 'A'
      ) {
        moveFocus(distance > 0 ? ++distance : --distance);
      } else {
        dropdownItemRefs.current[newIndex].current?.focus();
      }
    }
  };

  const trigger = refs.reference.current as HTMLButtonElement;

  const updateFocus = (e: React.KeyboardEvent<HTMLUListElement>) => {
    switch (e.key) {
      case 'ArrowUp':
        e.preventDefault();
        moveFocus(-1);
        break;

      case 'ArrowDown':
        e.preventDefault();
        moveFocus(1);
        break;

      case 'Escape':
        e.preventDefault();
        setIsMenuExpanded(false);
        trigger.focus();
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    if (highlightedAction) {
      dropdownItemRefs.current.push(createRef());
    }
  }, [highlightedAction, dropdownItemRefs]);

  useEffect(() => {
    if (children) {
      let dropdownItemClones: DropdownItemElements[] = [];

      if (Array.isArray(children)) {
        let lastGroupName: number | null = null;
        const newChildren = Children.map(children, (child: ReactElement, i) => {
          const childComponent = child.type as FunctionComponent;

          // Dropdown group clone
          if (childComponent.displayName === 'DropdownGroupName') {
            lastGroupName = i;
            return cloneElement(child, {
              'ref': dropdownItemRefs.current[i],
              'id': dropdownId + 'group' + i,
              'role': 'none',
              'aria-hidden': true
            });
          } else {
            // Dropdown item (button or link) clone
            const attrs: {
              'ref': RefObject<HTMLElement>;
              'role': string;
              'aria-describedby'?: string;
              'tabIndex': number;
            } = {
              ref: dropdownItemRefs.current[i],
              role: 'menuitem',
              tabIndex: -1
            };
            // If nested under group
            if (lastGroupName !== null) {
              attrs['aria-describedby'] = dropdownId + 'group' + lastGroupName;
            }
            return cloneElement(child, attrs);
          }
        });
        dropdownItemClones = newChildren as DropdownItemElements[];
      } else {
        dropdownItemClones = [
          cloneElement(children as ReactElement, {
            ref: dropdownItemRefs.current[0],
            role: 'menuitem'
          })
        ];
      }

      // Highlighted action
      if (highlightedAction) {
        dropdownItemClones.push(
          cloneElement(highlightedAction as ReactElement, {
            ref: dropdownItemRefs.current[dropdownItemRefs.current.length - 1],
            role: 'menuitem',
            tabIndex: -1
          })
        );
      }

      setDropdownItems(dropdownItemClones);
    }
  }, [children, dropdownId, highlightedAction]);

  useEffect(() => {
    setDropdownId('dropdown' + dropdownIndex++);
  }, []);

  useEffect(() => {
    if (icon) {
      setAriaText(triggerText);
    }
  }, [icon, triggerText]);

  useEffect(() => {
    const onFocusWithinOut = (e: FocusEvent | PointerEvent) => {
      if (!dropdownRef.current?.contains(e.target as Node)) {
        setIsMenuExpanded(false);
      }
    };
    window.addEventListener('focusin', onFocusWithinOut);
    window.addEventListener('pointerup', onFocusWithinOut);
    return () => {
      window.removeEventListener('focusin', onFocusWithinOut);
      window.removeEventListener('pointerup', onFocusWithinOut);
    };
  }, []);

  const listItems = dropdownItems.map((item, i) => (
    <DropdownItem
      key={dropdownId + 'item' + item.props.children}
      item={item}
      isHighlightedAction={!!highlightedAction && i === dropdownItems.length - 1}
    />
  ));

  return (
    <div ref={dropdownRef} className="bsds-dropdown">
      <Button
        ref={reference}
        variant={variant}
        className={`bsds-dropdown-trigger${className ? ' ' + className : ''}${icon ? ' has-icon' : ''}`}
        aria-haspopup="true"
        aria-expanded={isMenuExpanded}
        aria-label={ariaText}
        onClick={() => setIsMenuExpanded(!isMenuExpanded)}
        {...buttonAttrs}
      >
        {!!icon && <Icon size="2x" name={icon} />}
        {!icon && triggerText}
      </Button>
      {listType === 'ul' && (
        <ul
          ref={floating}
          style={{
            position: strategy,
            top: y ?? 0,
            left: x ?? 0,
            width: 'max-content'
          }}
          hidden={!isMenuExpanded}
          className="bsds-dropdown-menu"
          role="menu"
          onKeyDown={updateFocus}
        >
          {listItems}
        </ul>
      )}
      {listType === 'ol' && (
        <ol
          ref={floating}
          style={{
            position: strategy,
            top: y ?? 0,
            left: x ?? 0,
            width: 'max-content'
          }}
          hidden={!isMenuExpanded}
          className="bsds-dropdown-menu"
          role="menu"
          onKeyDown={updateFocus}
        >
          {listItems}
        </ol>
      )}
    </div>
  );
};

export default DropdownMenu;
