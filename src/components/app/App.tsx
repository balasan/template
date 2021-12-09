import React from 'react';

import { ThemeProvider } from 'theme-ui';
import { Header } from '@components';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from './Routes';

import { theme } from '../../styles';

export const App = (): JSX.Element => (
  <ThemeProvider
    // @ts-ignore
    theme={theme}
  >
    <Router>
      <Header />
      <Routes />
    </Router>
  </ThemeProvider>
);
