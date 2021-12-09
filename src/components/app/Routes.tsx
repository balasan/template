import React from 'react';
import { Container } from '@components';
import { Switch, Route } from 'react-router-dom';
import { Home } from '../../pages';
import Page from '../../pages/Page.mdx';

export const Routes = (): JSX.Element => (
  <Container sx={{ py: 4 }}>
    <Switch>
      <Route path="/page">
        <Page />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </Container>
);
