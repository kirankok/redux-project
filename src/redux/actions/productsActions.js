import { GET_PRODUCTS, GET_PRODUCTS_FAILURE, GET_PRODUCTS_SUCCESS } from './constants';
import axios from 'axios';

export const getProducts = () => {
  return {
    type: GET_PRODUCTS
  }
}

export const getProductsSuccess = (data) => {
  return {
    type: GET_PRODUCTS_SUCCESS,
    payload: data
  }
}

export const getProductsFailure = (error) => {
  return {
    type: GET_PRODUCTS_FAILURE,
    payload: error
  }
}

export const getAllProducts = () => {
  return (dispatch) => {
    dispatch(getProducts())

    axios.get('https://fakestoreapi.com/products')
      .then(res => dispatch(getProductsSuccess(res.data)))
      .catch(err => dispatch(getProductsFailure(err)))
  }
} 