import { combineReducers } from 'redux';
import { todoReducer } from './todoReducer';

export const reducer = combineReducers({
  todos: todoReducer
})
