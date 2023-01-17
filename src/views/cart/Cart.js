import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Layout from "../../core/Layout";
import CartItem from "./CartItem";
import OrderSummary from "./components/OrderSummary";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <Layout>
      <Fragment>
        <div className="axil-product-cart-area axil-section-gap">
          <div className="container">
            <div className="axil-product-cart-wrap">
              <div className="product-table-heading">
                <h4 className="title">Your Cart</h4>
                <a className="cart-clear" style={{ cursor: "pointer" }}>
                  Clear Shoping Cart
                </a>
              </div>
              <div className="table-responsive">
                <table className="table axil-product-table axil-cart-table mb--40">
                  <thead>
                    <tr>
                      <th scope="col" className="product-remove"></th>
                      <th scope="col" className="product-thumbnail">
                        Product
                      </th>
                      <th scope="col" className="product-title"></th>
                      <th scope="col" className="product-price">
                        Price
                      </th>
                      <th scope="col" className="product-quantity">
                        Quantity
                      </th>
                      <th scope="col" className="product-subtotal">
                        Subtotal
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems &&
                      cartItems.map((item) => (
                        <CartItem key={item._id} item={item} />
                      ))}
                  </tbody>
                </table>
              </div>
              <div className="cart-update-btn-area">
                <div className="input-group product-cupon">
                  <input placeholder="Enter coupon code" type="text" />
                  <div className="product-cupon-btn">
                    <button type="submit" className="axil-btn btn-outline">
                      Apply
                    </button>
                  </div>
                </div>
                <div className="update-btn">
                  <Link to="/shop" className="axil-btn btn-outline">
                    Update Cart
                  </Link>
                </div>
              </div>
              <div className="row">
                <OrderSummary />
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    </Layout>
  );
};

export default Cart;
