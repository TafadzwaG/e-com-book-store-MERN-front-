import React, { Fragment } from "react";

const ProductQuickView = () => {
  return (
    <Fragment>
      <div
        className="modal fade quick-view-product"
        id="quick-view-modal"
        tabindex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="far fa-times"></i>
              </button>
            </div>
            <div className="modal-body">
              <div className="single-product-thumb">
                <div className="row">
                  <div className="col-lg-7 mb--40">
                    <div className="row">
                      <div className="col-lg-10 order-lg-2">
                        <div className="single-product-thumbnail product-large-thumbnail axil-product thumbnail-badge zoom-gallery">
                          <div className="thumbnail">
                            <img
                              src="/template_files/assets/images/product/product-big-01.png"
                              alt="Product Images"
                            />
                            <div className="label-block label-right">
                              <div className="product-badget">20% OFF</div>
                            </div>
                            <div className="product-quick-view position-view">
                              <a
                                href="/template_files/assets/images/product/product-big-01.png"
                                className="popup-zoom"
                              >
                                <i className="far fa-search-plus"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-2 order-lg-1">
                        <div className="product-small-thumb small-thumb-wrapper">
                          <div className="small-thumb-img">
                            <img
                              src="/template_files/assets/images/product/product-thumb/thumb-08.png"
                              alt="thumb image"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-5 mb--40">
                    <div className="single-product-content">
                      <div className="inner">
                        <div className="product-rating">
                          <div className="star-rating">
                            <img
                              src="/template_files/assets/images/icons/rate.png"
                              alt="Rate Images"
                            />
                          </div>
                          <div className="review-link">
                            <a href="#">
                              (<span>1</span> customer reviews)
                            </a>
                          </div>
                        </div>
                        <h3 className="product-title">Serif Coffee Table</h3>
                        <span className="price-amount">$155.00 - $255.00</span>
                        <ul className="product-meta">
                          <li>
                            <i className="fal fa-check"></i>In stock
                          </li>
                          <li>
                            <i className="fal fa-check"></i>Free delivery
                            available
                          </li>
                          <li>
                            <i className="fal fa-check"></i>Sales 30% Off Use
                            Code: MOTIVE30
                          </li>
                        </ul>
                        <p className="description">
                          In ornare lorem ut est dapibus, ut tincidunt nisi
                          pretium. Integer ante est, elementum eget magna.
                          Pellentesque sagittis dictum libero, eu dignissim
                          tellus.
                        </p>

                        <div className="product-variations-wrapper">
                          {/* <!-- Start Product Variation  --> */}
                          <div className="product-variation">
                            <h6 className="title">Colors:</h6>
                            <div className="color-variant-wrapper">
                              <ul className="color-variant mt--0">
                                <li className="color-extra-01 active">
                                  <span>
                                    <span className="color"></span>
                                  </span>
                                </li>
                                <li className="color-extra-02">
                                  <span>
                                    <span className="color"></span>
                                  </span>
                                </li>
                                <li className="color-extra-03">
                                  <span>
                                    <span className="color"></span>
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                          {/* <!-- End Product Variation  --> */}

                          {/* <!-- Start Product Variation  --> */}
                          <div className="product-variation">
                            <h6 className="title">Size:</h6>
                            <ul className="range-variant">
                              <li>xs</li>
                              <li>s</li>
                              <li>m</li>
                              <li>l</li>
                              <li>xl</li>
                            </ul>
                          </div>
                          {/* <!-- End Product Variation  --> */}
                        </div>

                        {/* <!-- Start Product Action Wrapper  --> */}
                        <div className="product-action-wrapper d-flex-center">
                          {/* <!-- Start Quentity Action  --> */}
                          <div className="pro-qty">
                            <input type="text" value="1" />
                          </div>
                          {/* <!-- End Quentity Action  --> */}

                          {/* <!-- Start Product Action  --> */}
                          <ul className="product-action d-flex-center mb--0">
                            <li className="add-to-cart">
                              <a
                                href="cart.html"
                                className="axil-btn btn-bg-primary"
                              >
                                Add to Cart
                              </a>
                            </li>
                            <li className="wishlist">
                              <a
                                href="wishlist.html"
                                className="axil-btn wishlist-btn"
                              >
                                <i className="far fa-heart"></i>
                              </a>
                            </li>
                          </ul>
                          {/* <!-- End Product Action  --> */}
                        </div>
                        {/* <!-- End Product Action Wrapper  --> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductQuickView;
