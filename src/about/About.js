import React from "react";
import Layout from "../core/Layout";
import BreadcrumbArea from "../components/BreadcrumbArea";
import Newsletter from "../components/Newsletter";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const About = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <>
      <Layout>
        <BreadcrumbArea location={"About Us"} title={"About Our Store"} />

        <div className="axil-about-area about-style-1 axil-section-gap ">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-4 col-lg-6">
                <div className="about-thumbnail">
                  <div className="thumbnail">
                    <img
                      src="/template_files/assets/images/about/about-01.png"
                      alt="About Us"
                    />
                  </div>
                </div>
              </div>
              <div className="col-xl-8 col-lg-6">
                <div className="about-content content-right">
                  <span className="title-highlighter highlighter-primary2">
                    {" "}
                    <i className="far fa-shopping-basket"></i>About Store
                  </span>
                  <h3 className="title">
                    Online shopping includes both buying things online.
                  </h3>
                  <span className="text-heading">
                    Salesforce B2C Commerce can help you create unified,
                    intelligent digital commerce experiences — both online and
                    in the store.
                  </span>
                  <div className="row">
                    <div className="col-xl-6">
                      <p>
                        Empower your sales teams with industry tailored
                        solutions that support manufacturers as they go digital,
                        and adapt to changing markets & customers faster by
                        creating new business.
                      </p>
                    </div>
                    <div className="col-xl-6">
                      <p className="mb--0">
                        Salesforce B2B Commerce offers buyers the seamless,
                        self-service experience of online shopping with all the
                        B2B
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="about-info-area">
          <div className="container">
            <div className="row row--20">
              <div className="col-lg-4">
                <div className="about-info-box">
                  <div className="thumb">
                    <img
                      src="/template_files/assets/images/about/shape-01.png"
                      alt="Shape"
                    />
                  </div>
                  <div className="content">
                    <h6 className="title">40,000+ Happy Customer</h6>
                    <p>
                      Empower your sales teams with industry tailored solutions
                      that support.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="about-info-box">
                  <div className="thumb">
                    <img
                      src="/template_files/assets/images/about/shape-02.png"
                      alt="Shape"
                    />
                  </div>
                  <div className="content">
                    <h6 className="title">16 Years of Experiences</h6>
                    <p>
                      Empower your sales teams with industry tailored solutions
                      that support.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="about-info-box">
                  <div className="thumb">
                    <img
                      src="/template_files/assets/images/about/shape-03.png"
                      alt="Shape"
                    />
                  </div>
                  <div className="content">
                    <h6 className="title">12 Awards Won</h6>
                    <p>
                      Empower your sales teams with industry tailored solutions
                      that support.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="axil-team-area bg-wild-sand">
          <div className="team-left-fullwidth">
            <div className="container ml--xxl-0">
              <div className="section-title-wrapper">
                <span className="title-highlighter highlighter-primary">
                  {" "}
                  <i className="fas fa-users"></i> Our Team
                </span>
                <h3 className="title">Expart Management Team</h3>
              </div>
              <div className="team-slide-activation slick-layout-wrapper--20 axil-slick-arrow  arrow-top-slide">
                <Slider {...settings}>
                  <div className="slick-single-layout">
                    <div className="axil-team-member">
                      <div className="thumbnail">
                        <img
                          src="/template_files/assets/images/team/team-01.png"
                          alt="Cody Fisher"
                        />
                      </div>
                      <div className="team-content">
                        <span className="subtitle">Founder</span>
                        <h5 className="title">Rosalina D. Willson</h5>
                      </div>
                    </div>
                  </div>
                  <div className="slick-single-layout">
                    <div className="axil-team-member">
                      <div className="thumbnail">
                        <img
                          src="/template_files/assets/images/team/team-02.png"
                          alt="Cody Fisher"
                        />
                      </div>
                      <div className="team-content">
                        <span className="subtitle">CEO</span>
                        <h5 className="title">Ukolilix X. Xilanorix</h5>
                      </div>
                    </div>
                  </div>
                  <div className="slick-single-layout">
                    <div className="axil-team-member">
                      <div className="thumbnail">
                        <img
                          src="/template_files/assets/images/team/team-03.png"
                          alt="Cody Fisher"
                        />
                      </div>
                      <div className="team-content">
                        <span className="subtitle">Designer</span>
                        <h5 className="title">Alonso M. Miklonax</h5>
                      </div>
                    </div>
                  </div>
                  <div className="slick-single-layout">
                    <div className="axil-team-member">
                      <div className="thumbnail">
                        <img
                          src="/template_files/assets/images/team/team-04.png"
                          alt="Cody Fisher"
                        />
                      </div>
                      <div className="team-content">
                        <span className="subtitle">Designer</span>
                        <h5 className="title">Alonso M. Miklonax</h5>
                      </div>
                    </div>
                  </div>
                  <div className="slick-single-layout">
                    <div className="axil-team-member">
                      <div className="thumbnail">
                        <img
                          src="/template_files/assets/images/team/team-02.png"
                          alt="Cody Fisher"
                        />
                      </div>
                      <div className="team-content">
                        <span className="subtitle">Designer</span>
                        <h5 className="title">Alonso M. Miklonax</h5>
                      </div>
                    </div>
                  </div>
                  <div className="slick-single-layout">
                    <div className="axil-team-member">
                      <div className="thumbnail">
                        <img
                          src="/template_files/assets/images/team/team-02.png"
                          alt="Cody Fisher"
                        />
                      </div>
                      <div className="team-content">
                        <span className="subtitle">Designer</span>
                        <h5 className="title">Alonso M. Miklonax</h5>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>

        <div className="axil-about-area about-style-2 ">
          <div className="container">
            <div className="row align-items-center mb--80 mb_sm--60">
              <div className="col-lg-5">
                <div className="about-thumbnail">
                  <img
                    src="/template_files/assets/images/about/about-02.png"
                    alt="about"
                  />
                </div>
              </div>
              <div className="col-lg-7">
                <div className="about-content content-right">
                  <span className="subtitle">Features #01</span>
                  <h4 className="title">Solutions that work together</h4>
                  <p>
                    Publish your eCommerce site quickly with our easy-to-use
                    store builder— no coding required. Migrate your items from
                    your point of sale system or turn your Instagram feed into a
                    shopping site and start selling fast. Square Online works
                    for all kinds of businesses—retail, restaurants, services.
                  </p>
                  <Link to="/contact" className="axil-btn btn-outline">
                    Get In Touch
                  </Link>
                </div>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-lg-5 order-lg-2">
                <div className="about-thumbnail">
                  <img
                    src="/template_files/assets/images/about/about-03.png"
                    alt="about"
                  />
                </div>
              </div>
              <div className="col-lg-7 order-lg-1">
                <div className="about-content content-left">
                  <span className="subtitle">Features #01</span>
                  <h4 className="title">Solutions that work together</h4>
                  <p>
                    Publish your eCommerce site quickly with our easy-to-use
                    store builder— no coding required. Migrate your items from
                    your point of sale system or turn your Instagram feed into a
                    shopping site and start selling fast. Square Online works
                    for all kinds of businesses—retail, restaurants, services.
                  </p>
                  <Link to="/contact" className="axil-btn btn-outline">
                    Get In Touch
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div  className="axil-section-gap"></div>
        <Newsletter />
      </Layout>
    </>
  );
};

export default About;
