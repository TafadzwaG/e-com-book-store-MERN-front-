import { combineReducers, configureStore } from "@reduxjs/toolkit";
import advertSlice from "./advert-store";
import authSlice from "./auth-store";
import categorySlice from "./categories-store";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { PersistGate } from "redux-persist/integration/react";
import productSlice from "./products-store";
import cartSlice from "./cart-store";

const persistConfig = {
  key: "root",
  storage,
  version: 1,
};

const rootReducer = combineReducers({
  advert: advertSlice.reducer,
  auth: authSlice.reducer,
  category: categorySlice.reducer,
  product: productSlice.reducer,
  cart: cartSlice.reducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export default store;
