import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const DashboardTabContainer = () => {


  const adminUser = useSelector((state) => state.auth.user);
  const { _id, name, email, createdAt } = adminUser;

  return (
    <Fragment>
      <div
        className="tab-pane fade show active"
        id="nav-dashboard"
        role="tabpanel"
      >
        <div className="axil-dashboard-overview">
          <div className="welcome-text">
            Hello {name} (not <span>Annie?</span> <Link to="/signin">Log Out</Link>)
          </div>
          <p>
            From your account dashboard you can view your recent orders, manage
            your shipping and billing addresses, and edit your password and
            account details.
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default DashboardTabContainer;
