import React, { Fragment } from "react";
import Layout from "../core/Layout";
import BreadcrumbArea from "../components/BreadcrumbArea";

const Contact = () => {
  return (
    <Fragment>
      <Layout>
        <BreadcrumbArea location={"Contact Us"} title={"Get In Touch"} />
        <div className="axil-contact-page-area axil-section-gap">
          <div className="container">
            <div className="axil-contact-page">
              <div className="row row--30">
                <div className="col-lg-8">
                  <div className="contact-form">
                    <h3 className="title mb--10">
                      We would love to hear from you.
                    </h3>
                    <p>
                      If you’ve got great products your making or looking to
                      work with us then drop us a line.
                    </p>
                    <form
                      id="contact-form"
                      method="POST"
                      action="../../../../external.html?link=https://new.axilthemes.com/demo/template/etrade/mail.php"
                      className="axil-contact-form"
                    >
                      <div className="row row--10">
                        <div className="col-lg-4">
                          <div className="form-group">
                            <label for="contact-name">
                              Name <span>*</span>
                            </label>
                            <input
                              type="text"
                              name="contact-name"
                              id="contact-name"
                            />
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="form-group">
                            <label for="contact-phone">
                              Phone <span>*</span>
                            </label>
                            <input
                              type="text"
                              name="contact-phone"
                              id="contact-phone"
                            />
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="form-group">
                            <label for="contact-email">
                              E-mail <span>*</span>
                            </label>
                            <input
                              type="email"
                              name="contact-email"
                              id="contact-email"
                            />
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-group">
                            <label for="contact-message">Your Message</label>
                            <textarea
                              name="contact-message"
                              id="contact-message"
                              cols="1"
                              rows="2"
                            ></textarea>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-group mb--0">
                            <button
                              name="submit"
                              type="submit"
                              id="submit"
                              className="axil-btn btn-bg-primary"
                            >
                              Send Message
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="contact-location mb--40">
                    <h4 className="title mb--20">Our Store</h4>
                    <span className="address mb--20">
                      8212 E. Glen Creek Street Orchard Park, NY 14127, United
                      States of America
                    </span>
                    <span className="phone">Phone: +123 456 7890</span>
                    <span className="email">Email: Hello@etrade.com</span>
                  </div>
                  <div className="contact-career mb--40">
                    <h4 className="title mb--20">Careers</h4>
                    <p>
                      Instead of buying six things, one that you really like.
                    </p>
                  </div>
                  <div className="opening-hour">
                    <h4 className="title mb--20">Opening Hours:</h4>
                    <p>
                      Monday to Saturday: 9am - 10pm
                      <br /> Sundays: 10am - 6pm
                    </p>
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

export default Contact;
