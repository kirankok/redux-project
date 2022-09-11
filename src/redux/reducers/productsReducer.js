import { GET_PRODUCTS, GET_PRODUCTS_FAILURE, GET_PRODUCTS_SUCCESS } from '../actions/constants';

const initialState = {
  isLoading: false,
  productData: [],
  error: null
}

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS: {
      return { ...state, isLoading: true }
    }

    case GET_PRODUCTS_SUCCESS: {
      return { ...state, productData: action.payload, isLoading: false }
    }

    case GET_PRODUCTS_FAILURE: {
      return { ...state, error: action.payload, isLoading: false }
    }

    default: return state
  }
}
