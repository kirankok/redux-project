import { combineReducers } from 'redux';
import { randomQuoteReducer } from './randomQuoteReducer';
import { userDetailsReducer } from './userDetailsReducer';

export const reducer = combineReducers({
  randomQuote: randomQuoteReducer,
  userDetails: userDetailsReducer
})

