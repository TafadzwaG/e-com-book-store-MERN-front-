import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AppRoutes from "./Routes";

import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import store from "./redux-store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistStore(store)}></PersistGate>
    <AppRoutes />
  </Provider>
);

//The strict mode makes components rander twice
// <React.StrictMode>
//   <Provider store={store}>
//   <PersistGate loading={null} persistor={persistStore(store)}></PersistGate>
//   <AppRoutes />
// </Provider>
// </React.StrictMode>
