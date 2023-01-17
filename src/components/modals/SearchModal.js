import React, { Fragment } from "react";
import SearchItemCard from "../../views/product/cards/SearchItemCard";

const SearchModal = () => {
  return (
    <Fragment>
      <div className="header-search-modal" id="header-search-modal">
        <button className="card-close sidebar-close">
          <i className="fas fa-times"></i>
        </button>
        <div className="header-search-wrap">
          <div className="card-header">
            <form action="#">
              <div className="input-group">
                <input
                  type="search"
                  className="form-control"
                  name="prod-search"
                  id="prod-search"
                  placeholder="Write Something...."
                />
                <button type="submit" className="axil-btn btn-bg-primary">
                  <i className="far fa-search"></i>
                </button>
              </div>
            </form>
          </div>
          <div className="card-body">
            <div className="search-result-header">
              <h6 className="title">24 Result Found</h6>
              <a href="shop.html" className="view-all">
                View All
              </a>
            </div>
            <div className="psearch-results">
              <SearchItemCard />
              <SearchItemCard />
              
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default SearchModal;
