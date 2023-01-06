import React from "react";

const Footer = () => {
  return (
    <>
      {/* <!-- Start Footer Area  --> */}
      <footer className="axil-footer-area footer-style-1 footer-dark">
        {/* <!-- Start Footer Top Area  --> */}
        <div className="footer-top">
          <div className="container">
            <div className="row">
              {/* <!-- Start Single Widget  --> */}
              <div className="col-md-3 col-sm-12">
                <div className="axil-footer-widget">
                  <div className="logo mb--30">
                    <a href="index.html">
                      <img
                        className="light-logo"
                        src="/template_files/assets/images/logo/logo-light.png"
                        alt="Logo Images"
                      />
                    </a>
                  </div>
                  <div className="inner">
                    <p>685 Market Street Las Vegas, LA 95820, United States.</p>
                    <div className="social-share">
                      <a href="#">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a href="#">
                        <i className="fab fa-instagram"></i>
                      </a>
                      <a href="#">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a href="#">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                      <a href="#">
                        <i className="fab fa-discord"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- End Single Widget  -->
                    <!-- Start Single Widget  --> */}
              <div className="col-md-3 col-sm-4">
                <div className="axil-footer-widget">
                  <h5 className="widget-title">ABOUT</h5>
                  <div className="inner">
                    <ul>
                      <li>
                        <a href="about-us.html">About</a>
                      </li>
                      <li>
                        <a href="about-us.html">Who We Are</a>
                      </li>
                      <li>
                        <a href="blog.html">Latest Post</a>
                      </li>
                      <li>
                        <a href="shop-sidebar.html">New Arraival</a>
                      </li>
                      <li>
                        <a href="contact.html">Contact Us</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* <!-- End Single Widget  -->
                    <!-- Start Single Widget  --> */}
              <div className="col-md-3 col-sm-4">
                <div className="axil-footer-widget">
                  <h5 className="widget-title">ACCOUNT</h5>
                  <div className="inner">
                    <ul>
                      <li>
                        <a href="my-account.html">My Account</a>
                      </li>
                      <li>
                        <a href="sign-up.html">Login / Register</a>
                      </li>
                      <li>
                        <a href="cart.html">Cart</a>
                      </li>
                      <li>
                        <a href="wishlist.html">Wishlist</a>
                      </li>
                      <li>
                        <a href="shop.html">Shop</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* <!-- End Single Widget  -->
                    <!-- Start Single Widget  --> */}
              <div className="col-md-3 col-sm-4">
                <div className="axil-footer-widget">
                  <h5 className="widget-title">SUPPORT</h5>
                  <div className="inner">
                    <ul>
                      <li>
                        <a href="privacy-policy.html">Privacy Policy</a>
                      </li>
                      <li>
                        <a href="terms-of-service.html">Terms Of Use</a>
                      </li>
                      <li>
                        <a href="#">FAQ</a>
                      </li>
                      <li>
                        <a href="contact.html">Contact</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* <!-- End Single Widget  --> */}
            </div>
          </div>
        </div>
        {/* <!-- End Footer Top Area  -->
        <!-- Start Copyright Area  --> */}
        <div className="copyright-area copyright-default separator-top">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-7 col-lg-12">
                <div className="copyright-left d-flex flex-wrap justify-content-xl-start justify-content-center">
                  <ul className="quick-link">
                    <li>
                      <a href="privacy-policy.html">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="terms-of-service.html">Terms of Service</a>
                    </li>
                  </ul>
                  <ul className="quick-link">
                    <li>
                      © 2022. All rights reserved by{" "}
                      <a
                        target="_blank"
                        href="../../../../external.html?link=https://axilthemes.com/"
                      >
                        Axilthemes
                      </a>
                      .
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-5 col-lg-12">
                <div className="copyright-right d-flex flex-wrap justify-content-xl-end justify-content-center align-items-center">
                  <span className="card-text">Accept For</span>
                  <ul className="payment-icons-bottom quick-link">
                    <li>
                      <img
                        src="/template_files/assets/images/icons/cart/cart-1.png"
                        alt="paypal cart"
                      />
                    </li>
                    <li>
                      <img
                        src="/template_files/assets/images/icons/cart/cart-2.png"
                        alt="paypal cart"
                      />
                    </li>
                    <li>
                      <img
                        src="/template_files/assets/images/icons/cart/cart-3.png"
                        alt="paypal cart"
                      />
                    </li>
                    <li>
                      <img
                        src="/template_files/assets/images/icons/cart/cart-6.png"
                        alt="paypal cart"
                      />
                    </li>
                    <li>
                      <img
                        src="/template_files/assets/images/icons/cart/cart-5.png"
                        alt="paypal cart"
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End Copyright Area  --> */}
      </footer>
      {/* <!-- End Footer Area  --> */}
    </>
  );
};

export default Footer;
