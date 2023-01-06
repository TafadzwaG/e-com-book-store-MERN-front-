import React from "react";
import BaseCard from "../views/product/cards/BaseCard";

const ExploreProducts = () => {
  return (
    <div className="axil-product-area bg-color-white axil-section-gap pb--0">
      <div className="container">
        <div className="product-area pb--80">
          <div className="section-title-wrapper">
            <span className="title-highlighter highlighter-primary">
              {" "}
              <i className="far fa-shopping-basket"></i> Our Products
            </span>
            <h2 className="title">Explore our Products</h2>
          </div>
          <div className="explore-product-activation slick-layout-wrapper slick-layout-wrapper--15 axil-slick-arrow arrow-top-slide">
            <div className="slick-single-layout">
              <div className="row row--15">
                <BaseCard />
                <BaseCard />
                <BaseCard />
                <BaseCard />
              </div>
            </div>
            {/* <!-- End .slick-single-layout --> */}
          </div>
          <div className="row">
            <div className="col-lg-12 text-center mt--20 mt_sm--0">
              <a href="#" className="axil-btn btn-bg-lighter btn-load-more">
                View All Products
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreProducts;
