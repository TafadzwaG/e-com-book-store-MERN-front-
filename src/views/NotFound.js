import React from "react";
import { Link } from "react-router-dom";

const Notfound = () => {
  return (
    <section className="error-page onepage-screen-area">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="content">
              <span className="title-highlighter highlighter-secondary">
                {" "}
                <i className="fal fa-exclamation-circle"></i> Oops! Somthing's
                missing.
              </span>
              <h1 className="title">Page not found</h1>
              <p>
                It seems like we dont find what you searched. The page you were
                looking for doesn't exist, isn't available loading incorrectly.
              </p>
              <Link
                to="/"
                className="axil-btn btn-bg-secondary right-icon"
              >
                Back To Home <i className="fal fa-long-arrow-right"></i>
              </Link>
            </div>
          </div>
          <div className="col-lg-6">
            <div
              className="thumbnail"
              data-sal="zoom-in"
              data-sal-duration="800"
              data-sal-delay="400"
            >
              <img
                src="/template_files/assets/images/others/404.png"
                alt="404"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Notfound;
