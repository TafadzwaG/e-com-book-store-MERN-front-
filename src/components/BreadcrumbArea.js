import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const BreadcrumbArea = ({ location, title }) => {
  return (
    <Fragment>
      <div className="axil-breadcrumb-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-8">
              <div className="inner">
                <ul className="axil-breadcrumb">
                  <li className="axil-breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="separator"></li>
                  <li className="axil-breadcrumb-item active" aria-current="page">
                    {location}
                  </li>
                </ul>
                <h1 className="title">{title}</h1>
              </div>
            </div>
            <div className="col-lg-6 col-md-4">
              <div className="inner">
                <div className="bradcrumb-thumb">
                  <img
                    src="/template_files/assets/images/product/product-45.png"
                    alt="Image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default BreadcrumbArea;
