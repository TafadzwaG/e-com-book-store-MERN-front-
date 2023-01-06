import React from "react";

const NewArrivalCard = () => {
 
  return (
    <div className="slick-single-layout container-width">
      <div className="axil-product product-style-two has-color-pick">
        <div className="thumbnail">
          <a href="single-product.html">
            <img
              data-sal="zoom-out"
              data-sal-delay="100"
              data-sal-duration="1500"
              src="/template_files/assets/images/product/furniture/product-5.png"
              alt="Product Images"
            />
          </a>
          <div className="label-block label-right">
            <div className="product-badget">10% OFF</div>
          </div>
        </div>
        <div className="product-content">
          <div className="inner">
            <div className="color-variant-wrapper">
              <ul className="color-variant">
                <li className="color-extra-01 active">
                  <span>
                    <span className="color"></span>
                  </span>
                </li>
                <li className="color-extra-02">
                  <span>
                    <span className="color"></span>
                  </span>
                </li>
                <li className="color-extra-03">
                  <span>
                    <span className="color"></span>
                  </span>
                </li>
              </ul>
            </div>
            <h5 className="title">
              <a href="single-product.html">Neue Sofa Chair</a>
            </h5>
            <div className="product-price-variant">
              <span className="price old-price">$40</span>
              <span className="price current-price">$30</span>
            </div>
          </div>
          <div className="product-hover-action">
            <ul className="cart-action justify-content-center">
              <li className="wishlist">
                <a href="wishlist.html">
                  <i className="far fa-heart"></i>
                </a>
              </li>
              <li className="select-option">
                <a href="cart.html">Add to Cart</a>
              </li>
              <li className="quickview">
                <a
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#quick-view-modal"
                >
                  <i className="far fa-eye"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NewArrivalCard;
