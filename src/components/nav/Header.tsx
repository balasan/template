import React, { Fragment } from 'react';
import { RouterNavLink } from './Link';
import { Box, Row, Container, Divider } from '../core';

export const Header = (): JSX.Element => (
  <Fragment>
    <Container sx={{ py: 2 }}>
      <Row sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
        <Row>
          <RouterNavLink exact to="/">
            Home
          </RouterNavLink>
          <Box sx={{ mr: 3 }} />
          <RouterNavLink to="/page">Page</RouterNavLink>
        </Row>
      </Row>
    </Container>
    <Divider m={0} />
  </Fragment>
);
