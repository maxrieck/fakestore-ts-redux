import React from 'react'
import { useSelector } from 'react-redux';
import { type AppDispatch, type RootState } from '../store/store';
import { emptyCart, removeCartItem } from '../store/cartSlice';
import { useDispatch } from 'react-redux';


const ShoppingCart:React.FC = () => {

    const currentCart = useSelector((state: RootState) => state.cartItems.cartItems)
    const dispatch = useDispatch<AppDispatch>()


  return (
    <div>
        {currentCart.map((product, index: number) => (
            <div key={index}>
                <h4>{product.title}</h4>
                 <button onClick={() => dispatch(removeCartItem(product))}>X</button>
            </div>
        ))}

        <button onClick={() => dispatch(emptyCart())}>Empty Cart</button>

    </div>

  )
}

export default ShoppingCart;
