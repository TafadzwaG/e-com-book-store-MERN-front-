import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import { advertActions } from "../redux-store/advert-store";
import { API } from "../config";

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

  const dispatch = useDispatch();
  const getAdverts = async () => {
    const getAdvertsResponse = await fetch(`${API}/adverts`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const responseData = await getAdvertsResponse.json();

    console.log("Advert", responseData.data);
    dispatch(
      advertActions.setAdverts({
        adverts: responseData.data,
      })
    );
  };

  useEffect(() => {
    getAdverts();
  }, []);

  const advertItems = useSelector((state) => state.advert.adverts);

  return (
    <>
      <Slider {...settings}>
        {advertItems &&
          advertItems.map((advert) => (
            <Fragment key={advert._id}>
              <div className="slider-activation-two axil-slick-dots slick-initialized slick-slider slick-dotted">
                <div
                  className="slick-list draggable"
                  style={{ height: "460px" }}
                >
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
                          <i className="fas fa-fire"></i> {advert.sub_title}
                        </span>
                        <h1 className="title" style={{height: "200px", overflow: "hidden"}}>{advert.title}</h1>
                        <div className="shop-btn">
                          <Link to="/shop" className="axil-btn btn-bg-white">
                            <i className="fal fa-shopping-cart"></i> Shop Now
                          </Link>
                        </div>
                      </div>
                      <div className="main-slider-thumb">
                        <img
                         style={{ borderRadius: "50%" }}
                            src={`http://localhost:8000/assets/${advert.imagePath}`}
                          alt="Product"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Fragment>
          ))}
      </Slider>
    </>
  );
};

export default BannerSlider;
