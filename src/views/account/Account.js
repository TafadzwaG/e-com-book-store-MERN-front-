import React, { Fragment } from "react";
import BreadcrumbArea from "../../components/BreadcrumbArea";
import Layout from "../../core/Layout";

const Account = () => {
  return (
    <Fragment>
      <Layout>
        <BreadcrumbArea location={"Accout"} title={"User Account"} />
        <div className="axil-dashboard-area axil-section-gap">
          <div className="container">
            <div className="axil-dashboard-warp">
              <div className="axil-dashboard-author">
                <div className="media">
                  <div className="thumbnail">
                    <img
                      src="/template_files/assets/images/product/author1.png"
                      alt="Hello Annie"
                    />
                  </div>
                  <div className="media-body">
                    <h5 className="title mb-0">Hello Annie</h5>
                    <span className="joining-date">
                      eTrade Member Since Sep 2020
                    </span>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-3 col-md-4">
                  <aside className="axil-dashboard-aside">
                    <nav className="axil-dashboard-nav">
                      <div className="nav nav-tabs" role="tablist">
                        <a
                          className="nav-item nav-link active"
                          data-bs-toggle="tab"
                          href="#nav-dashboard"
                          role="tab"
                          aria-selected="true"
                        >
                          <i className="fas fa-th-large"></i>Dashboard
                        </a>
                        <a
                          className="nav-item nav-link"
                          data-bs-toggle="tab"
                          href="#nav-orders"
                          role="tab"
                          aria-selected="false"
                        >
                          <i className="fas fa-shopping-basket"></i>Orders
                        </a>
                        <a
                          className="nav-item nav-link"
                          data-bs-toggle="tab"
                          href="#nav-downloads"
                          role="tab"
                          aria-selected="false"
                        >
                          <i className="fas fa-file-download"></i>Downloads
                        </a>
                        <a
                          className="nav-item nav-link"
                          data-bs-toggle="tab"
                          href="#nav-address"
                          role="tab"
                          aria-selected="false"
                        >
                          <i className="fas fa-home"></i>Addresses
                        </a>
                        <a
                          className="nav-item nav-link"
                          data-bs-toggle="tab"
                          href="#nav-account"
                          role="tab"
                          aria-selected="false"
                        >
                          <i className="fas fa-user"></i>Account Details
                        </a>
                        <a className="nav-item nav-link" href="sign-in.html">
                          <i className="fal fa-sign-out"></i>Logout
                        </a>
                      </div>
                    </nav>
                  </aside>
                </div>
                <div className="col-xl-9 col-md-8">
                  <div className="tab-content">
                    <div
                      className="tab-pane fade show active"
                      id="nav-dashboard"
                      role="tabpanel"
                    >
                      <div className="axil-dashboard-overview">
                        <div className="welcome-text">
                          Hello Annie (not <span>Annie?</span>{" "}
                          <a href="sign-in.html">Log Out</a>)
                        </div>
                        <p>
                          From your account dashboard you can view your recent
                          orders, manage your shipping and billing addresses,
                          and edit your password and account details.
                        </p>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="nav-orders"
                      role="tabpanel"
                    >
                      <div className="axil-dashboard-order">
                        <div className="table-responsive">
                          <table className="table">
                            <thead>
                              <tr>
                                <th scope="col">Order</th>
                                <th scope="col">Date</th>
                                <th scope="col">Status</th>
                                <th scope="col">Total</th>
                                <th scope="col">Actions</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <th scope="row">#6523</th>
                                <td>September 10, 2020</td>
                                <td>Processing</td>
                                <td>$326.63 for 3 items</td>
                                <td>
                                  <a href="#" className="axil-btn view-btn">
                                    View
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <th scope="row">#6523</th>
                                <td>September 10, 2020</td>
                                <td>On Hold</td>
                                <td>$326.63 for 3 items</td>
                                <td>
                                  <a href="#" className="axil-btn view-btn">
                                    View
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <th scope="row">#6523</th>
                                <td>September 10, 2020</td>
                                <td>Processing</td>
                                <td>$326.63 for 3 items</td>
                                <td>
                                  <a href="#" className="axil-btn view-btn">
                                    View
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <th scope="row">#6523</th>
                                <td>September 10, 2020</td>
                                <td>Processing</td>
                                <td>$326.63 for 3 items</td>
                                <td>
                                  <a href="#" className="axil-btn view-btn">
                                    View
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <th scope="row">#6523</th>
                                <td>September 10, 2020</td>
                                <td>Processing</td>
                                <td>$326.63 for 3 items</td>
                                <td>
                                  <a href="#" className="axil-btn view-btn">
                                    View
                                  </a>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="nav-downloads"
                      role="tabpanel"
                    >
                      <div className="axil-dashboard-order">
                        <p>You don't have any download</p>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="nav-address"
                      role="tabpanel"
                    >
                      <div className="axil-dashboard-address">
                        <p className="notice-text">
                          The following addresses will be used on the checkout
                          page by default.
                        </p>
                        <div className="row row--30">
                          <div className="col-lg-6">
                            <div className="address-info mb--40">
                              <div className="addrss-header d-flex align-items-center justify-content-between">
                                <h4 className="title mb-0">Shipping Address</h4>
                                <a href="#" className="address-edit">
                                  <i className="far fa-edit"></i>
                                </a>
                              </div>
                              <ul className="address-details">
                                <li>Name: Annie Mario</li>
                                <li>Email: annie@example.com</li>
                                <li>Phone: 1234 567890</li>
                                <li className="mt--30">
                                  7398 Smoke Ranch Road <br />
                                  Las Vegas, Nevada 89128
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="address-info">
                              <div className="addrss-header d-flex align-items-center justify-content-between">
                                <h4 className="title mb-0">Billing Address</h4>
                                <a href="#" className="address-edit">
                                  <i className="far fa-edit"></i>
                                </a>
                              </div>
                              <ul className="address-details">
                                <li>Name: Annie Mario</li>
                                <li>Email: annie@example.com</li>
                                <li>Phone: 1234 567890</li>
                                <li className="mt--30">
                                  7398 Smoke Ranch Road <br />
                                  Las Vegas, Nevada 89128
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="nav-account"
                      role="tabpanel"
                    >
                      <div className="col-lg-9">
                        <div className="axil-dashboard-account">
                          <form className="account-details-form">
                            <div className="row">
                              <div className="col-lg-6">
                                <div className="form-group">
                                  <label>First Name</label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    value="Annie"
                                  />
                                </div>
                              </div>
                              <div className="col-lg-6">
                                <div className="form-group">
                                  <label>Last Name</label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    value="Mario"
                                  />
                                </div>
                              </div>
                              <div className="col-12">
                                <div className="form-group mb--40">
                                  <label>Country/ Region</label>
                                  <select className="select2">
                                    <option value="1">
                                      United Kindom (UK)
                                    </option>
                                    <option value="1">
                                      United States (USA)
                                    </option>
                                    <option value="1">
                                      United Arab Emirates (UAE)
                                    </option>
                                    <option value="1">Australia</option>
                                  </select>
                                  <p className="b3 mt--10">
                                    This will be how your name will be displayed
                                    in the account section and in reviews
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
                                  <input
                                    type="password"
                                    className="form-control"
                                  />
                                </div>
                                <div className="form-group">
                                  <label>Confirm New Password</label>
                                  <input
                                    type="password"
                                    className="form-control"
                                  />
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </Fragment>
  );
};

export default Account;
