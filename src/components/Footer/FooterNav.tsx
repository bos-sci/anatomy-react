/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { Fragment, useEffect, useId, useState } from 'react';
import { NavItem, RequireOnlyOne } from '../../types';
import Link from '../Link';
import Accordion, { AccordionPanel } from '../Accordion';

export type NavItemFooter = RequireOnlyOne<NavItem, 'to' | 'href'>;

export interface NavItemsFooter {
  title?: string;
  navItems: NavItemFooter[];
  altTo?: string;
  altHref?: string;
  altLinkText?: string;
}

export interface NavItemsInternal extends NavItemsFooter {
  id: string;
}

interface Props {
  navItems: NavItemsFooter[];
}

const FooterNav = (props: Props) => {
  const isLarge = (): boolean => {
    const fontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
    return window.innerWidth >= fontSize * 48;
  };

  const [items, setItems] = useState<NavItemsInternal[]>([]);
  const [columns, setColumns] = useState<NavItemsInternal[][]>([]);
  const [isViewportSmall, setIsViewportSmall] = useState(!isLarge());

  const footerNavId = useId();

  useEffect(() => {
    const onResize = () => {
      if (isLarge()) {
        if (isViewportSmall) {
          setIsViewportSmall(false);
        }
      } else if (!isViewportSmall) {
        setIsViewportSmall(true);
      }
    };

    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, [isViewportSmall]);

  useEffect(() => {
    if (items.some((item) => item.title) && !items.every((item) => item.title)) {
      console.error('Footer nav items must either all have titles, or none have titles.');
    }
  }, [items]);

  useEffect(() => {
    setItems(
      props.navItems.map((item, i) => {
        return {
          ...item,
          id: footerNavId + i
        };
      })
    );
  }, [footerNavId, props.navItems]);

  useEffect(() => {
    const colCount = 3;
    const columnSize = items.length / colCount;
    let remainder = items.length % colCount;

    const originalItems = [...items];
    const cols: NavItemsInternal[][] = [];
    for (let col = 0; col < colCount; col++) {
      const itemCount = remainder > 0 ? columnSize + 1 : columnSize;
      const colItems: NavItemsInternal[] = [];
      for (let i = itemCount - 1; i > 0; i--) {
        const nextItem = originalItems.shift();
        if (nextItem) {
          colItems.push(nextItem);
        }
      }
      cols.push(colItems);
      remainder--;
    }
    console.log(cols);
    setColumns(cols);
  }, [items]);

  return (
    <nav className="bsds-nav-footer">
      <ListManager isViewportSmall={isViewportSmall} items={items} columns={columns} />
    </nav>
  );
};

interface ListManagerProps {
  isViewportSmall: boolean;
  items: NavItemsInternal[];
  columns: NavItemsInternal[][];
}

const ListManager = (props: ListManagerProps) => {
  if (props.isViewportSmall && props.items.every((item) => item.title)) {
    return (
      <Accordion headingLevel="h2">
        {props.items.map((group) => (
          <AccordionPanel key={group.id} heading={group.title || ''}>
            <List group={group} />
          </AccordionPanel>
        ))}
      </Accordion>
    );
  } else if (props.columns[0] && props.columns[0].length > 0) {
    if (props.items.every((item) => item.title)) {
      return props.columns.map((col) => (
        <div key={col[0].id + 'col'} className="bsds-nav-footer-column">
          {col.map((group) => (
            <div key={group.id} className="bsds-nav-group">
              <p id={group.id} className="bsds-nav-title">
                {group.title}
              </p>
              <List group={group} />
            </div>
          ))}
        </div>
      ));
    } else {
      return props.columns.map((col) => (
        <div key={col[0].id + 'col'} className="bsds-nav-footer-column">
          {col.map((group) => (
            <List key={group.id} group={group} />
          ))}
        </div>
      ));
    }
  } else {
    // eslint-disable-next-line react/jsx-no-useless-fragment
    return <></>;
  }
};

const List = ({ group }: { group: NavItemsInternal }) => (
  // eslint-disable-next-line react/jsx-no-leaked-render
  <ul className="bsds-nav" aria-describedby={group.title ? group.id : undefined}>
    {group.navItems.map((item) => (
      <li key={group.id + item.text} className="bsds-nav-item">
        <Link to={item.to} href={item.href} variant="nav">
          {item.text}
        </Link>
      </li>
    ))}
  </ul>
);

export default FooterNav;
