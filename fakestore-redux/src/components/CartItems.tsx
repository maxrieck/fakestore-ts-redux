import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { removeCartItem, increaseQuantity, decreaseQuantity } from '../store/cartSlice';
import type { AppDispatch } from '../store/store';
import type { Product } from '../types/types';
import '../styles/shoppingCart.css'
import DeleteCartModal from './DeleteCartModal';


interface CartItemsProps {
  cartItems: Product[];
}

const CartItems: React.FC<CartItemsProps> = ({ cartItems }) => {

  const dispatch = useDispatch<AppDispatch>()

  const [showModal, setShowModal] = useState<boolean>(false)

  const handleModal = () => {
      setShowModal(true)
  }


  return (
    <>
      {showModal && <DeleteCartModal onClose={()=>setShowModal(false)}/>}
      {cartItems.map((product: Product, index: number) => (
        <div key={index} className='cart-item'>
          <img src={product.image} alt="" />
          <h4>{product.title}</h4>
          <div>
            <p>${product.price.toFixed(2)}</p>
            <div style={{display:'flex'}}>
              <button className='cart-button'
                onClick={() => dispatch(decreaseQuantity(product))}
              >-</button>
              <p>{product.quantity}</p>
              <button className='cart-button'
                onClick={() => dispatch(increaseQuantity(product))}
              >+</button>
            </div>
          </div>
          <button className='cart-button button-theme'
            onClick={() => {
              dispatch(removeCartItem(product));
              handleModal()
            }}
          >X</button>
        </div>
      ))}

    </>
  )
}

export default CartItems