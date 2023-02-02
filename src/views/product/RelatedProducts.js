import React, { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { API } from "../../config";
import BaseCard from "./cards/BaseCard";

const RelatedProducts = ({ productId }) => {
  const [relatedProducts, setRelatedProducts] = useState([]);
  const token = useSelector((state) => state.auth.token);

  const getRelatedProducts = async () => {
    const relatedProductsResponse = await fetch(
      `${API}/products/related/${productId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const responseData = await relatedProductsResponse.json();
    setRelatedProducts(responseData);
  };
  useEffect(() => {
    getRelatedProducts();
  }, [productId]);

  return (
    <Fragment>
      <div className="axil-product-area bg-color-white axil-section-gap pb--0">
        <div className="container">
          <div className="product-area pb--80">
            <div className="section-title-wrapper">
              <span className="title-highlighter highlighter-primary">
                {" "}
                <i className="far fa-shopping-basket"></i> Related Products
              </span>
              <h2 className="title">Explore Related Products</h2>
            </div>
            <div className="explore-product-activation slick-layout-wrapper slick-layout-wrapper--15 axil-slick-arrow arrow-top-slide">
              <div className="slick-single-layout">
                <div className="row row--15">
                  {relatedProducts &&
                    relatedProducts.map((product) => (
                      <BaseCard key={product._id} product={product} />
                    ))}
                </div>
              </div>
              {/* <!-- End .slick-single-layout --> */}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default RelatedProducts;
