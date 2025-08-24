import React from 'react'
import { useSelector } from 'react-redux';
import { type AppDispatch, type RootState } from '../store/store';
import { emptyCart } from '../store/cartSlice';
import { useDispatch } from 'react-redux';
import CartItems from '../components/CartItems';
import PageLayout from '../components/PageLayout';
import CartTotal from '../components/CartTotal';



const ShoppingCart: React.FC = () => {
  const currentCart = useSelector((state: RootState) => state.cartItems.cartItems);
  const dispatch = useDispatch<AppDispatch>();

  
  const safeCart = currentCart ?? [];

  return (
      <PageLayout>

        <CartItems cartItems={safeCart} />

        <CartTotal />

        <button className='button-theme'
          onClick={()=>dispatch(emptyCart())
          }>Empty Cart</button>

      </PageLayout>
  );
}

export default ShoppingCart;
