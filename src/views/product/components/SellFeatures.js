import React from "react";

export default function SellFeatures() {
  return (
    <div className="row">
      <div className="col-lg-12">
        <ul className="pro-des-features">
          <li className="single-features">
            <div className="icon">
              <img
                src="/template_files/assets/images/product/product-thumb/icon-3.png"
                alt="icon"
              />
            </div>
            Easy Returns
          </li>
          <li className="single-features">
            <div className="icon">
              <img
                src="/template_files/assets/images/product/product-thumb/icon-2.png"
                alt="icon"
              />
            </div>
            Quality Service
          </li>
          <li className="single-features">
            <div className="icon">
              <img
                src="/template_files/assets/images/product/product-thumb/icon-1.png"
                alt="icon"
              />
            </div>
            Original Product
          </li>
        </ul>
        {/* <!-- End .pro-des-features --> */}
      </div>
    </div>
  );
}
