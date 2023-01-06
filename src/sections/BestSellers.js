import React from "react";
import BestSellerCard from "../views/product/cards/BestSellerCard";


const BestSellers = () => {
  return (
    <div className="axil-product-area axil-section-gap pb--0">
      <div className="container">
        `
        <div className="product-area pb--50">
          <div className="section-title-wrapper">
            <span className="title-highlighter highlighter-secondary">
              <i className="far fa-shopping-basket"></i>This Month
            </span>
            <h2 className="title">Best Sellers</h2>
          </div>
          <div className="row">
            <BestSellerCard />
            <BestSellerCard />
            <BestSellerCard />
            <BestSellerCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSellers;
