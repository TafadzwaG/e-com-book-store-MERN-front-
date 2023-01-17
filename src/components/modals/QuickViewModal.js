import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const QuickViewModal = () => {
  const onChangeHandler = () => {};

  const cartItems = useSelector((state) => state.cart.cartItems);

  const cartTotal = useSelector((state) => state.cart.cartTotal);
  return (
    <Fragment>
      <div className="cart-dropdown" id="cart-dropdown">
        <div className="cart-content-wrap">
          <div className="cart-header">
            <h2 className="header-title">Cart review</h2>
            <button className="cart-close sidebar-close">
              <i className="fas fa-times"></i>
            </button>
          </div>
          <div className="cart-body">
            <ul className="cart-item-list">
              {cartItems &&
                cartItems.map((item) => (
                  <li className="cart-item" key={item._id}>
                    <div className="item-img">
                      <Link to={`/products/${item._id}`}>
                        <img
                          src={`http://localhost:8000/assets/${item.imagePath}`}
                          alt="Commodo Blown Lamp"
                        />
                      </Link>
                      <button className="close-btn">
                        <i className="fas fa-times"></i>
                      </button>
                    </div>
                    <div className="item-content">
                      <div className="product-rating">
                        <span className="icon">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                        </span>
                        <span className="rating-number">(64)</span>
                      </div>
                      <h3 className="item-title">
                        <a href="single-product-3.html">{item.name}</a>
                      </h3>
                      <div className="item-price">
                        <span className="currency-symbol">R</span>
                        {item.price}
                      </div>
                      <div className="pro-qty item-quantity">
                        <input
                          type="number"
                          className="quantity-input"
                          value={item.quantity}
                          onChange={onChangeHandler}
                        />
                      </div>
                    </div>
                  </li>
                ))}
            </ul>
          </div>
          <div className="cart-footer">
            <h3 className="cart-subtotal">
              <span className="subtotal-title">Subtotal:</span>
              <span className="subtotal-amount">R{cartTotal.toFixed(2)}</span>
            </h3>
            <div className="group-btn">
              <Link
                to="/cart"
                className="axil-btn btn-bg-primary viewcart-btn cart-close sidebar-close"
              >
                View Cart
              </Link>
              <Link
                to="/checkout"
                className="axil-btn btn-bg-secondary checkout-btn cart-close sidebar-close"
              >
                Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default QuickViewModal;
