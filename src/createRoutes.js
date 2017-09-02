import React from 'react';
import { Route } from 'react-router';

import App from './containers/App';
import * as containers from './containers';
import Homepage from './containers/Homepage/Homepage';


const {
  CounterPage,
  NotFoundPage,
} = containers;

/**
 *  /
 *  /another
 **/
const createRoutes = store => ( // eslint-disable-line no-unused-vars
  <Route component={App}>
    <Route path="/" component={Homepage} />
    <Route path="/test-counter" component={CounterPage} />
    <Route path="*" component={NotFoundPage} />
  </Route>
);

export default createRoutes;
