import React, { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ProductQuickView from "../../../components/modals/ProductQuickView";
import { cartActions } from "../../../redux-store/cart-store";
import Rating from "../components/Rating";

import { addToWishList } from "../../../redux-store/wishlist-store/wishlist-actions";
import { addToCart } from "../../../redux-store/cart-store/cart-actions";
import { useEffect } from "react";
import { API } from "../../../config";
import { toast } from "react-toastify";
import { productActions } from "../../../redux-store/products-store";
const BaseCard = ({ product }) => {
  const dispatch = useDispatch();

  const userId = useSelector((state) => state.auth.userId);
  const token = useSelector((state) => state.auth.token);

  const addToCartHandler = () => {
    dispatch(
      addToCart(userId, product._id, 1, token, {
        _id: product._id,
        productId: product._id,
        name: product.name,
        price: product.price,
        imagePath: product.imagePath,
      })
    );
  };
  const handleAddToWishlist = () => {
    dispatch(
      addToWishList(userId, product._id, token, {
        _id: product._id,
        productId: product._id,
        price: product.price,
        name: product.name,
        imagePath: product.imagePath,
      })
    );
  };

  const quickView = () => {
    dispatch(productActions.setQuickViewProduct(product));
  };

  const [quickviewProduct, setQuickviewProduct] = useState({});
  const [showModal, setShowModal] = useState(false);
 

  useEffect(() => {
  }, []);

  return (
    <Fragment>
      {product._id && (
        <div className="col-xl-3 col-lg-4 col-sm-6 col-12 mb--30">
          <div className="axil-product product-style-one">
            <div className="thumbnail">
              <Link to={`/products/${product._id}`}>
                <img
                  data-sal="zoom-out"
                  data-sal-delay="100"
                  data-sal-duration="1500"
                  src={`http://localhost:8000/assets/${product.imagePath}`}
                  alt="Product Images"
                />
              </Link>
              <div className="label-block label-right">
                <div className="product-badget">20% Off</div>
              </div>
              <div className="product-hover-action">
                <ul className="cart-action">
                  <li className="quickview">
                    <a
                      onClick={() => quickView()}
                      data-bs-toggle="modal"
                      data-bs-target="#quick-view-modal"
                      style={{ cursor: "pointer" }}
                    >
                      <i className="far fa-eye"></i>
                    </a>
                  </li>
                  <li className="select-option">
                    <a style={{ cursor: "pointer" }} onClick={addToCartHandler}>
                      Add to Cart
                    </a>
                  </li>
                  <li className="wishlist">
                    <a
                      style={{ cursor: "pointer" }}
                      onClick={handleAddToWishlist}
                    >
                      <i className="far fa-heart"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="product-content">
              <div className="inner">
                <h5 className="title">
                  <Link to={`/products/${product._id}`}>{product.name}</Link>
                </h5>
                {product.comments ? (
                  <div
                    className="product-rating"
                    style={{
                      display: "flex",
                      marginBottom: "-10px",
                    }}
                  >
                    <span className="icon">
                      <Rating rating={product.rating || 0} numReviews={2} />{" "}
                    </span>
                    <span className="rating-number">
                      ({product.comments.length})
                    </span>
                  </div>
                ) : (
                  <div
                    className="product-rating"
                    style={{
                      display: "flex",
                      marginBottom: "-10px",
                    }}
                  >
                    <span className="icon">
                      <Rating rating={product.rating || 0} numReviews={2} />{" "}
                    </span>
                    <span className="rating-number">(0)</span>
                  </div>
                )}

                <div className="product-price-variant">
                  <span className="price current-price">
                    R{product.price.toFixed(2)}
                  </span>
                  {/* <span className="price old-price">$49.99</span> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <ProductQuickView  />
    </Fragment>
  );
};

export default BaseCard;
