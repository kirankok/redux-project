import { GET_RANDOM_QUOTE, GET_RANDOM_QUOTE_FAILURE, GET_RANDOM_QUOTE_SUCCESS } from '../actions/constants';

const initialState = {
  isLoading: false,
  randomQuoteData: {},
  error: null
}

export const randomQuoteReducer = (state = initialState, action) => {

  switch (action.type) {

    case GET_RANDOM_QUOTE: {
      return { ...state, isLoading: true }
    }

    case GET_RANDOM_QUOTE_SUCCESS: {
      return { ...state, randomQuoteData: action.payload, isLoading: false }
    }

    case GET_RANDOM_QUOTE_FAILURE: {
      return { ...state, error: action.payload, isLoading: false }
    }

    default: return state;
  }
}