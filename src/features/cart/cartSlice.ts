/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
  // cart: [
  //   {
  //     pizzaId: 12,
  //     name: 'Pizza Margherita',
  //     quantity: 2,
  //     unitPrice: 16,
  //     totalPrice: 32,
  //   },
  // ],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // ADD ITEM TO CART
    addItem(state, action) {
      state.cart.push(action.payload);
    },

    // DELETE ITEM FROM CART
    deleteItem(state, action) {
      const deleteItemId = action.payload;
      state.cart = state.cart.filter((item) => item.pizzaId !== deleteItemId);
    },

    // INCREASE ITEM QUANTITY
    increateItemQuantity(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      if (item) {
        item.quantity++;
        item.totalPrice = item.quantity * item.unitPrice;
      }
    },

    // DECREASE ITEM QUANTITYd
    decreateItemQuantity(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      if (item) {
        item.quantity--;
        item.totalPrice = item.quantity * item.unitPrice;
      }
    },

    // CLEAR CART
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  increateItemQuantity,
  decreateItemQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

export const getCart = (state: any) => state.cart.cart;

export const getTotalCartQuantity = (state: any) =>
  state.cart.cart.reduce((acc: number, item: any) => acc + item.quantity, 0);

export const getTotalCartPrice = (state: any) =>
  state.cart.cart.reduce((sum: number, item: any) => sum + item.totalPrice, 0);
