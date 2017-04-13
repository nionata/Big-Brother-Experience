import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router'
import App from './assets/components/app.js';
import About from './assets/components/about.js'
import NotFound from './assets/components/about.js'
import './index.css';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App} />
    <Route path="/about" component={About} />
    <Route path="*" component={NotFound} />
  </Router>,
  document.getElementById('root')
)
