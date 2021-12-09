import React from 'react';
import ReactDOM from 'react-dom';
import { App } from '@components/app';

function render() {
  const root = document.getElementById('root');
  ReactDOM.render(<App />, root);
}
render();
