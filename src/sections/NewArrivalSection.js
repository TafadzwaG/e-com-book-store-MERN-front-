import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import { API } from "../config";
import { productActions } from "../redux-store/products-store";
import NewArrivalCard from "../views/product/cards/NewArrivalCard";
import BaseSectionLayout from "./BaseSectionLayout";

const NewArrivalSection = () => {
  var newArrivalSlidersettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
  };

  const dispatch = useDispatch();

  const getNewArrivals = async (sortBy) => {
    dispatch(productActions.fetchProducts());
    const getNewArrivalResponse = await fetch(
      `${API}/products?sortBy=${sortBy}&order=desc&limit=5`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const responseData = await getNewArrivalResponse.json();
    console.table("New Arrival", responseData);
    return responseData;
  };

  const sortBy = "createdAt";

  const init = () => {
    getNewArrivals(sortBy)
      .then((data) => {
        dispatch(
          productActions.setNewArrivals({
            newArrivals: data,
          })
        );
      })
      .catch((err) => {
        dispatch(
          productActions.failedFetchProducts({
            error: "Failed fetch new Arrivals",
          })
        );
      });
  };

  useEffect(() => {
    init();
  }, []);

  const newArrivals = useSelector((state) => state.product.newArrivals);

  return (
    <BaseSectionLayout
      className="axil-new-arrivals-product-area bg-color-white axil-section-gap pb--50 pb_sm--30"
      className2="title-highlighter highlighter-primary"
      iconClass="far fa-shopping-basket"
      iconTitle="This Week’s"
      sectionTitle="New Arrivals"
      className3="new-arrivals-product-activation slick-layout-wrapper--30 axil-slick-arrow  arrow-top-slide"
    >
      <div className="row">
        <Slider {...newArrivalSlidersettings}>
          {newArrivals &&
            newArrivals.map((product) => (
              <div key={product._id}>
                <NewArrivalCard product={product} />
              </div>
            ))}
        </Slider>
      </div>
    </BaseSectionLayout>
  );
};

export default NewArrivalSection;
