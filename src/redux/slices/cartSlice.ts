// src/redux/slices/cartSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type CartItem = {
  id: number;
  image: string;
  price: number;
  quantity: number;
  title: string;
}

type CartState = {
  items: CartItem[];
  totalAmount: number;
}

const initialState: CartState = {
  items: [],
  totalAmount: 0,
};

const cartSlice = createSlice({
  initialState,
  name: "cart",
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const item = action.payload;
      const existing = state.items.find((index) => index.id === item.id);

      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ ...item, quantity: 1 });
      }

      state.totalAmount += item.price;
    },

    clearCart: (state) => {
      state.items = [];
      state.totalAmount = 0;
    },

    removeFromCart: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      const item = state.items.find((index) => index.id === id);

      if (item) {
        state.totalAmount -= item.price * item.quantity;
        state.items = state.items.filter((index) => index.id !== id);
      }
    },
  },
});

export const { addToCart, clearCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;

export const getCartItems = (state: { cart: CartState }) => state.cart.items;
export const getTotalAmount = (state: { cart: CartState }) =>
  state.cart.totalAmount;
