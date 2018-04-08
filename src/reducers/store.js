import { createStore, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';
import reducers from './reducers';
/* eslint-disable no-underscore-dangle */
export default createStore(
  reducers,
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk),
);
 /* eslint-enable */
