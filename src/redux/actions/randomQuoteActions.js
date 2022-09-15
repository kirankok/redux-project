import axios from 'axios';
import { GET_RANDOM_QUOTE, GET_RANDOM_QUOTE_FAILURE, GET_RANDOM_QUOTE_SUCCESS } from './constants';

const getRandomQuote = () => {
  return {
    type: GET_RANDOM_QUOTE
  }
}

const getRandomQuoteSuccess = (data) => {
  return {
    type: GET_RANDOM_QUOTE_SUCCESS,
    payload: data
  }
}

const getRandomQuoteFailure = (error) => {
  return {
    type: GET_RANDOM_QUOTE_FAILURE,
    payload: error
  }
}

export const fetchRandomQuote = () => {
  return (dispatch) => {
    dispatch(getRandomQuote())
    axios.get('https://api.quotable.io/random')
      .then(res => dispatch(getRandomQuoteSuccess(res.data)))
      .catch(err => dispatch(getRandomQuoteFailure(err)))
  }
}