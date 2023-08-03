import { create } from 'zustand';

const initialState = {
  cart: [],
  totalAmount: 0,
};

export const useCartStore = create((set) => ({
  ...initialState,

  addToCart: (product) => {
    set((state) => ({
      cart: [...state.cart, product],
    }));
  },

  removeFromCart: (productId) => {
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== productId),
    }));
  },

  clearCart: () => {
    set((state) => ({
      cart: [],
    }));
  },

  setTotalAmount: (amount) => {
    set(() => ({
      totalAmount: amount,
    }));
  },
}));