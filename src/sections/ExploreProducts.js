import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { API } from "../config";
import { productActions } from "../redux-store/products-store";
import BaseCard from "../views/product/cards/BaseCard";

const ExploreProducts = () => {
  const dispatch = useDispatch();

  const sortBy = "_id";

  const getRandomProducts = async (sortBy) => {
    dispatch(productActions.fetchProducts());
    const getRandomProductsResponse = await fetch(
      `${API}/products?sortBy=${sortBy}&order=desc&limit=4`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const responseData = await getRandomProductsResponse.json();
    console.log("Random", responseData);
    return responseData;
  };

  const init = () => {
    getRandomProducts(sortBy)
      .then((data) => {
        dispatch(
          productActions.setRandomProducts({
            randomProducts: data,
          })
        );
      })
      .catch((err) => {
        dispatch(
          productActions.failedFetchProducts({
            error: "Failed to fetch random products",
          })
        );
      });
  };

  useEffect(() => {
    init();
  }, []);

  const randomProducts = useSelector((state) => state.product.randomProducts);

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
                {randomProducts &&
                  randomProducts.map((product) => (
                    <BaseCard key={product._id} product={product} />
                  ))}
              </div>
            </div>
            {/* <!-- End .slick-single-layout --> */}
          </div>
          <div className="row">
            <div className="col-lg-12 text-center mt--20 mt_sm--0">
              <Link
                to="/shop"
                className="axil-btn btn-bg-lighter btn-load-more"
              >
                View All Products
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreProducts;
