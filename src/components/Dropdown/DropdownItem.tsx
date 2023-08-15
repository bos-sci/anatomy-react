import { ReactElement } from 'react';
import { ButtonProps } from '../Button';
import { LinkProps } from '../Link';
import { DropdownGroupNameProps } from './DropdownGroupName';

export type DropdownItemElements = ReactElement<ButtonProps | LinkProps | DropdownGroupNameProps>;

export interface DropdownItemProps {
  item: DropdownItemElements;
  isHighlightedAction?: boolean;
}

const DropdownItem = (props: DropdownItemProps) => {
  return (
    <li
      className={`bsds-dropdown-item${props.isHighlightedAction ? ' bsds-dropdown-item-highlighted' : ''}`}
      role="none"
    >
      {props.item}
    </li>
  );
};

export default DropdownItem;
