import { combineReducers } from 'redux';
import { productReducer } from './productsReducer';

export const reducer = combineReducers({
  products: productReducer
})

