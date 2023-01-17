import React, { useState, useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import QuickViewModal from "../components/modals/QuickViewModal";
import SearchModal from "../components/modals/SearchModal";
import { authActions } from "../redux-store/auth-store";

const isActive = (history, path) => {
  if (history.location.pathname === path) {
    return { color: "#ff9900" };
  } else {
    return { color: "#ffffff" };
  }
};

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scroll, setScroll] = useState(false);
  const isAuthenticated = useSelector((state) => state.auth.isAuth);
  const dispatch = useDispatch();
  const [isAdmin, setIsAdmin] = useState(false);

  const userRole = useSelector((state) => state.auth.role ) ;

  const signOut = () => {
    dispatch(authActions.setLogout());
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });

    if (userRole === 1) {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }

   
  }, [userRole]);

  const toggleUserModal = () => {
    if (!isOpen) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  };

  const onChangeHandler = () => {

  }


  const cartQuantity = useSelector((state) => state.cart.cartQuantity)

  return (
    <>
      <header className="header axil-header header-style-5">
        <div className="axil-header-top">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-sm-6 col-12">
                <div className="header-top-dropdown">
                  <div className="dropdown">
                    <button
                      className="dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      English
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          English
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="dropdown">
                    <button
                      className="dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      USD
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          USD
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-sm-6 col-12">
                <div className="header-top-link">
                  <ul className="quick-link">
                    {isAuthenticated ? (
                      <Fragment>
                        {isAdmin ? (
                          <Fragment>
                            <li>
                              <Link to="/dashboard">Dashboard</Link>
                            </li>
                            <li>
                              <a onClick={signOut}>Logout</a>
                            </li>
                          </Fragment>
                        ) : (
                          <li>
                            <a onClick={signOut}>Logout</a>
                          </li>
                        )}
                      </Fragment>
                    ) : (
                      <Fragment>
                        <li>
                          <Link to="/signup">Join Us</Link>
                        </li>
                        <li>
                          <Link to="/signin">Sign In</Link>
                        </li>
                      </Fragment>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Start Mainmenu Area  --> */}
        <div id="axil-sticky-placeholder"></div>
        <div className={scroll ? "axil-mainmenu axil-sticky" : "axil-mainmenu"}>
          <div className="container">
            <div className="header-navbar">
              <div className="header-brand">
                <Link to="/" className="logo logo-dark">
                  <img
                    src="/template_files/assets/images/logo/logo.png"
                    alt="Site Logo"
                  />
                </Link>
                <Link to="/" className="logo logo-light">
                  <img
                    src="/template_files/assets/images/logo/logo-light.png"
                    alt="Site Logo"
                  />
                </Link>
              </div>
              <div className="header-main-nav">
                {/* <!-- Start Mainmanu Nav --> */}
                <nav className="mainmenu-nav">
                  <button className="mobile-close-btn mobile-nav-toggler">
                    <i className="fas fa-times"></i>
                  </button>
                  <div className="mobile-nav-brand">
                    <a href="index.html" className="logo">
                      <img
                        src="/template_files/assets/images/logo/logo.png"
                        alt="Site Logo"
                      />
                    </a>
                  </div>
                  <ul className="mainmenu">
                    <li className="">
                      <NavLink  to="/">
                        Home
                      </NavLink>
                    </li>
                    <li className="">
                      <NavLink  to="/shop">
                        Shop
                      </NavLink>
                    </li>

                    <li>
                      <NavLink  to="/about">
                        About
                      </NavLink>
                    </li>

                    <li>
                      <NavLink  to="/contact">
                        Contact
                      </NavLink>
                    </li>
                  </ul>
                </nav>
                {/* <!-- End Mainmanu Nav --> */}
              </div>
              <div className="header-action">
                <ul className="action-list">
                  <li className="axil-search d-xl-block d-none">
                    <input
                      type="search"
                      className="placeholder product-search-input"
                      name="search2"
                      id="search2"
                      value=""
                      onChange={onChangeHandler}
                      maxLength="128"
                      placeholder="What are you looking for?"
                      autoComplete="off"
                    />
                    <button type="submit" className="icon wooc-btn-search">
                      <i className="flaticon-magnifying-glass"></i>
                    </button>
                  </li>
                  <li className="axil-search d-xl-none d-block">
                    <a
                      href=""
                      className="header-search-icon"
                      title="Search"
                    >
                      <i className="flaticon-magnifying-glass"></i>
                    </a>
                  </li>
                  <li className="wishlist">
                    <Link to="/wishlist">
                      <i className="flaticon-heart"></i>
                    </Link>
                  </li>
                  <li className="shopping-cart">
                    <a className="cart-dropdown-btn">
                      <span className="cart-count">{ cartQuantity }</span>
                      <i className="flaticon-shopping-cart"></i>
                    </a>
                  </li>
                  <li className="my-account">
                    <a
                      className={`${isOpen ? "open" : ""}`}
                      onClick={toggleUserModal}
                    >
                      <i className="flaticon-person"></i>
                    </a>
                    <div
                      className={`my-account-dropdown ${isOpen ? "open" : ""}`}
                    >
                      <span className="title">QUICKLINKS</span>
                      <ul>
                        <li>
                          <Link to="/account">My Account</Link>
                        </li>
                      </ul>
                      {isAuthenticated ? (
                        <a
                          onClick={signOut}
                          className="axil-btn btn-bg-primary"
                        >
                          Logout
                        </a>
                      ) : (
                        <Fragment>
                          <Link
                            to="/signin"
                            className="axil-btn btn-bg-primary"
                          >
                            Login
                          </Link>
                          <div className="reg-footer text-center">
                            No account yet?{" "}
                            <Link to="/signup" className="btn-link">
                              REGISTER HERE.
                            </Link>
                          </div>
                        </Fragment>
                      )}
                    </div>
                  </li>
                  <li className="axil-mobile-toggle">
                    <button className="menu-btn mobile-nav-toggler">
                      <i className="flaticon-menu-2"></i>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End Mainmenu Area --> */}
        <div className="header-top-campaign">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-5 col-lg-6 col-md-10">
                <div className="header-campaign-activation axil-slick-arrow arrow-both-side header-campaign-arrow">
                  <div className="slick-slide" style={{ display: "block" }}>
                    <div className="campaign-content">
                      <p>
                        STUDENT NOW GET 10% OFF : <a href="#">GET OFFER</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <SearchModal />
      <QuickViewModal />
    </>
  );
};

export default Menu;
