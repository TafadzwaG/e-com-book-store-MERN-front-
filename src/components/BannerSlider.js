import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const BannerSlider = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
  };

  return (
    <>
      <Slider {...settings}>
        <div className="slider-activation-two axil-slick-dots slick-initialized slick-slider slick-dotted">
          <div className="slick-list draggable" style={{ height: "460px" }}>
            <div className="slick-track" style={{ width: "2490px" }}>
              <div
                className="single-slide slick-slide slick-current slick-active"
                style={{
                  width: "930px",
                  zIndex: "999",
                  position: "relative",
                  left: "0px",
                  top: "0px",
                }}
              >
                <div className="main-slider-content">
                  <span className="subtitle">
                    <i className="fas fa-fire"></i> Hot Deal In This Week
                  </span>
                  <h1 className="title">Neon Stylish Sofa Chair</h1>
                  <div className="shop-btn">
                    <Link to="/shop" className="axil-btn btn-bg-white">
                      <i className="fal fa-shopping-cart"></i> Shop Now
                    </Link>
                  </div>
                </div>
                <div className="main-slider-thumb">
                  <img
                    src="/template_files/assets/images/product/product-47.png"
                    alt="Product"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="slider-activation-two axil-slick-dots slick-initialized slick-slider slick-dotted">
          <div className="slick-list draggable" style={{ height: "460px" }}>
            <div className="slick-track" style={{ width: "2490px" }}>
              <div
                className="single-slide slick-slide slick-current slick-active"
                style={{
                  width: "930px",
                  zIndex: "999",
                  position: "relative",
                  left: "0px",
                  top: "0px",
                }}
              >
                <div className="main-slider-content">
                  <span className="subtitle">
                    <i className="fas fa-fire"></i> Hot Deal In This Week
                  </span>
                  <h1 className="title">Sofa Chair with Lampr</h1>
                  <div className="shop-btn">
                    <Link to="/shop" className="axil-btn btn-bg-white">
                      <i className="fal fa-shopping-cart"></i> Shop Now
                    </Link>
                  </div>
                </div>
                <div className="main-slider-thumb">
                  <img
                    src="/template_files/assets/images/product/product-48.png"
                    alt="Product"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </>
  );
};

export default BannerSlider;
