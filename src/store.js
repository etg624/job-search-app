import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { reducer as fromReducer } from 'redux-form';
import { jobReducer } from './reducers/jobReducer';
import { loadAuthToken } from './local-storage';
import authReducer from './reducers/auth-reducers/auth';
import protectedDataReducer from './reducers/auth-reducers/protected-data';
import { setAuthToken, refreshAuthToken } from './actions/auth-actions/auth';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    jobs: jobReducer,
    form: fromReducer,
    auth: authReducer,
    protectedData: protectedDataReducer
  }),
  composeEnhancers(applyMiddleware(thunk))
);

const authToken = loadAuthToken();
if (authToken) {
  const token = authToken;
  store.dispatch(setAuthToken(token));
  store.dispatch(refreshAuthToken());
}

export default store;
