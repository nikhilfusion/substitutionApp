import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import counter from './counter';
import medicineList from './medicines'

const rootReducer = combineReducers({
  counter,
  routing,
  medicineList
});


export default rootReducer;
