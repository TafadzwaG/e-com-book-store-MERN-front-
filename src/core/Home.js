import React, { useEffect } from "react";
import Menu from "./Menu";
import Layout from "./Layout";
import Testimonial from "../components/Testimonial";
import Newsletter from "../components/Newsletter";
import Service from "../components/Service";
import BaseSectionLayout from "../sections/BaseSectionLayout";
import ExploreProducts from "../sections/ExploreProducts";
import BestSellers from "../sections/BestSellers";
import { Link } from "react-router-dom";
import NewArrivalCard from "../views/product/cards/NewArrivalCard";
import BannerSlider from "../components/BannerSlider";
import Slider from "react-slick";
import NewArrivalSection from "../sections/NewArrivalSection";
import WhyUsSection from "../sections/WhyUsSection";
import PostSection from "../sections/PostSection";
import AboutUsSection from "../sections/AboutUsSection";
import CategorySlider from "../components/CategorySlider";
import { getUserCart } from "../services/api-services";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../redux-store/cart-store";

const Home = () => {
  var testimonialSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
  };

  const userId = useSelector((state) => state.auth.user._id);
  const token = useSelector((state) => state.auth.token);

  const dispatch = useDispatch();

  const init = () => {
    getUserCart(userId, token)
      .then((data) => {
        console.log("User Cart", data);

        dispatch(cartActions.setCartFromApi(data));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    init();
  }, []);
  return (
    <>
      <Layout>
        <main className="main-wrapper">
          {/* <!-- Start Categorie Area  --> */}
          <div className="container">
            <CategorySlider />
          </div>
          {/* <!-- End Categorie Area  -->

                <!-- Start Slider Area --> */}
          <div className="axil-main-slider-area main-slider-style-5">
            <div className="container">
              <div className="slider-box-wrap">
                <BannerSlider />
              </div>
            </div>
          </div>

          {/* <!-- End Flash Sale Area  --> */}

          {/* Best Sellers Section */}
          <BestSellers />

          {/* End of Best Sellers Section */}

          {/* About Us Section */}
          <AboutUsSection />
          {/* About Us Section */}

          {/* <!-- Poster Countdown Area  --> */}
          <PostSection />
          {/* <!-- End Poster Countdown Area  --> */}

          {/* <!-- Start Expolre Product Area  --> */}
          <ExploreProducts />
          {/* <!-- End Expolre Product Area  -->

          <!-- Start Why Choose Area  --> */}
          <WhyUsSection />

          {/* <!-- End Why Choose Area  --> */}

          {/* <!-- Start Testimonila Area  --> */}

          <BaseSectionLayout
            className="axil-testimoial-area axil-section-gap bg-vista-white"
            className2="title-highlighter highlighter-secondary"
            iconClass="fal fa-quote-left"
            iconTitle="Testimonials"
            sectionTitle="Users Feedback"
            className3="testimonial-slick-activation testimonial-style-one-wrapper slick-layout-wrapper--20 axil-slick-arrow arrow-top-slide"
          >
            <div className="row">
              <Slider {...testimonialSettings}>
                <div>
                  {" "}
                  <Testimonial />
                </div>
                <div>
                  {" "}
                  <Testimonial />
                </div>
                <div>
                  {" "}
                  <Testimonial />
                </div>
                <div>
                  {" "}
                  <Testimonial />
                </div>
              </Slider>
            </div>
          </BaseSectionLayout>
          {/* <!-- End Testimonila Area  -->

         <!-- Start New Arrivals Product Area  --> */}
          <NewArrivalSection />
          {/* <!-- End New Arrivals Product Area  --> */}

          {/* <!-- Start Axil Newsletter Area  --> */}
          <Newsletter />
          {/* <!-- End Axil Newsletter Area  --> */}

          {/* Service Section */}
          <Service />
          {/* End Service Section */}
        </main>
      </Layout>
    </>
  );
};

export default Home;
