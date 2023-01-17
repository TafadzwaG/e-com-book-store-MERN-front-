import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  adverts: [],
  isLoading: false,
  error: "",
};

const advertSlice = createSlice({
  name: "advert",
  initialState,
  reducers: {
    setAdverts: (state, action) => {
      state.adverts = action.payload.adverts;
    },
  },
});


export const advertActions = advertSlice.actions


export default advertSlice;

