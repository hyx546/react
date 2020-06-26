import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import Root from './router/Routes';

ReactDOM.render(
    <BrowserRouter>
      <Root></Root>
    </BrowserRouter>,
  document.getElementById('root')
);

