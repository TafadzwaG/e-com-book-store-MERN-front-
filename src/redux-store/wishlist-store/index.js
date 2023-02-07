import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishlistItems: [],
  error: "",
  wishlistQuantity: 0,
  success: false,
  isLoading: false,
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.wishlistItems.find(
        (item) => item._id == newItem._id
      );
      if (!existingItem) {
        state.wishlistItems.push({
          _id: newItem._id,
          productId: newItem.productId,
          price: newItem.price,
          name: newItem.name,
          imagePath: newItem.imagePath,
        });
      }
    },
    removeItemFromWishlist: (state, action) => {
      const id = action.payload;
      const existingItem = state.wishlistItems.find((item) => item._id === id);
      if (existingItem) {
        state.wishlistItems = state.wishlistItems.filter(
          (item) => item._id !== id
        );
      }
    },
    setWishlistFromAPI: (state, action) => {
      const wishlist = action.payload;
      state.wishlistItems = wishlist;
      state.wishlistQuantity = wishlist.length;
    },
    clearWishlist: (state, action) => {
      state.wishlistItems = [];
      (state.error = ""),
        (state.wishlistQuantity = 0),
        (state.success = false),
        (state.isLoading = false);
    },
  },
});

export const wishlistActions = wishlistSlice.actions;

export default wishlistSlice;
