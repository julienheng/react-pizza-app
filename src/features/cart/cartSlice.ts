/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
};

interface State {
  cart: {
    pizzaId: number;
    quantity: number;
    unitPrice: number;
    totalPrice: number;
  }[];
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // ADD ITEM TO CART
    addItem(state: State, action) {
      state.cart.push(action.payload);
    },

    // DELETE ITEM FROM CART
    deleteItem(state: State, action) {
      const deleteItemId = action.payload;
      state.cart = state.cart.filter((item) => item.pizzaId !== deleteItemId);
    },

    // INCREASE ITEM QUANTITY
    increaseItemQuantity(state: State, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      if (item) {
        item.quantity++;
        item.totalPrice = item.quantity * item.unitPrice;
      }
    },

    // DECREASE ITEM QUANTITYd
    decreaseItemQuantity(state: State, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      if (item) {
        item.quantity--;
        item.totalPrice = item.quantity * item.unitPrice;
      }
      if (item?.quantity === 0) cartSlice.caseReducers.deleteItem(state, action);
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
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

export const getCart = (state: any) => state.cart.cart;

export const getTotalCartQuantity = (state: any) =>
  state.cart.cart.reduce((acc: number, item: any) => acc + item.quantity, 0);

// export const getCurrentQuantityById = (state: any, id: number) => {
//   const item = state.cart.cart.find((item: any) => item.pizzaId === id);
//   return item ? item.quantity : 0;
// }

export const getCurrentQuantityById = (id: number) => (state: any) => {
  const item = state.cart.cart.find((item: any) => item.pizzaId === id);
  return item ? item.quantity : 0;
};

export const getTotalCartPrice = (state: any) =>
  state.cart.cart.reduce((sum: number, item: any) => sum + item.totalPrice, 0);
