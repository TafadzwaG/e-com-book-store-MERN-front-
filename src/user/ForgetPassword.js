import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <Fragment>
      <div className="axil-signin-area">
        <div className="signin-header">
          <div className="row align-items-center">
            <div className="col-xl-4 col-sm-6">
              <Link to="/" className="site-logo">
                <img
                  src="/template_files/assets/images/logo/logo.png"
                  alt="logo"
                />
              </Link>
            </div>
            <div className="col-md-2 d-lg-block d-none">
              <Link  to="/signin" className="back-btn">
                <i className="far fa-angle-left"></i>
              </Link>
            </div>
            <div className="col-xl-6 col-lg-4 col-sm-6">
              <div className="singin-header-btn">
                <p>Already a member?</p>
                <Link
                  to="/signin"
                  className="sign-up-btn axil-btn btn-bg-secondary"
                >
                  Sign In
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End Header --> */}

        <div className="row">
          <div className="col-xl-4 col-lg-6">
            <div className="axil-signin-banner bg_image bg_image--10">
              <h3 className="title">We Offer the Best Products</h3>
            </div>
          </div>
          <div className="col-lg-6 offset-xl-2">
            <div className="axil-signin-form-wrap">
              <div className="axil-signin-form">
                <h3 className="title">Forgot Password?</h3>
                <p className="b2 mb--55">
                  Enter the email address you used when you joined and we’ll
                  send you instructions to reset your password.
                </p>
                <form className="singin-form">
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      value="annie@example.com"
                    />
                  </div>
                  <div className="form-group">
                    <button
                      type="submit"
                      className="axil-btn btn-bg-primary submit-btn"
                    >
                      Send Reset Instructions
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ForgotPassword;
