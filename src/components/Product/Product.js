import React from 'react';
import './product.css';
import { Link } from 'react-router-dom'

const Product = ({ image, title, category, price, id }) => {
  return (
    <Link to={`/products/${id}`} >
      <div className='product-container'>
        <img src={image} height='300' width='300' />
        <div>
          <p className='product-title' title={title}>{title}</p>
          <p>{category}</p>
          <p className='product-price'>Rs: {price}</p>
        </div>
      </div>
    </Link >
  )
}

export default Product;