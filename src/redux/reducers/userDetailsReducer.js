import { GET_RANDOM_USER_DETAILS, GET_RANDOM_USER_DETAILS_FAILURE, GET_RANDOM_USER_DETAILS_SUCCESS } from '../actions/constants';

const initialState = {
  isLoading: false,
  userDetailsData: [],
  error: null
}

export const userDetailsReducer = (state = initialState, action) => {

  switch (action.type) {

    case GET_RANDOM_USER_DETAILS: {
      return { ...state, isLoading: true }
    }

    case GET_RANDOM_USER_DETAILS_SUCCESS: {
      return { ...state, userDetailsData: action.payload, isLoading: false }
    }

    case GET_RANDOM_USER_DETAILS_FAILURE: {
      return { ...state, error: action.payload, isLoading: false }
    }

    default: return state;
  }
}