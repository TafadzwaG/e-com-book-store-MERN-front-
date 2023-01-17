import React, { Fragment, useState } from "react";

const CouponForm = () => {
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
          <i className="fas fa-pencil"></i> Have a coupon?
          <a onClick={handleToggle} className="toggle-btn"
            style={{ cursor: "pointer", paddingLeft: "10px" }}
          >
            Click here to enter your code
            <i className="fas fa-angle-down"></i>
          </a>
        </div>

        <div
          className="axil-checkout-coupon toggle-open"
          style={{ display: !toggleForm ? "none" : "block" }}
        >
          <p>If you have a coupon code, please apply it below.</p>
          <div className="input-group">
            <input placeholder="Enter coupon code" type="text" />
            <div className="apply-btn">
              <button type="submit" className="axil-btn btn-bg-primary">
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CouponForm;
