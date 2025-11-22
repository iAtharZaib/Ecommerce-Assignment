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
      const existing = state.items.find(i => i.id === item.id);

      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ ...item, quantity: 1 });
      }

      state.totalAmount += item.price;
    },

    decrementFromCart: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      const existing = state.items.find(i => i.id === id);

      if (existing) {
        if (existing.quantity > 1) {
          existing.quantity -= 1;
          state.totalAmount -= existing.price;
        } else {
          // Remove completely if quantity is 1
          state.totalAmount -= existing.price;
          state.items = state.items.filter(i => i.id !== id);
        }
      }
    },

    clearCart: (state) => {
      state.items = [];
      state.totalAmount = 0;
    },
  },
});

export const { addToCart, clearCart, decrementFromCart } = cartSlice.actions;
export default cartSlice.reducer;

export const getCartItems = (state: { cart: CartState }) => state.cart.items;
export const getTotalAmount = (state: { cart: CartState }) =>
  state.cart.totalAmount;
