import React from 'react'
import { useDispatch } from 'react-redux';
import { removeCartItem } from '../store/cartSlice';
import type { AppDispatch } from '../store/store';
import type { Product } from '../types/types'; 
import '../styles/shoppingCart.css'


interface CartItemsProps {
  cartItems: Product[];
}

const CartItems:React.FC<CartItemsProps> = ({ cartItems }) => {

    const dispatch = useDispatch<AppDispatch>()

  return (
    <>
        {cartItems.map((product: Product, index: number) => (
                    <div key={index} className='cart-item'>
                        <img src={product.image} alt="" />
                        <h4>{product.title}</h4>
                        <p>${product.price}</p>
                         <button onClick={() => dispatch(removeCartItem(product))}>X</button>
                    </div>
                ))}

    </>
  )
}

export default CartItems