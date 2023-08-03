import {create} from 'zustand';

const initialState = {
  cart: [],
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
}));