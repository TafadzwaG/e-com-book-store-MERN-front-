import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";
import { API } from "../config";

const Signup = () => {
  const dispatch = useDispatch();

  const [signupValues, setSignupValues] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    success: false,
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (name) => (event) => {
    setSignupValues({
      ...signupValues,
      error: false,
      [name]: event.target.value,
    });
  };

  const { name, email, password, error, success } = signupValues;
  const signup = (user) => {
    setIsLoading(true);
    return fetch(`${API}/signup`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => {
        setIsLoading(false);
        return response.json();
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      });
  };

  const onSubmitSignup = (event) => {
    //Prevent Default of browser
    event.preventDefault();
    setSignupValues({ ...signupValues, error: false });
    signup({ name, email, password }).then((data) => {
      console.log(data.errors);
      if (data.errors) {
        setSignupValues({
          ...signupValues,
          error: data.errors[0],
          success: false,
        });
      } else {
        setSignupValues({
          ...signupValues,
          name: "",
          email: "",
          password: "",
          error: "",
          success: true,
        });
      }
    });
  };

  const showError = () => (
    <div
      className="alert alert-danger"
      style={{ display: error ? "" : "none" }}
    >
      {error}
    </div>
  );

  const showSuccess = () => (
    <div
      className="alert alert-info"
      style={{ display: success ? "" : "none" }}
    >
      Accout Successfully Created <Link to="/signin" style={{paddingLeft: '10px'}}>Signin</Link>
    </div>
  );

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
              {showSuccess()}
              {showError()}
              <form className="singin-form">
                <div className="form-group">
                  <label>User Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    placeholder="Tafadzwa"
                    onChange={handleChange("name")}
                    value={name}
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="example@gmail.com"
                    onChange={handleChange("email")}
                    value={email}
                  />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    placeholder="************"
                    onChange={handleChange("password")}
                    value={password}
                  />
                </div>
                {/* {JSON.stringify(signupValues)} */}
                <div className="form-group">
                  {!isLoading ? (
                    <button
                      type="submit"
                      className="axil-btn btn-bg-primary submit-btn"
                      onClick={onSubmitSignup}
                    >
                      Create Account
                    </button>
                  ) : (
                    <Loading />
                  )}
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
