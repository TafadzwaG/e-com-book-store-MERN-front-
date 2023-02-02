import React from "react";
import { Link, useParams } from "react-router-dom";
import Rating from "../components/Rating";

const BestSellerCard = ({ product }) => {
  const params = useParams();

  return (
    <div className="col-xl-3 col-lg-4 col-sm-6">
      <div className="axil-product product-style-seven">
        <div className="product-content">
          <div className="cart-btn">
            <a href="#">
              <i className="flaticon-shopping-cart"></i>
            </a>
          </div>
          <div className="inner">
            <h5 className="title">
              <Link to={`/products/${product._id}`}>{product.name}</Link>
            </h5>
            <div className="product-price-variant">
              <span className="price current-price">
                R{product.price.toFixed(2)}
              </span>
              {/* <span className="price old-price">$49.99</span> */}
            </div>
            {product.comments ? (
              <div
                className="product-rating"
                style={{
                  display: "flex",
                  marginBottom: "-10px",
                }}
              >
                <span className="icon">
                  <Rating rating={product.rating || 0} numReviews={2} />{" "}
                </span>
                <span className="rating-number">
                  ({product.comments.length})
                </span>
              </div>
            ) : (
              <div
                className="product-rating"
                style={{
                  display: "flex",
                  marginBottom: "-10px",
                }}
              >
                <span className="icon">
                  <Rating rating={product.rating || 0} numReviews={2} />{" "}
                </span>
                <span className="rating-number">(0)</span>
              </div>
            )}
          </div>
        </div>
        <div className="thumbnail">
          <Link to={`/products/${product._id}`}>
            <img
              data-sal="zoom-out"
              data-sal-delay="100"
              data-sal-duration="800"
              loading="lazy"
              //   src="/template_files/assets/images/product/furniture/product-19.png"
              style={{
                marginTop: "20px",
                borderRadius: "50%",
                width: "310px",
              }}
              src={`http://localhost:8000/assets/${product.imagePath}`}
              alt="Product Images"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BestSellerCard;
