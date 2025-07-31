import axios from "axios";
import { create } from "zustand";

const useProductStore = create((set) => ({
  // Get all Products
  productList: [],
  fetchProductList: async () => {
    try {
      const res = await axios.get("https://dummyjson.com/products");
      if (res.status === 200) {
        set({ productList: res.data.products });
      }
    } catch (error) {
      console.log("Something went wrong", error);
    }
  },

  // Get all categories
  categoryList: [],
  fetchCategoryList: async () => {
    try {
      const res = await axios.get("https://dummyjson.com/products/categories");
      if (res.status === 200) {
        set({ categoryList: res.data});
      }
    } catch (error) {
      console.log("Something went wrong", error);
    }
  }
}));

export default useProductStore;
