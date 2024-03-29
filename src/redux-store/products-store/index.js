import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  isLoading: false,
  error: "",
  bestSellers: [],
  newArrivals: [],
  randomProducts: [],
  isCommented: false,
  openModal: true,
  quickViewProduct: {},
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload.products;
      state.isLoading = false;
      state.error = "";
    },

    fetchProducts: (state, action) => {
      state.isLoading = true;
      state.error = "";
    },

    failedFetchProducts: (state, action) => {
      state.isLoading = false;
      (state.error = action.payload.error), (state.products = []);
    },

    setNewArrivals: (state, action) => {
      state.newArrivals = action.payload.newArrivals;
      state.isLoading = false;
      state.error = "";
    },

    setBestSellers: (state, action) => {
      state.bestSellers = action.payload.bestSellers;
      state.isLoading = false;
      state.error = "";
    },

    setRandomProducts: (state, action) => {
      state.randomProducts = action.payload.randomProducts;
      state.isLoading = false;
      state.error = "";
    },

    setIsComented: (state, action) => {
      state.isCommented = action.payload;
    },

    toggleOpenModal: (state, action) => {
      state.openModal = !state.openModal;
    },

    setQuickViewProduct: (state, action) => {
      state.quickViewProduct = action.payload;
    },
  },
});

export const productActions = productSlice.actions;

export default productSlice;
