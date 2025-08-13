import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { CartState } from "../types/types";

const initialState: CartState = {
    cartItems: []
}

const cartSlice = createSlice({
    name: 'cartReducer',
    initialState,
    reducers: {
        addCartItem: (state, action: PayloadAction<{
            id: number,
            title: string,
            price: number,
            description: string,
            category: string,
            image: string,
            quanity?: number,
        }>) => {
            state.cartItems.push(action.payload)
        },

        // removeCartItem:

        // emptyCart:

    }
})


export const { addCartItem } = cartSlice.actions;

export default cartSlice.reducer;