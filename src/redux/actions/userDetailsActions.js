import axios from 'axios';
import { GET_RANDOM_USER_DETAILS, GET_RANDOM_USER_DETAILS_FAILURE, GET_RANDOM_USER_DETAILS_SUCCESS } from './constants';

const getUserDetails = () => {
  return {
    type: GET_RANDOM_USER_DETAILS
  }
}

const getUserDetailsSuccess = (data) => {
  return {
    type: GET_RANDOM_USER_DETAILS_SUCCESS,
    payload: data
  }
}

const getUserDetailsFailure = (error) => {
  return {
    type: GET_RANDOM_USER_DETAILS_FAILURE,
    payload: error
  }
}

export const fetchUserDetails = (url) => {
  return (dispatch) => {
    dispatch(getUserDetails())
    axios.get(url)
      .then(res => dispatch(getUserDetailsSuccess(res.data)))
      .catch(err => dispatch(getUserDetailsFailure(err)))
  }
}