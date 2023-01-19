import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const CartItem = ({ item }) => {
  return (
    <Fragment>
      <tr>
        <td className="product-remove">
          <a href="#" className="remove-wishlist">
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
          <Link href="single-product.html">{item.name}</Link>
        </td>
        <td className="product-price" data-title="Price">
          <span className="currency-symbol">R</span>{item.price}
        </td>
        <td className="product-quantity" data-title="Qty">
          <div className="pro-qty">
            <input type="number" className="quantity-input" value={item.quantity} />
          </div>
        </td>
        <td className="product-subtotal" data-title="Subtotal">
          <span className="currency-symbol">R</span>{item.price * item.quantity}
        </td>
      </tr>
    </Fragment>
  );
};

export default CartItem;
