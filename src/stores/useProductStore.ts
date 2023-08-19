import { Product } from "@/types";
import { create } from "zustand";

type State = {
  products: Product[];
  isLoading: boolean;
  error: any;
};

type Actions = {
  fetchData: () => Promise<void>;
};

const INITIAL_STATE: State = {
  products: [],
  isLoading: false,
  error: null,
};

// hanya ada argument set, ga ada get, karena ga ada case get state dari store ini
export const useProductsStore = create<State & Actions>((set) => ({
  products: INITIAL_STATE.products,
  isLoading: INITIAL_STATE.isLoading,
  error: INITIAL_STATE.error,

  fetchData: async () => {
    try {
      set({ isLoading: true, error: null });
      const resp = await fetch("https://dummyjson.com/products");
      const data = await resp.json();
      set({ products: data.products, isLoading: false });
    } catch (error) {
      set({ isLoading: false, error });
    }
  },
}));
