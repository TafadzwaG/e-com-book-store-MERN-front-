import React from "react";
import { Link } from "react-router-dom";
import { API } from "../config";

const Signup = () => {
  return (
    <div class="axil-signin-area">
      {/* <!-- Start Header --> */}
      <div className="signin-header">
        <div className="row align-items-center">
          <div className="col-md-6">
            <Link to="/" className="site-logo">
              <img
                src="/template_files/assets/images/logo/logo.png"
                alt="logo"
              />
            </Link>
          </div>
          <div className="col-md-6">
            <div className="singin-header-btn">
              <p>Already a member?</p>
              <Link
                to="/signin"
                className="axil-btn btn-bg-secondary sign-up-btn"
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
              <h3 className="title">I'm New Here</h3>
              <p className="b2 mb--55">Enter your detail below</p>
              <form className="singin-form">
                <div className="form-group">
                  <label>User Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="username"
                    value="anniemario"
                  />
                </div>
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
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    value="123456789"
                  />
                </div>
                <div className="form-group">
                  <button
                    type="submit"
                    className="axil-btn btn-bg-primary submit-btn"
                  >
                    Create Account
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
