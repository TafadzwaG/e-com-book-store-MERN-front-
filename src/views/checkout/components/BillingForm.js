import React, { Fragment, useState } from "react";

const BillingForm = () => {
  const [toggleDifferentAddress, setToggleDifferentAddress] = useState(false);

  const handleToggle = () => {
    if (!toggleDifferentAddress) {
      setToggleDifferentAddress(true);
    } else {
      setToggleDifferentAddress(false);
    }
  };

  return (
    <Fragment>
      <div className="axil-checkout-billing">
        <h4 className="title mb--40">Billing details</h4>
        <div className="row">
          <div className="col-lg-6">
            <div className="form-group">
              <label>
                First Name <span>*</span>
              </label>
              <input type="text" id="first-name" placeholder="Adam" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group">
              <label>
                Last Name <span>*</span>
              </label>
              <input type="text" id="last-name" placeholder="John" />
            </div>
          </div>
        </div>
        <div className="form-group">
          <label>Company Name</label>
          <input type="text" id="company-name" />
        </div>
        <div className="form-group">
          <label>
            Country/ Region <span>*</span>
          </label>
          <select id="Region">
            <option value="3">Australia</option>
            <option value="4">England</option>
            <option value="6">New Zealand</option>
            <option value="5">Switzerland</option>
            <option value="1">United Kindom (UK)</option>
            <option value="2">United States (USA)</option>
          </select>
        </div>
        <div className="form-group">
          <label>
            Street Address <span>*</span>
          </label>
          <input
            type="text"
            id="address1"
            className="mb--15"
            placeholder="House number and street name"
          />
          <input
            type="text"
            id="address2"
            placeholder="Apartment, suite, unit, etc. (optonal)"
          />
        </div>
        <div className="form-group">
          <label>
            Town/ City <span>*</span>
          </label>
          <input type="text" id="town" />
        </div>
        <div className="form-group">
          <label>Country</label>
          <input type="text" id="country" />
        </div>
        <div className="form-group">
          <label>
            Phone <span>*</span>
          </label>
          <input type="tel" id="phone" />
        </div>
        <div className="form-group">
          <label>
            Email Address <span>*</span>
          </label>
          <input type="email" id="email" />
        </div>
        <div className="form-group input-group">
          <input type="checkbox" id="checkbox1" name="account-create" />
          <label for="checkbox1">Create an account</label>
        </div>
        <div className="form-group different-shippng">
          <div
            className={`toggle-bar ${toggleDifferentAddress ? "active" : ""}`}
          >
            <a onClick={handleToggle} className="toggle-btn">
              <input type="checkbox" id="checkbox2" name="diffrent-ship" />
              <label for="checkbox2">Ship to a different address?</label>
            </a>
          </div>
          <div
            className="toggle-open"
            style={{ display: toggleDifferentAddress ? "block" : "none" }}
          >
            <div className="form-group">
              <label>
                Country/ Region <span>*</span>
              </label>
              <select id="Region">
                <option value="3">Australia</option>
                <option value="4">England</option>
                <option value="6">New Zealand</option>
                <option value="5">Switzerland</option>
                <option value="1">United Kindom (UK)</option>
                <option value="2">United States (USA)</option>
              </select>
            </div>
            <div className="form-group">
              <label>
                Street Address <span>*</span>
              </label>
              <input
                type="text"
                id="address1"
                className="mb--15"
                placeholder="House number and street name"
              />
              <input
                type="text"
                id="address2"
                placeholder="Apartment, suite, unit, etc. (optonal)"
              />
            </div>
            <div className="form-group">
              <label>
                Town/ City <span>*</span>
              </label>
              <input type="text" id="town" />
            </div>
            <div className="form-group">
              <label>Country</label>
              <input type="text" id="country" />
            </div>
            <div className="form-group">
              <label>
                Phone <span>*</span>
              </label>
              <input type="tel" id="phone" />
            </div>
          </div>
        </div>
        <div className="form-group">
          <label>Other Notes (optional)</label>
          <textarea
            id="notes"
            rows="2"
            placeholder="Notes about your order, e.g. speacial notes for delivery."
          ></textarea>
        </div>
      </div>
    </Fragment>
  );
};

export default BillingForm;
