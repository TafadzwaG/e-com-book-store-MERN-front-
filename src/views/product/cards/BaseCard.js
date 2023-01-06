import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import ProductQuickView from "../../../components/modals/ProductQuickView";

const BaseCard = () => {
  return (
    <Fragment>
      <div className="col-xl-3 col-lg-4 col-sm-6 col-12 mb--30">
        <div className="axil-product product-style-one">
          <div className="thumbnail">
            <Link to="/products/p1">
              <img
                data-sal="zoom-out"
                data-sal-delay="100"
                data-sal-duration="1500"
                src="/template_files/assets/images/product/furniture/product-5.png"
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
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#quick-view-modal"
                  >
                    <i className="far fa-eye"></i>
                  </a>
                </li>
                <li className="select-option">
                  <a href="cart.html">Add to Cart</a>
                </li>
                <li className="wishlist">
                  <a href="wishlist.html">
                    <i className="far fa-heart"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="product-content">
            <div className="inner">
              <h5 className="title">
                <Link to="/products/p1">Neue Sofa Chair</Link>
              </h5>
              <div className="product-price-variant">
                <span className="price current-price">$29.99</span>
                <span className="price old-price">$49.99</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ProductQuickView />
    </Fragment>
  );
};

export default BaseCard;
