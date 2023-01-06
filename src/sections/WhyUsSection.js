import React from "react";
import BaseSectionLayout from "./BaseSectionLayout";

const WhyUsSection = () => {
  return (
    <BaseSectionLayout
      className="axil-why-choose-area axil-section-gap pb--50 pb_sm--30"
      className2="title-highlighter highlighter-secondary"
      iconClass="fal fa-thumbs-up"
      iconTitle="Why Us"
      sectionTitle="Why People Choose Us"
      className3="row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1 row--20"
    >
      <div className="col">
        <div className="service-box">
          <div className="icon">
            <img
              src="/template_files/assets/images/icons/service6.png"
              alt="Service"
            />
          </div>
          <h6 className="title">Fast &amp; Secure Delivery</h6>
        </div>
      </div>
      <div className="col">
        <div className="service-box">
          <div className="icon">
            <img
              src="/template_files/assets/images/icons/service7.png"
              alt="Service"
            />
          </div>
          <h6 className="title">100% Guarantee On Product</h6>
        </div>
      </div>
      <div className="col">
        <div className="service-box">
          <div className="icon">
            <img
              src="/template_files/assets/images/icons/service8.png"
              alt="Service"
            />
          </div>
          <h6 className="title">24 Hour Return Policy</h6>
        </div>
      </div>
      <div className="col">
        <div className="service-box">
          <div className="icon">
            <img
              src="/template_files/assets/images/icons/service9.png"
              alt="Service"
            />
          </div>
          <h6 className="title">24 Hour Return Policy</h6>
        </div>
      </div>
      <div className="col">
        <div className="service-box">
          <div className="icon">
            <img
              src="/template_files/assets/images/icons/service10.png"
              alt="Service"
            />
          </div>
          <h6 className="title">Next Level Pro Quality</h6>
        </div>
      </div>
    </BaseSectionLayout>
  );
};

export default WhyUsSection;
