import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const BreadcrumbArea = ({ location, title }) => {
  return (
    <Fragment>
      <div class="axil-breadcrumb-area">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6 col-md-8">
              <div class="inner">
                <ul class="axil-breadcrumb">
                  <li class="axil-breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li class="separator"></li>
                  <li class="axil-breadcrumb-item active" aria-current="page">
                    {location}
                  </li>
                </ul>
                <h1 class="title">{title}</h1>
              </div>
            </div>
            <div class="col-lg-6 col-md-4">
              <div class="inner">
                <div class="bradcrumb-thumb">
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
