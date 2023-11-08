// TODO: ADS-383 pass down NavLink props e.g. "end"

import { ForwardedRef, forwardRef, useState, useEffect } from 'react';
import { NavLink, Link as RouterLink } from 'react-router-dom';
import { LinkProps } from './Link.types';

const Link = forwardRef(
  (
    { variant, href, to, isNavLink, isCurrentPage, className, children, target, rel, ...linkAttrs }: LinkProps,
    ref: ForwardedRef<HTMLAnchorElement>
  ): JSX.Element => {
    let baseClass = 'bsds-link';

    if (variant) {
      /** CTA variants are styled to look like a button */
      const isCtaVariant = variant.startsWith('cta');
      baseClass += isCtaVariant ? `-cta ${baseClass}-${variant}` : `-${variant}`;
    }

    if (isCurrentPage) {
      baseClass += ' is-active';
    }

    const [relAttr, setRelAttr] = useState(rel);

    useEffect(() => {
      if (target === '_blank') {
        setRelAttr('noreferrer');
      }
    }, [target]);

    useEffect(() => {
      if (href === '#') {
        console.warn('Do not use invalid href attribute values.');
      }
    }, [href]);

    if (to) {
      if (isNavLink) {
        return (
          <NavLink
            ref={ref}
            to={to}
            className={({ isActive }) =>
              `${baseClass} ${className}` +
              (isActive && isCurrentPage === undefined && isCurrentPage !== false ? ' is-active' : '')
            }
            target={target}
            rel={relAttr}
            {...linkAttrs}
          >
            {children}
          </NavLink>
        );
      } else {
        return (
          <RouterLink
            ref={ref}
            to={to}
            className={`${baseClass} ${className}`}
            target={target}
            rel={relAttr}
            {...linkAttrs}
          >
            {children}
          </RouterLink>
        );
      }
    } else {
      return (
        // eslint-disable-next-line react/jsx-no-target-blank
        <a
          ref={ref}
          href={href}
          className={`${baseClass} ${className || ''}`}
          target={target}
          rel={relAttr}
          {...linkAttrs}
        >
          {children}
        </a>
      );
    }
  }
);

Link.displayName = 'Link';
export default Link;
