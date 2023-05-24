import { combineReducers } from '@reduxjs/toolkit';
import dummyReducer from '../dummyReducer';

export default combineReducers({
  dummy: dummyReducer,
});
