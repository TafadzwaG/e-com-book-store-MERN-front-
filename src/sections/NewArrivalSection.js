import React from "react";
import Slider from "react-slick";
import NewArrivalCard from "../views/product/cards/NewArrivalCard";
import BaseSectionLayout from "./BaseSectionLayout";

const NewArrivalSection = () => {
  var newArrivalSlidersettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
  };
  return (
    <BaseSectionLayout
      className="axil-new-arrivals-product-area bg-color-white axil-section-gap pb--50 pb_sm--30"
      className2="title-highlighter highlighter-primary"
      iconClass="far fa-shopping-basket"
      iconTitle="This Week’s"
      sectionTitle="New Arrivals"
      className3="new-arrivals-product-activation slick-layout-wrapper--30 axil-slick-arrow  arrow-top-slide"
    >
      <div className="row">
        <Slider {...newArrivalSlidersettings}>
          <div>
            <NewArrivalCard />
          </div>
          <div>
            <NewArrivalCard />
          </div>
          <div>
            <NewArrivalCard />
          </div>
          <div>
            <NewArrivalCard />
          </div>
          <div>
            <NewArrivalCard />
          </div>
        </Slider>
      </div>
    </BaseSectionLayout>
  );
};

export default NewArrivalSection;
