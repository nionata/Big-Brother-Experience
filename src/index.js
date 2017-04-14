import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Router, Route } from 'react-router';
import App from './assets/components/app.js';
import About from './assets/components/about.js';
import NotFound from './assets/components/404.js';
import Footer from './assets/components/footer.js';
import './index.css';

import createBrowserHistory from 'history/createBrowserHistory'

const newHistory = createBrowserHistory();

//<Route path="/" component={Footer} />

ReactDOM.render(
  <Router history={newHistory}>
    <div>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/about" component={About} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>,
  document.getElementById('root')
)
