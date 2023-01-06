import React, { Fragment, useState } from "react";
import BreadcrumbArea from "../components/BreadcrumbArea";
import Layout from "../core/Layout";
import BaseCard from "../views/product/cards/BaseCard";

const Shop = () => {
  const [toggleCat, setToggleCat] = useState(false);
  const [toggleSi, setToggleSi] = useState(false);
  const [togglePri, setTogglePri] = useState(false);

  const toggleCategories = () => {
    if (!toggleCat) {
      setToggleCat(true);
    } else {
      setToggleCat(false);
    }
  };

  const toggleSize = () => {
    if (!toggleSi) {
      setToggleSi(true);
    } else {
      setToggleSi(false);
    }
  };

  const togglePrice = () => {
    if (!togglePri) {
      setTogglePri(true);
    } else {
      setTogglePri(false);
    }
  };

  return (
    <Fragment>
      <Layout>
        <BreadcrumbArea 
        location={'Products'}
        title={'Explore All Products'}
        />
        <div className="axil-shop-area axil-section-gap bg-color-white">
          <div className="container">
            <div className="row">
              <div className="col-lg-3">
                <div className="axil-shop-sidebar">
                  <div className="d-lg-none">
                    <button className="sidebar-close filter-close-btn">
                      <i className="fas fa-times"></i>
                    </button>
                  </div>
                  <div
                    className={
                      !toggleCat
                        ? "toggle-list product-categories active"
                        : "toggle-list product-categories"
                    }
                  >
                    <h6 className="title" onClick={toggleCategories}>
                      CATEGORIES
                    </h6>
                    <div
                      className="shop-submenu"
                      style={{ display: !toggleCat ? "" : "none" }}
                    >
                      <ul>
                        <li className="current-cat">
                          <a href="#">Sun Care</a>
                        </li>
                        <li>
                          <a href="#">Night Care</a>
                        </li>
                        <li>
                          <a href="#">Treatments</a>
                        </li>
                        <li>
                          <a href="#">Moisturizers</a>
                        </li>
                        <li>
                          <a href="#">Eye Care</a>
                        </li>
                        <li>
                          <a href="#">Masks</a>
                        </li>
                        <li>
                          <a href="#">Featured</a>
                        </li>
                        <li>
                          <a href="#">On Sale</a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div
                    className={
                      !toggleSi
                        ? "toggle-list product-size active"
                        : "toggle-list product-size"
                    }
                  >
                    <h6 className="title" onClick={toggleSize}>
                      SIZE
                    </h6>
                    <div
                      className="shop-submenu"
                      style={{ display: !toggleSi ? "" : "none" }}
                    >
                      <ul>
                        <li className="chosen">
                          <a href="#">XS</a>
                        </li>
                        <li>
                          <a href="#">S</a>
                        </li>
                        <li>
                          <a href="#">M</a>
                        </li>
                        <li>
                          <a href="#">L</a>
                        </li>
                        <li>
                          <a href="#">XL</a>
                        </li>
                        <li>
                          <a href="#">XXL</a>
                        </li>
                        <li>
                          <a href="#">3XL</a>
                        </li>
                        <li>
                          <a href="#">4XL</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    className={
                      !togglePri
                        ? "toggle-list product-price-range active"
                        : "toggle-list product-price-range"
                    }
                  >
                    <h6 className="title" onClick={togglePrice}>
                      PRICE
                    </h6>
                    <div
                      className="shop-submenu"
                      style={{ display: !togglePri ? "" : "none" }}
                    >
                      <ul>
                        <li className="chosen">
                          <a href="#">30</a>
                        </li>
                        <li>
                          <a href="#">5000</a>
                        </li>
                      </ul>
                      <form action="#" className="mt--25">
                        <div id="slider-range"></div>
                        <div className="flex-center mt--20">
                          <span className="input-range">Price: </span>
                          <input
                            type="text"
                            id="amount"
                            className="amount-range"
                            readonly
                          />
                        </div>
                      </form>
                    </div>
                  </div>
                  <button className="axil-btn btn-bg-primary">All Reset</button>
                </div>
                {/* <!-- End .axil-shop-sidebar --> */}
              </div>
              <div className="col-lg-9">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="axil-shop-top mb--40">
                      <div className="category-select align-items-center justify-content-lg-end justify-content-between">
                        {/* <!-- Start Single Select  --> */}
                        <span className="filter-results">
                          Showing 1-12 of 84 results
                        </span>
                        <select className="single-select">
                          <option>Short by Latest</option>
                          <option>Short by Oldest</option>
                          <option>Short by Name</option>
                          <option>Short by Price</option>
                        </select>
                        {/* <!-- End Single Select  --> */}
                      </div>
                      <div className="d-lg-none">
                        <button className="product-filter-mobile filter-toggle">
                          <i className="fas fa-filter"></i> FILTER
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- End .row --> */}
                <div className="row row--15">
                  <BaseCard />
                  <BaseCard />
                  <BaseCard />
                  <BaseCard />
                  <BaseCard />
                  <BaseCard />
                  <BaseCard />
                  <BaseCard />
                  <BaseCard />
                  <BaseCard />
                </div>
                <div className="text-center pt--20">
                  <a href="#" className="axil-btn btn-bg-lighter btn-load-more">
                    Load more
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- End .container --> */}
        </div>
      </Layout>
    </Fragment>
  );
};

export default Shop;