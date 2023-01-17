import React from "react";
import Tab from "./Tab";

const TabNav = () => {
  return (
    <div className="col-xl-3 col-md-4">
      <aside className="axil-dashboard-aside">
        <nav className="axil-dashboard-nav">
          <div className="nav nav-tabs" role="tablist">
            <Tab
              href={"#nav-dashboard"}
              title={"Dashboard"}
              icon={"fas fa-th-large"}
            />
            <Tab href={"#nav-users"} title={"Users"} icon={"fas fa-users"} />
            <Tab
              href={"#nav-categories"}
              title={"Categories"}
              icon={"fas fa-bars"}
            />
            <Tab href={"#nav-products"} title={"Products"} />

            <Tab
              href={"#nav-testimonials"}
              title={"Testimonials"}
              icon={"far fa-edit"}
            />
            <Tab
              href={"#nav-contact"}
              title={"Contact"}
              icon={"fas fa-address-card"}
            />
            <Tab href={"#nav-advert"} title={"Advert"} />
            <Tab href={"#nav-about"} title={"About"} icon={"fas fa-podcast"} />
            <Tab href={"#nav-cart"} title={"Cart"} icon={"fas fa-cart-plus"} />
            <Tab href={"#nav-wishlist"} title={"Wishlist"} />
            <Tab
              href={"#nav-account"}
              title={"Account Details"}
              icon={"fas fa-user"}
            />

            <a className="nav-item nav-link" href="sign-in.html">
              <i className="fal fa-sign-out"></i>Logout
            </a>
          </div>
        </nav>
      </aside>
    </div>
  );
};

export default TabNav;
