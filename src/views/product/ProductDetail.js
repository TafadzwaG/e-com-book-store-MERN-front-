import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { API } from "../../config";
import Layout from "../../core/Layout";
import Rating from "./components/Rating";
import Review from "./components/Review";
import SellFeatures from "./components/SellFeatures";
import UserReview from "./components/UserReview";
import RelatedProducts from "./RelatedProducts";
import { productActions } from "../../redux-store/products-store";

const ProductDetail = () => {
  const params = useParams();
  const productId = params.productId;
  const [product, setProduct] = useState({});

  const [quantity, setQuantity] = useState(1);
  const [error, setError] = useState("");
  const isComment = useSelector((state) => state.product.isCommented);

  const dispatch = useDispatch();

  const getSingleProduct = async (productId) => {
    const getSingleProductResponse = await fetch(
      `${API}/product/${productId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const responseData = await getSingleProductResponse.json();
    console.log("single", responseData);

    return responseData;
  };

  const addItemHandler = () => {
    setQuantity(quantity + 1);
  };

  const removeItemHandler = () => {
    if (quantity <= 1) {
      return;
    }
    setQuantity(quantity - 1);
  };

  const init = () => {
    getSingleProduct(productId)
      .then((data) => {
        setProduct(data);
      })
      .catch((err) => {
        setError(err);
      });
  };

  useEffect(() => {
    init();
    dispatch(productActions.setIsComented(false));
  }, [productId, isComment]);

  return (
    <>
      <Layout>
        <div className="axil-single-product-area axil-section-gap pb--0 bg-color-white">
          <div className="single-product-thumb mb--40">
            <div className="container">
              <div className="row">
                <div className="col-lg-7 mb--40">
                  <div className="row">
                    <div className="col-lg-10 order-lg-2">
                      <div className="single-product-thumbnail-wrap zoom-gallery">
                        <div className="single-product-thumbnail product-large-thumbnail-3 axil-product">
                          <div className="thumbnail">
                            <a
                              href={`http://localhost:8000/assets/${product.imagePath}`}
                              className="popup-zoom"
                            >
                              <img
                                src={`http://localhost:8000/assets/${product.imagePath}`}
                                alt="Product Images"
                              />
                            </a>
                          </div>
                        </div>
                        <div className="label-block">
                          <div className="product-badget">20% OFF</div>
                        </div>
                        <div className="product-quick-view position-view">
                          <a
                            href="assets/images/product/product-big-01.png"
                            className="popup-zoom"
                          >
                            <i className="far fa-search-plus"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2 order-lg-1">
                      <div className="product-small-thumb-3 small-thumb-wrapper">
                        <div className="small-thumb-img">
                          <img
                            src={`http://localhost:8000/assets/${product.imagePath}`}
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
                      <h2 className="product-title">{product.name}</h2>
                      <span className="price-amount">R{product.price}</span>
                      <div className="product-rating">
                        <div className="review-link">
                          <Rating rating={product.rating} numReviews={2} />
                          {product.comments ? (
                            <a href="#">
                              (<span>{product.comments.length}</span> customer
                              reviews)
                            </a>
                          ) : (
                            <a href="#">
                              (<span>No Comments Available</span>)
                            </a>
                          )}
                        </div>
                      </div>

                      <ul className="product-meta">
                        <li>
                          <i className="fal fa-check"></i>In stock (
                          {product.quantity})
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
                      <p className="description">{product.description}</p>

                      <div className="product-variations-wrapper">
                        {/* <!-- Start Product Variation  --> */}
                        <div className="product-variation">
                          <h6 className="title">Colors:</h6>
                          <div className="color-variant-wrapper">
                            <ul className="color-variant">
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
                        <div className="product-variation product-size-variation">
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
                          <span
                            class="dec qtybtn"
                            onClick={() => removeItemHandler()}
                          >
                            -
                          </span>
                          <input type="text" value={quantity} readOnly />
                          <span
                            class="inc qtybtn"
                            onClick={() => addItemHandler()}
                          >
                            +
                          </span>
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
          {/* <!-- End .single-product-thumb --> */}

          <div className="woocommerce-tabs wc-tabs-wrapper bg-vista-white">
            <div className="container">
              <ul className="nav tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                  <a
                    className="active"
                    id="description-tab"
                    data-bs-toggle="tab"
                    href="#description"
                    role="tab"
                    aria-controls="description"
                    aria-selected="true"
                  >
                    Description
                  </a>
                </li>

                <li className="nav-item" role="presentation">
                  <a
                    id="reviews-tab"
                    data-bs-toggle="tab"
                    href="#reviews"
                    role="tab"
                    aria-controls="reviews"
                    aria-selected="false"
                  >
                    Reviews
                  </a>
                </li>
              </ul>
              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="description"
                  role="tabpanel"
                  aria-labelledby="description-tab"
                >
                  <div className="product-desc-wrapper">
                    <div className="row">
                      <div className="col-lg-6 mb--30">
                        <div className="single-desc">
                          <h5 className="title">Specifications:</h5>
                          <p>
                            We’ve created a full-stack structure for our working
                            workflow processes, were from the funny the century
                            initial all the made, have spare to negatives. But
                            the structure was from the funny the century rather,
                            initial all the made, have spare to negatives.
                          </p>
                        </div>
                      </div>
                      {/* <!-- End .col-lg-6 --> */}
                      <div className="col-lg-6 mb--30">
                        <div className="single-desc">
                          <h5 className="title">Care & Maintenance:</h5>
                          <p>
                            Use warm water to describe us as a product team that
                            creates amazing UI/UX experiences, by crafting
                            top-notch user experience.
                          </p>
                        </div>
                      </div>
                      {/* <!-- End .col-lg-6 --> */}
                    </div>
                    {/* <!-- End .row --> */}
                    <SellFeatures />
                    {/* <!-- End .row --> */}
                  </div>
                  {/* <!-- End .product-desc-wrapper --> */}
                </div>

                <div
                  className="tab-pane fade"
                  id="reviews"
                  role="tabpanel"
                  aria-labelledby="reviews-tab"
                >
                  <div className="reviews-wrapper">
                    <div className="row">
                      <div className="col-lg-6 mb--40">
                        <div className="axil-comment-area pro-desc-commnet-area">
                          {product.comments ? (
                            <h5 className="title">
                              {product.comments.length} Reviews for this product
                            </h5>
                          ) : (
                            <h5 className="title">
                              No Reviews for this product yet
                            </h5>
                          )}

                          <ul className="comment-list">
                            {/* <!-- Start Single Comment  --> */}
                            <UserReview productId={productId} />
                            {/* <!-- End Single Comment  --> */}
                          </ul>
                        </div>
                        {/* <!-- End .axil-commnet-area --> */}
                      </div>
                      {/* <!-- End .col --> */}
                      <div className="col-lg-6 mb--40">
                        {/* <!-- Start Comment Respond  --> */}
                        <Review productIdProp={productId} />
                        {/* <!-- End Comment Respond  --> */}
                      </div>
                      {/* <!-- End .col --> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- woocommerce-tabs --> */}
        </div>
        <RelatedProducts productId={productId} />
      </Layout>
    </>
  );
};

export default ProductDetail;
