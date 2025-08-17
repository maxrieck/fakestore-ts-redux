import React from 'react'
import { useSelector } from 'react-redux';
import { type AppDispatch, type RootState } from '../store/store';
import { emptyCart } from '../store/cartSlice';
import { useDispatch } from 'react-redux';
import CartItems from '../components/CartItems';



const ShoppingCart: React.FC = () => {
  const currentCart = useSelector((state: RootState) => state.cartItems.cartItems);
  const dispatch = useDispatch<AppDispatch>();

  
  const safeCart = currentCart ?? [];

  return (
      <>
        <CartItems cartItems={safeCart} />
        <button onClick={()=>dispatch(emptyCart())}>Empty Cart</button>
      </>
  );
}

export default ShoppingCart;
