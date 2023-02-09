import React from "react";
import { Fragment } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import BreadcrumbArea from "../components/BreadcrumbArea";
import Layout from "../core/Layout";
import BaseCard from "../views/product/cards/BaseCard";
import FilterByCategory from "./components/FilterByCategory";
import RadioBox from "./components/RadioBox";
import { prices } from "./FixedPrices";
import { getFiltereredProducts } from "../services/api-services";
import { productActions } from "../redux-store/products-store";

export default function ShopByCategory() {
  const [toggleSi, setToggleSi] = useState(true);
  const [togglePri, setTogglePri] = useState(true);
  const [myFilters, setMyFilters] = useState({
    filters: {
      category: [],
      price: [],
    },
  });

  const [limit, setLimit] = useState(2);
  const [skip, setSkip] = useState(0);
  const [size, setSize] = useState(0);

  const params = useParams();

  const dispatch = useDispatch();

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

  useEffect(() => {
    handleFilters([params.categoryId], "category");
    // loadFilteredResults(skip, limit, myFilters.filters);
  }, [params]);

  const handleFilters = (filters, filterBy) => {
    const newFilters = { ...myFilters };
    newFilters.filters[filterBy] = filters;

    newFilters.filters.category = [params.categoryId];
    myFilters.filters.category = [params.categoryId];

    if (filterBy == "price") {
      let priceValues = handlePrice(filters);
      newFilters.filters[filterBy] = priceValues;
    }
    if (filterBy == "category") {
      newFilters.filters[filterBy] = [params.categoryId];
    }

    loadFilteredResults(myFilters.filters);
    console.log("new", newFilters, "myFilters", myFilters.filters);
    setMyFilters(newFilters);
  };

  const handlePrice = (value) => {
    const data = prices;
    let array = [];
    for (let key in data) {
      if (data[key]._id === parseInt(value)) {
        array = data[key].array;
      }
    }

    return array;
  };

  const products = useSelector((state) => state.product.products);
  const loadFilteredResults = (newFilters) => {
    console.log("mfsbjk", newFilters);
    getFiltereredProducts(skip, limit, newFilters)
      .then((data) => {
        console.log("Filtered Rezo", data.data);
        setSize(data.size);
        setSkip(0);
        dispatch(
          productActions.setProducts({
            products: data.data,
          })
        );
      })
      .catch((err) => {
        console.log(err);
        dispatch(
          productActions.failedFetchProducts({
            error: "Error whilst fetch products" || err,
          })
        );
      });
  };

  return (
    <Fragment>
      <Layout>
        <BreadcrumbArea
          location={"Products"}
          title={`Explore All ${params.categoryName} Products`}
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
                      <RadioBox
                        prices={prices}
                        handleFilters={(filters) =>
                          handleFilters(filters, "price")
                        }
                      />
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
                  {/* {JSON.stringify(myFilters)} */}
                  {products &&
                    products.map((product) => (
                      <BaseCard key={product._id} product={product} />
                    ))}
                </div>
                <div className="text-center pt--20">
                  {/* {" "}
                  {size > 0 && size >= limit && (
                    <a
                      className="axil-btn btn-bg-lighter btn-load-more"
                      style={{ cursor: "pointer" }}
                      onClick={loadMore}
                    >
                      Load more
                    </a>
                  )} */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </Fragment>
  );
}
