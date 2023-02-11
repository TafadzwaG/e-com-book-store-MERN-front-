import React, { Fragment, useState } from "react";
import { useEffect } from "react";
import { toast } from "react-toastify";
import ReactDOM from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { productActions } from "../../redux-store/products-store";
import { addToCart } from "../../redux-store/cart-store/cart-actions";
import { addToWishList } from "../../redux-store/wishlist-store/wishlist-actions";
const ProductQuickView = () => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.auth.userId);
  const token = useSelector((state) => state.auth.token);
  const product = useSelector((state) => state.product.quickViewProduct);

  const [quantity, setQuantity] = useState(1);
  const addItemHandler = () => {
    setQuantity(quantity + 1);
  };
  const removeItemHandler = () => {
    if (quantity <= 1) {
      return;
    }
    setQuantity(quantity - 1);
  };

  const closeQuickView = () => {
    dispatch(productActions.toggleOpenModal());
  };


  useEffect(() => {}, []);
   const addToCartHandler = () => {
    if (product) {
      dispatch(
        addToCart(userId, product._id, quantity, token, {
          _id: product._id,
          productId: product._id,
          name: product.name,
          price: product.price,
          imagePath: product.imagePath,
        })
      );
    }
  };


  const handleAddToWishlist = () => {
    if (product) {
      dispatch(
        addToWishList(userId, product._id, token, {
          _id: product._id,
          productId: product._id,
          price: product.price,
          name: product.name,
          imagePath: product.imagePath,
        })
      );
    }
  };
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <div
          className="modal fade quick-view-product"
          id="quick-view-modal"
          tabIndex="-1"
          aria-hidden="true"
        >
          {product && (
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    onClick={closeQuickView}
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
                                  src={`http://localhost:8000/assets/${product.imagePath}`}
                                  alt="Product Images"
                                />
                                <div className="label-block label-right">
                                  <div className="product-badget">20% OFF</div>
                                </div>
                                <div className="product-quick-view position-view">
                                  <a
                                    href={`http://localhost:8000/assets/${product.imagePath}`}
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
                            <h3 className="product-title">{product.name}</h3>
                            <span className="price-amount">
                              {" "}
                              R{product.price}
                            </span>
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
                                <i className="fal fa-check"></i>Sales 30% Off
                                Use Code: MOTIVE30
                              </li>
                            </ul>
                            <p className="description">{product.description}</p>

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
                                    onClick={addToCartHandler}
                                    className="axil-btn btn-bg-primary"
                                  >
                                    Add to Cart
                                  </a>
                                </li>
                                <li className="wishlist">
                                  <a
                                    onClick={handleAddToWishlist}
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
          )}
        </div>,
        document.getElementById("backdrop-root")
      )}
    </Fragment>
  );
};

export default ProductQuickView;
