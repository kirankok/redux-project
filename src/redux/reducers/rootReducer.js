import { combineReducers } from 'redux';
import { randomQuoteReducer } from './randomQuoteReducer';

export const reducer = combineReducers({
  randomQuote: randomQuoteReducer
})

