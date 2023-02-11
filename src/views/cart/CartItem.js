import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  addToCart,
  removeItemFromCart,
  removeSelectedItemFromCart,
} from "../../redux-store/cart-store/cart-actions";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.auth.userId);
  const token = useSelector((state) => state.auth.token);

  const addItemHandler = (product) => {
    dispatch(
      addToCart(userId, product.productId, 1, token, {
        _id: product._id,
        name: product.name,
        price: product.price,
        imagePath: product.imagePath,
      })
    );
  };

  const removeItemHandler = (itemId) => {
    dispatch(removeItemFromCart(userId, item.productId, itemId, token));
  };

  const removeSelectedItemHandler = (itemId, productId) => {
    dispatch(removeSelectedItemFromCart(userId, productId, itemId, token));
  };
  return (
    <Fragment>
      <tr>
        <td className="product-remove">
          <a
            className="remove-wishlist"
            onClick={() => removeSelectedItemHandler(item._id, item.productId)}
          >
            <i className="fal fa-times"></i>
          </a>
        </td>
        <td className="product-thumbnail">
          <a href="single-product.html">
            <img
              src={`http://localhost:8000/assets/${item.imagePath}`}
              alt="Digital Product"
            />
          </a>
        </td>
        <td className="product-title">
          <Link to={`/products/${item._id}`}>{item.name}</Link>
        </td>
        <td className="product-price" data-title="Price">
          <span className="currency-symbol">R</span>
          {item.price}
        </td>
        <td className="product-quantity" data-title="Qty">
          <div className="pro-qty">
            <span
              class="dec qtybtn"
              onClick={() => removeItemHandler(item._id)}
            >
              -
            </span>
            <input
              type="number"
              className="quantity-input"
              value={item.quantity}
              readOnly
            />
            <span class="inc qtybtn" onClick={() => addItemHandler(item)}>
              +
            </span>
          </div>
        </td>
        <td className="product-subtotal" data-title="Subtotal">
          <span className="currency-symbol">R</span>
          {item.price * item.quantity}
        </td>
      </tr>
    </Fragment>
  );
};

export default CartItem;
