import { render } from 'react-dom';
import { App } from './App';
import React from 'react';
import './styles/styles.scss';
import { Styling } from './components/Styling';
import { HashRouter } from 'react-router-dom';

const rootElement = document.getElementById('root');
render(
  <Styling>
    <HashRouter>
      <App />
    </HashRouter>
  </Styling>,
  rootElement,
);
