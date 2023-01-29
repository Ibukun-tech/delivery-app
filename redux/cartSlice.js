import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
    cash: false,
  },
  reducers: {
    on: (state) => {
      state.cash = true;
    },
    of: (state) => {
      state.cash = false;
    },
    addProduct: (state, action) => {
      state.products.push(action.payload);
      state.quantity += 1;
      state.total += action.payload.price * action.payload.quantity;
    },
    reset: (state) => {
      state.products = [];
      state.quantity = 0;
      state.total = 0;
    },
  },
});

export const { on, of, reset, addProduct } = cartSlice.actions;
export const quantity = (state) => state.cart.quantity;
export const cash = (state) => state.cart.cash;
export default cartSlice.reducer;
