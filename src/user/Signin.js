import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
import { API } from "../config";
import { authActions } from "../redux-store/auth-store";

const Signin = () => {
  const [signinValues, setSigninValues] = useState({
    email: "tafadzwagashirah@gmail.com",
    password: "Themaster@99",
    error: "",
    success: false,
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);
  const [redirectToHome, setRedirectToHome] = useState(false);

  const { email, password, error, success } = signinValues;

  const handleChange = (name) => (event) => {
    setSigninValues({
      ...signinValues,
      error: false,
      [name]: event.target.value,
    });
  };

  useEffect(() => {
    if (redirectToHome) {
      navigate("/");
    } else {
      return;
    }
  }, [redirectToHome]);

  const signin = (user) => {
    setIsLoading(true);
    return fetch(`${API}/signin`, {
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

  const onSubmitSignin = (event) => {
    //Prevent Default of browser
    event.preventDefault();
    setSigninValues({ ...signinValues, error: false });
    signin({ email, password }).then((data) => {
      if (data.error) {
        setSigninValues({
          ...signinValues,
          error: data.error,
          success: false,
        });
      } else {
        console.log(data.user.role)
        dispatch(
          authActions.setLogin({
            user: data.user,
            token: data.token,
            isAuth: true,
            role: data.user.role
          })
        );

        setRedirectToHome(true);
        setSigninValues({
          ...signinValues,
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
      User Signin Successful{" "}
    </div>
  );

  return (
    <div class="axil-signin-area">
      {/* <!-- Start Header --> */}
      <div className="signin-header">
        <div className="row align-items-center">
          <div className="col-sm-4">
            <Link to="/" className="site-logo">
              <img
                src="/template_files/assets/images/logo/logo.png"
                alt="logo"
              />
            </Link>
          </div>
          <div className="col-sm-8">
            <div className="singin-header-btn">
              <p>Not a member?</p>
              <Link
                to="/signup"
                className="axil-btn btn-bg-secondary sign-up-btn"
              >
                Sign Up Now
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Header --> */}

      <div className="row">
        <div className="col-xl-4 col-lg-6">
          <div className="axil-signin-banner bg_image bg_image--9">
            <h3 className="title">We Offer the Best Products</h3>
          </div>
        </div>
        <div className="col-lg-6 offset-xl-2">
          <div className="axil-signin-form-wrap">
            <div className="axil-signin-form">
              <h3 className="title">Sign in to eTrade.</h3>
              <p className="b2 mb--55">Enter your detail below</p>

              {showSuccess()}
              {showError()}
              <form className="singin-form">
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
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
                    onChange={handleChange("password")}
                    value={password}
                  />
                </div>
                <div className="form-group d-flex align-items-center justify-content-between">
                  {!isLoading ? (
                    <button
                      type="submit"
                      className="axil-btn btn-bg-primary submit-btn"
                      onClick={onSubmitSignin}
                    >
                      Sign In
                    </button>
                  ) : (
                    <Loading />
                  )}
                  <Link to="/forgot-password" className="forgot-btn">
                    Forget password?
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
