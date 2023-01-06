import React from "react";

const PostSection = () => {
  return (
    <div className="axil-poster-countdown">
      <div className="container">
        <div className="poster-countdown-wrap bg-lighter">
          <div className="row">
            <div className="col-xl-5 col-lg-6">
              <div className="poster-countdown-content">
                <div className="section-title-wrapper">
                  <span className="title-highlighter highlighter-secondary">
                    {" "}
                    <i className="far fa-couch"></i> Don’t Miss!!
                  </span>
                  <h2 className="title">Decorate Your House with Us</h2>
                </div>
                <div className="poster-countdown countdown mb--40"></div>
                <a href="#" className="axil-btn btn-bg-primary">
                  Check it Out!
                </a>
              </div>
            </div>
            <div className="col-xl-7 col-lg-6">
              <div className="poster-countdown-thumbnail">
                <img
                  data-sal="zoom-out"
                  data-sal-delay="100"
                  data-sal-duration="1500"
                  src="/template_files/assets/images/product/poster/poster-07.png"
                  alt="Poster Product"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostSection;
