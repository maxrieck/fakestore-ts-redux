import React from 'react'
import { useSelector } from 'react-redux';
import { type RootState } from '../store/store';


const ShoppingCart:React.FC = () => {

    const currentCart = useSelector((state: RootState) => state.cartItems.cartItems)


  return (
    <div>
        {currentCart.map((product, index: number) => (
            <div key={index}>
                <h4>{product.title}</h4>
            </div>
        ))}

    </div>

  )
}

export default ShoppingCart;
