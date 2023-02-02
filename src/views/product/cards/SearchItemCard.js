import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const SearchItemCard = ({ product }) => {
  return (
    <Fragment>
      <div className="axil-product-list">
        <div className="thumbnail">
          <a href="single-product.html">
            <img
              style={{ width: "150px" }}
              src={`http://localhost:8000/assets/${product.imagePath}`}
              alt="Yantiti Leather Bags"
            />
          </a>
        </div>
        <div className="product-content">
          <div className="product-rating">
            <span className="rating-icon">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fal fa-star"></i>
            </span>
            <span className="rating-number">
              <span>100+</span> Reviews
            </span>
          </div>
          <h6 className="product-title">
            <Link to={`/products/${product._id}`}>{product.name}</Link>
          </h6>
          <div className="product-price-variant">
            <span className="price current-price">
              {" "}
              R{product.price.toFixed(2)}
            </span>
            {/* <span className="price old-price">$49.99</span> */}
          </div>
          <div className="product-cart">
            <a className="cart-btn">
              <i className="fal fa-shopping-cart"></i>
            </a>
            <a className="cart-btn">
              <i className="fal fa-heart"></i>
            </a>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default SearchItemCard;
