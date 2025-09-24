import axios from "axios";
import { create } from "zustand";

export const useProductStore = create((set) => ({
  // Get all Products
  productList: [],
  fetchProductList: async () => {
    try {
      const res = await axios.get("../../public/data/products/products.json");
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

export const useCategoryStore = create((set) => ({
  categoryList: [],
  fetchCategoryList: async () => {
    try {
      const res = await axios.get("../../public/data/categories/categories.json");
      const data = res.data;
      set({ categoryList: data.categories });
    } catch (error) {
      console.log(error);
    }
  },
}));

export const useCart = create((set) => ({
  cart: JSON.parse(localStorage.getItem("cart")) || [],

  // Add to cart
  addCart: (product) =>
    set((state) => {
      const existProduct = state.cart.find((item) => item.id === product.id);

      let updateCart;
      if (existProduct) {
        updateCart = state.cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        updateCart = [...state.cart, {
          id: product.id,
          quantity: 1,
          title: product.title,
          thumbnail: product.thumbnail,
          price: product.price,
        }];
      }

      localStorage.setItem("cart", JSON.stringify(updateCart));
      return { cart: updateCart };
    }),
  increaseCart: (productId) =>
    set((state) => {
      let updateCart = state.cart.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      );
      localStorage.setItem("cart", JSON.stringify(updateCart));
      return { cart: updateCart };
    }),
  decreaseCart: (productId) =>
    set((state) => {
      let updateCart = state.cart.map((item) =>
        item.id === productId
          ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
          : item
      );
      localStorage.setItem("cart", JSON.stringify(updateCart));
      return { cart: updateCart };
    }),
  // Remove From Cart
  removeCart: (productId) =>
    set((state) => {
      const updateCart = state.cart.filter(
        (product) => product.id !== productId
      );
      localStorage.setItem("cart", JSON.stringify(updateCart));
      return { cart: updateCart };
    }),

  // Clear Cart
  clearCart: () =>
    set(() => {
      localStorage.removeItem("cart");
      return { cart: [] };
    }),
}));
