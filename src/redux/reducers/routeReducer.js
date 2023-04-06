import MoviesReducer from './MoviesReducer';
import {combineReducers} from 'redux';
const reducers = {
  MoviesReducer,
};
const baseReducer = combineReducers(reducers);

export default baseReducer;
