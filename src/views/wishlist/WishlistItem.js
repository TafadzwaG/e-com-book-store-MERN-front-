import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeItemFromWishlist } from "../../redux-store/wishlist-store/wishlist-actions";

const WishListItem = ({ item }) => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.auth.userId);
  const token = useSelector((state) => state.auth.token);

  const removeItemHandler = () => {
    dispatch(removeItemFromWishlist(userId, item.productId, item._id, token));
  };

  return (
    <Fragment>
      <tr>
        <td className="product-remove">
          <a
            className="remove-wishlist"
            style={{ cursor: "pointer" }}
            onClick={removeItemHandler}
          >
            <i className="fal fa-times"></i>
          </a>
        </td>
        <td className="product-thumbnail">
          <Link to={`/products/${item.productId}`}>
            <img
              src={`http://localhost:8000/assets/${item.imagePath}`}
              alt="Digital Product"
            />
          </Link>
        </td>
        <td className="product-title">
          <Link to={`/products/${item.productId}`}>{item.name}</Link>
        </td>
        <td className="product-price" data-title="Price">
          <span className="currency-symbol">R</span>
          {item.price}
        </td>
        <td className="product-stock-status" data-title="Status">
          In Stock
        </td>
        <td className="product-add-cart">
          <a className="axil-btn btn-outline">Add to Cart</a>
        </td>
      </tr>
    </Fragment>
  );
};

export default WishListItem;
