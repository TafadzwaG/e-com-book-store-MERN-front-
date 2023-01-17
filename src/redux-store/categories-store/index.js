import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
  isLoading: false,
  error: "",
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setCategories: (state, action) => {
      state.categories = action.payload.categories;
      state.isLoading = false
      state.error = ""
    },

    fetchCategories: (state, action) => {
        state.isLoading = true
        state.error = ""
    },

    failedFetch: (state, action) => {
        state.isLoading = false
        state.error = action.payload.error,
        state.categories = []
    }
  },
});


export const categoryActions = categorySlice.actions


export default categorySlice;

