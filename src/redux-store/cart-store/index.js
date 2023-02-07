import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  cartTotal: 0,
  cartQuantity: 0,
  error: "",
  success: false,
  DUMMY_ITEMS: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item._id === newItem._id
      );
      state.cartQuantity++;
      if (!existingItem) {
        state.cartItems.push({
          _id: newItem._id,
          productId: newItem._id,
          price: newItem.price,
          name: newItem.name,
          quantity: 1,
          totalPrice: newItem.price,
          imagePath: newItem.imagePath,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }

      state.cartTotal = state.cartItems.reduce(
        (total, item) => total + item.totalPrice,
        0
      );
    },

    removeFromCart: (state, action) => {
      const id = action.payload;
      const existingItem = state.cartItems.find((item) => item._id === id);
      state.cartQuantity--;
      if (existingItem.quantity === 1) {
        state.cartItems = state.cartItems.filter((item) => item._id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }

      state.cartTotal = state.cartItems.reduce(
        (total, item) => total + item.totalPrice,
        0
      );
    },

    setCartFromApi: (state, action) => {
      const cart = action.payload;
      state.cartTotal = cart.bill;
      state.cartQuantity = cart.products.length;
      state.cartItems = cart.products;
    },

    setCartFailed: (state, action) => {},

    clearCartState: (state, action) => {
      (state.cartItems = []),
        (state.cartTotal = 0),
        (state.cartQuantity = 0),
        (state.error = ""),
        (state.success = false),
        (state.DUMMY_ITEMS = []);
        localStorage.clear()
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
