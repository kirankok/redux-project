import { GET_PRODUCTS, GET_PRODUCTS_FAILURE, GET_PRODUCTS_SUCCESS } from '../actions/constants';

const initialState = {
  isLoading: false,
  productsData: [],
  error: null,
}

export function productsReducer(state = initialState, action) {

  switch (action.type) {
    case GET_PRODUCTS: {
      return { ...state, isLoading: true }
    }
    case GET_PRODUCTS_SUCCESS: {
      return { ...state, productsData: action.payload, isLoading: false }
    }
    case GET_PRODUCTS_FAILURE: {
      return { ...state, error: action.payload, isLoading: false }
    }
    default: return state;
  }
}