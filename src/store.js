import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { jobReducer } from './reducers/jobReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  jobReducer,
  composeEnhancers(applyMiddleware(thunk))
);
