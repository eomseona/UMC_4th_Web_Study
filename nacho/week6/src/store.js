import { legacy_createStore as createStore, applyMiddleware } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

let store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;