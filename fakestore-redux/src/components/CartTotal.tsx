import React from 'react'
import { useSelector } from 'react-redux';
import { type RootState } from '../store/store';


const CartTotal: React.FC = () => {

    type CartItem = {
        price: number;
        quantity: number;
    };

    const currentCart = useSelector((state: RootState) => state.cartItems.cartItems as CartItem[]);

    const priceTotal = currentCart
        .map((item: CartItem) => item.price * item.quantity)
        .reduce((a: number, b: number) => a + b, 0);

    return (
        <>
            <div>
                <h3>Total Price: ${priceTotal.toFixed(2)}</h3>
            </div>
        </>
    );
}

export default CartTotal;