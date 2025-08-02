import axios from "axios";
import { create } from "zustand";

const useProductStore = create((set) => ({
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

export default useProductStore;
