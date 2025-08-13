import React from 'react'
import ProductList from './ProductList';
import ShoppingCart from './ShoppingCart';

const HomePage = () => {

  return (
    <div>
        <h1>Main Page</h1>
        <h2>Cart</h2>
        <ShoppingCart />

        <h2>Products</h2>
        <ProductList />
    </div>
  )
}

export default HomePage;