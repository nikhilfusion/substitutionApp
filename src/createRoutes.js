import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './containers/App';
import * as containers from './containers';
import Homepage from './containers/Homepage/Homepage';
import Cart from './containers/Cart/Cart';
import ComparePage from './containers/ComparePage/ComparePage';
import Partners from './containers/Partners/Partners';
import OrderSuccess from './containers/OrderSuccess/OrderSuccess';

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
    <IndexRoute component={Homepage} />
    <Route path="/" component={Homepage} />
    <Route path="/:pincode" component={Homepage} />
    <Route path="/compare/:primaryMedicineId" component={ComparePage} />
    <Route path="/cart" component={Cart} />
    <Route path="/partners" component={Partners} />
    <Route path="/confirm" component={OrderSuccess} />
    <Route path="/test-counter" component={CounterPage} />
    <Route path="*" component={NotFoundPage} />
  </Route>
);

export default createRoutes;
