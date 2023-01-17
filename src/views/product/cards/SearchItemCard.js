import React, { Fragment } from "react";

const SearchItemCard = () => {
  return (
    <Fragment>
      <div className="axil-product-list">
        <div className="thumbnail">
          <a href="single-product.html">
            <img
              src="/template_files/assets/images/product/electric/product-09.png"
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
            <a href="single-product.html">Media Remote</a>
          </h6>
          <div className="product-price-variant">
            <span className="price current-price">$29.99</span>
            <span className="price old-price">$49.99</span>
          </div>
          <div className="product-cart">
            <a href="cart.html" className="cart-btn">
              <i className="fal fa-shopping-cart"></i>
            </a>
            <a href="wishlist.html" className="cart-btn">
              <i className="fal fa-heart"></i>
            </a>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default SearchItemCard;
