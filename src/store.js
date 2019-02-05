import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { reducer as fromReducer } from 'redux-form';
import { jobReducer } from './reducers/jobReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  combineReducers({
    job: jobReducer,
    form: fromReducer
  }),
  composeEnhancers(applyMiddleware(thunk))
);
