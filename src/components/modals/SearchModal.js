import React, { Fragment } from "react";

const SearchModal = () => {
  return (
    <Fragment>
      <div class="header-search-modal" id="header-search-modal">
        <button class="card-close sidebar-close">
          <i class="fas fa-times"></i>
        </button>
        <div class="header-search-wrap">
          <div class="card-header">
            <form action="#">
              <div class="input-group">
                <input
                  type="search"
                  class="form-control"
                  name="prod-search"
                  id="prod-search"
                  placeholder="Write Something...."
                />
                <button type="submit" class="axil-btn btn-bg-primary">
                  <i class="far fa-search"></i>
                </button>
              </div>
            </form>
          </div>
          <div class="card-body">
            <div class="search-result-header">
              <h6 class="title">24 Result Found</h6>
              <a href="shop.html" class="view-all">
                View All
              </a>
            </div>
            <div class="psearch-results">
              <div class="axil-product-list">
                <div class="thumbnail">
                  <a href="single-product.html">
                    <img
                      src="/template_files/assets/images/product/electric/product-09.png"
                      alt="Yantiti Leather Bags"
                    />
                  </a>
                </div>
                <div class="product-content">
                  <div class="product-rating">
                    <span class="rating-icon">
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fal fa-star"></i>
                    </span>
                    <span class="rating-number">
                      <span>100+</span> Reviews
                    </span>
                  </div>
                  <h6 class="product-title">
                    <a href="single-product.html">Media Remote</a>
                  </h6>
                  <div class="product-price-variant">
                    <span class="price current-price">$29.99</span>
                    <span class="price old-price">$49.99</span>
                  </div>
                  <div class="product-cart">
                    <a href="cart.html" class="cart-btn">
                      <i class="fal fa-shopping-cart"></i>
                    </a>
                    <a href="wishlist.html" class="cart-btn">
                      <i class="fal fa-heart"></i>
                    </a>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default SearchModal;
