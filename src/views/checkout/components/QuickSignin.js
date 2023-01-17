import React, { Fragment, useState } from "react";

const QuickSignin = () => {
  const [toggleForm, setToggleForm] = useState(false);

  const handleToggle = () => {
    if (!toggleForm) {
      setToggleForm(true);
    } else {
      setToggleForm(false);
    }
  };

  return (
    <Fragment>
      <div className="axil-toggle-box">
        <div className={`toggle-bar ${!toggleForm ? "" : "active"}`}>
          <i className="fas fa-user"></i> Returning customer?
          <a
            onClick={handleToggle}
            className="toggle-btn"
            style={{ cursor: "pointer" ,paddingLeft: "10px"}}
          >
            Click here to login <i className="fas fa-angle-down"></i>
          </a>
        </div>
        <div
          className="axil-checkout-login toggle-open"
          style={{ display: !toggleForm ? "none" : "block" }}
        >
          <p>If you didn't Logged in, Please Log in first.</p>
          <div className="signin-box">
            <div className="form-group">
              <label>Email</label>
              <input type="email" className="form-control" name="email" />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" className="form-control" name="password" />
            </div>
            <div className="form-group mb--0">
              <button
                type="submit"
                className="axil-btn btn-bg-primary submit-btn"
              >
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default QuickSignin;
