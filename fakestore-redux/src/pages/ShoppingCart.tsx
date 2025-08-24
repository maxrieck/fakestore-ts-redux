import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { type AppDispatch, type RootState } from '../store/store';
import { emptyCart } from '../store/cartSlice';
import { useDispatch } from 'react-redux';
import CartItems from '../components/CartItems';
import PageLayout from '../components/PageLayout';
import CartTotal from '../components/CartTotal';
import CheckoutModal from '../components/CheckoutModal';



const ShoppingCart: React.FC = () => {

  const currentCart = useSelector((state: RootState) => state.cartItems.cartItems);

  const dispatch = useDispatch<AppDispatch>();

  const [showModal, setShowModal] = useState<boolean>(false);

  const handleModal = () => {
    setShowModal(true)
  }
  
  const safeCart = currentCart ?? [];

  return (
      <PageLayout>

        {showModal && <CheckoutModal onClose={()=>setShowModal(false)} />}

        <CartItems cartItems={safeCart} />

        <CartTotal />

        <button className='button-theme'
          onClick={() => {
            dispatch(emptyCart())
            handleModal()
          }}>Checkout</button>

      </PageLayout>
  );
}

export default ShoppingCart;
