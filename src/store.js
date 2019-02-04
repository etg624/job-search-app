import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { jobReducer } from './reducers/jobReducer';

export default createStore(jobReducer, applyMiddleware(thunk));
