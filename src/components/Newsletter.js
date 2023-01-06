import React from "react";

const Newsletter = () => {
  return (
    <>
      <div className="axil-newsletter-area axil-section-gap pt--0">
        <div className="container">
          <div className="etrade-newsletter-wrapper bg_image bg_image--6">
            <div className="newsletter-content">
              <span className="title-highlighter highlighter-primary2">
                <i className="fas fa-envelope-open"></i>Newsletter
              </span>
              <h2 className="title mb--40 mb_sm--30">Get weekly update</h2>
              <div className="input-group newsletter-form">
                <div className="position-relative newsletter-inner mb--15">
                  <input placeholder="example@gmail.com" type="text" />
                </div>
                <button type="submit" className="axil-btn mb--15">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End .container --> */}
      </div>
    </>
  );
};

export default Newsletter;
