import axios from "axios";
import { create } from "zustand";

export const useProductStore = create((set) => ({
  // Get all Products
  productList: [],
  fetchProductList: async () => {
    try {
      const res = await axios.get("https://dummyjson.com/products");
      set((state) => {
        const newData = res.data.products;
        const existingData = state.productList;

        const isSameData =
          existingData.length === newData.length &&
          existingData.every((item, i) => item._id === newData[i]._id);

        if (!isSameData) {
          return { productList: newData };
        }

        return state; // don't update
      });
    } catch (error) {
      console.log("Something went wrong", error);
    }
  },

}));

export const useCart = create((set) => ({
  cart: [],
  addCart: (product) => set((state) => ({cart: [...state.cart, product]})),
  removeCart: (productId) => set((state) => ({cart: state.cart.filter(product => product.id !== productId)})),
  clearCart: () => set({cart: []}),
}))
