import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllProducts } from '../../redux/actions/productsActions';
import Product from '../Product/Product';

const Dashboard = () => {

  const data = useSelector(state => state.products);

  const { isLoading, productsData, error } = data;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts())
  }, [])

  return (
    <div>
      {isLoading ? <h1>Loading...............</h1> :
        productsData?.map((product, index) => {
          return (
            <Product {...product} key={index} />
          )
        })
      }
    </div>
  )
};

export default Dashboard;