import React, { Fragment } from "react";
import { Link } from "react-router-dom";


const WishListItem = ({}) => {
  return (
    <Fragment>
      <tr>
        <td className="product-remove">
          <a className="remove-wishlist">
            <i className="fal fa-times"></i>
          </a>
        </td>
        <td className="product-thumbnail">
          <Link to="/products/p1">
            <img
              src="/template_files/assets/images/product/electric/product-01.png"
              alt="Digital Product"
            />
          </Link>
        </td>
        <td className="product-title">
          <Link to="/products/p1">Wireless PS Handler</Link>
        </td>
        <td className="product-price" data-title="Price">
          <span className="currency-symbol">$</span>124.00
        </td>
        <td className="product-stock-status" data-title="Status">
          In Stock
        </td>
        <td className="product-add-cart">
          <a  className="axil-btn btn-outline">
            Add to Cart
          </a>
        </td>
      </tr>
    </Fragment>
  );
};

export default WishListItem;
