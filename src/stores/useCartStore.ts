import { Product } from "@/types";
import { create } from "zustand";

type State = {
  cart: Product[];
  totalItems: number;
  totalPrice: number;
};

type Actions = {
  addToCart: (Item: Product) => void;
  removeFromCart: (Item: Product) => void;
};

const INITIAL_STATE: State = {
  cart: [],
  totalItems: 0,
  totalPrice: 0,
};

export const useCartStore = create<State & Actions>((set, get) => ({
  cart: INITIAL_STATE.cart,
  totalItems: INITIAL_STATE.totalItems,
  totalPrice: INITIAL_STATE.totalPrice,

  addToCart: (product: Product) => {
    const cart = get().cart; // get cart dari state
    const cartItemExist = cart.find((item) => item.id === product.id); // cari id-nya buat cek apakah sudah ada di cart atau belum

    if (cartItemExist) {
      const updatedCart = cart.map((item) =>
        item.id == product.id
          ? { ...item, quantity: (item.quantity as number) + 1 }
          : item
      );
      set((state) => ({
        cart: updatedCart,
        totalItems: state.totalItems + 1,
        totalPrice: state.totalPrice + product.price,
      }));
    } else {
      const updatedCart_ = [...cart, { ...product, quantity: 1 }];
      set((state) => ({
        cart: updatedCart_,
        totalItems: state.totalItems + 1,
        totalPrice: state.totalPrice + product.price,
      }));
    }
  },

  removeFromCart(product: Product) {
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== product.id), // filter cart dengan exclude product yg mau di-remove
      totalItems: state.totalItems - 1,
      totalPrice: state.totalPrice - product.price,
    }));
  },
}));
