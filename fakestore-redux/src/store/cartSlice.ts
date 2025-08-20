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
            quantity?: number,
        }>) => {
            state.cartItems.push(action.payload)
        },

        removeCartItem: (state, action: PayloadAction<{
            id:number
        }>) => {
           state.cartItems = state.cartItems
           .filter(product => product.id !== action.payload.id )
        },

        emptyCart: (state) => {
            state.cartItems = []
        },

        increaseQuantity: (state, action: PayloadAction<{
            id:number
         }>) => {
          const itemId = action.payload.id;
          const itemToUpdate = state.cartItems.find(item => item.id === itemId);
          if (itemToUpdate) {
            itemToUpdate.quantity = (itemToUpdate.quantity ?? 0) + 1;
          }
        },

        decreaseQuantity: (state, action: PayloadAction<{
            id:number
         }>) => {
          const itemId = action.payload.id;
          const itemToUpdate = state.cartItems.find(item => item.id === itemId);
          if (itemToUpdate && typeof itemToUpdate.quantity === "number" && itemToUpdate.quantity > 1) {
            itemToUpdate.quantity -= 1;
          } else if (itemToUpdate && itemToUpdate.quantity === 1) {
            state.cartItems = state.cartItems.filter(product => product.id !== action.payload.id);
          }
        },

}})


export const { 
    addCartItem, 
    removeCartItem, 
    emptyCart, 
    increaseQuantity, 
    decreaseQuantity 
} = cartSlice.actions;

export default cartSlice.reducer;