import React, { Fragment, useEffect, useState } from "react";
import BackButton from "../../../components/BackButton";
import ButtonSimple from "../../../components/ButtonSimple";
import { API } from "../../../config";

const AccountDetailsTabContainer = () => {
  const [create, setCreate] = useState(false);

  const handleCreate = () => {
    if (!create) {
      setCreate(true);
    } else {
      setCreate(false);
    }
  };

  useEffect(() => {}, []);
  return (
    <Fragment>
      <div className="tab-pane fade" id="nav-account" role="tabpanel">
        <div className="col-lg-9">
          <div className="axil-dashboard-account">
            <form className="account-details-form">
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>First Name</label>
                    <input type="text" className="form-control" value="Annie" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>Last Name</label>
                    <input type="text" className="form-control" value="Mario" />
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-group mb--40">
                    <label>Country/ Region</label>
                    <select className="select2">
                      <option value="1">United Kindom (UK)</option>
                      <option value="1">United States (USA)</option>
                      <option value="1">United Arab Emirates (UAE)</option>
                      <option value="1">Australia</option>
                    </select>
                    <p className="b3 mt--10">
                      This will be how your name will be displayed in the
                      account section and in reviews
                    </p>
                  </div>
                </div>
                <div className="col-12">
                  <h5 className="title">Password Change</h5>
                  <div className="form-group">
                    <label>Password</label>
                    <input
                      type="password"
                      className="form-control"
                      value="123456789101112131415"
                    />
                  </div>
                  <div className="form-group">
                    <label>New Password</label>
                    <input type="password" className="form-control" />
                  </div>
                  <div className="form-group">
                    <label>Confirm New Password</label>
                    <input type="password" className="form-control" />
                  </div>
                  <div className="form-group mb--0">
                    <input
                      type="submit"
                      className="axil-btn"
                      value="Save Changes"
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AccountDetailsTabContainer;
