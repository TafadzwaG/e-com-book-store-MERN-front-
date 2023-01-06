import React from "react";
import {
  BrowserRouter,
  Route,
  Navigate,
  Routes,
  redirect,
} from "react-router-dom";
import Home from "./core/Home";

import Menu from "./core/Menu";
import Signin from "./user/Signin";
import Signup from "./user/Signup";
import Contact from "./contact/Contact";
import About from "./about/About";
import Shop from "./shop/Shop";
import ProductDetail from "./views/product/ProductDetail";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Notfound from "./views/NotFound";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/signin" exact element={<Signin />} />
        <Route path="/signup" exact element={<Signup />} />
        <Route path="/shop" exact element={<Shop />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/contact" exact element={<Contact />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
        <Route path="*" exact={true} element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
