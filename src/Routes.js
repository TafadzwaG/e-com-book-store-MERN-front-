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
import WishList from "./views/wishlist/Wishlist";
import Cart from "./views/cart/Cart";
import ScrollToTop from "./hooks/ScrollToTop";
import ResetPassword from "./user/ResetPassword";
import ForgotPassword from "./user/ForgetPassword";
import Checkout from "./views/checkout/Checkout";
import Account from "./views/account/Account";
import Dashboard from "./views/dashboard/Dashboard";
import { useSelector } from "react-redux";

const AppRoutes = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuth);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/signin" exact element={<Signin />} />
        <Route path="/signup" exact element={<Signup />} />
        <Route path="/shop" exact element={<Shop />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/contact" exact element={<Contact />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/account" element={<Account />} />
        <Route
          path="/dashboard"
          element={isAuthenticated ? <Dashboard /> : <Navigate to="/signin" />}
        />
        <Route path="*" exact={true} element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
