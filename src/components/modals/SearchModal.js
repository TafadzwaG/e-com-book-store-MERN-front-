import React, { Fragment, useEffect, useState } from "react";
import SearchItemCard from "../../views/product/cards/SearchItemCard";

import { getCategories, list } from "../../services/api-services";

const SearchModal = () => {
  const [data, setData] = useState({
    categories: [],
    category: "",
    search: "",
    results: [],
    searched: false,
  });

  const { categories, category, search, results, searched } = data;

  const loadCategories = () => {
    getCategories()
      .then((ResponseData) => {
        setData({ ...data, categories: ResponseData });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const searchData = () => {
    if (search) {
      list({ search: search || undefined, category: category })
        .then((response) => {
          console.log(data);
          setData({ ...data, results: response, searched: true });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const searchSubmit = (e) => {
    e.preventDefault();
    searchData();
  };

  const handleChange = (name) => (event) => {
    setData({ ...data, [name]: event.target.value, searched: false });
  };

  useEffect(() => {
    loadCategories();
  }, []);

  return (
    <Fragment>
      <div className="header-search-modal" id="header-search-modal">
        <button className="card-close sidebar-close">
          <i className="fas fa-times"></i>
        </button>
        <div className="header-search-wrap">
          <div className="card-header">
            <form onSubmit={searchSubmit}>
              <div className="input-group">
                <input
                  type="search"
                  className="form-control"
                  name="prod-search"
                  id="prod-search"
                  onChange={handleChange("search")}
                  placeholder="Write Something...."
                  style={{ marginRight: "10px" }}
                />
                <button
                  type="submit"
                  className="axil-btn btn-bg-primary"
                  style={{ marginTop: "-35px" }}
                >
                  <i className="far fa-search"></i>
                </button>
                <div className="col-3">
                  <div className="form-group mb--40">
                    <label>Category</label>
                    <select
                      className="select2"
                      name="category"
                      onChange={handleChange("category")}
                    >
                      <option value="All">Select Category</option>
                      {categories.map((cate, index) => (
                        <option key={index} value={cate._id}>
                          {cate.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="card-body">
            <div className="search-result-header">
              <h6 className="title">{data.results.length} Result Found</h6>
              <a href="shop.html" className="view-all">
                View All
              </a>
            </div>
            <div className="psearch-results">
              {data.results &&
                data.results.map((product) => (
                  <SearchItemCard product={product} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default SearchModal;
