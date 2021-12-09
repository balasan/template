/** @jsxImportSource theme-ui */

import React from 'react';
import { Link, NavLink, LinkProps, NavLinkProps } from 'react-router-dom';
import { Themed } from 'theme-ui';

export const RouterLink = ({ children, ...props }: LinkProps): JSX.Element => (
  <Themed.a as={Link} {...props}>
    {children}
  </Themed.a>
);

export const RouterNavLink = ({
  children,
  ...props
}: NavLinkProps): JSX.Element => (
  <NavLink {...props} sx={{ variant: 'link.nav' }}>
    {children}
  </NavLink>
);
