import React, { useEffect } from "react";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API } from "../config";
import { categoryActions } from "../redux-store/categories-store";
import Slider from "react-slick";

const CategorySlider = () => {
  const dispatch = useDispatch();
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    // fade: true,
  };

  const getCategories = async () => {
    dispatch(categoryActions.fetchCategories());
    const getCategoriesResponse = await fetch(`${API}/categories`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const responseData = await getCategoriesResponse.json();
    console.log(responseData.data)
    return responseData.data;
  };

  const init = () => {
    getCategories()
      .then((data) => {
        dispatch(
          categoryActions.setCategories({
            categories: data,
          })
        );
      })
      .catch((err) => {
        dispatch(
          categoryActions.failedFetch({
            error: "Error whilst fetching categories" || err,
          })
        );
      });
  };

  useEffect(() => {
    init();
  }, []);

  const categoryItems = useSelector((state) => state.category.categories);
  return (
    <Fragment>
      <Slider {...settings}>
        {categoryItems &&
          categoryItems.map((category) => (
            <div className="axil-categorie-area pt--30 bg-color-white"
            key={category._id}
            >
              <div className="container">
                <div className="categrie-product-activation-2 categorie-product-two slick-layout-wrapper--15">
                  <div
                    className="slick-single-layout slick-slide"
                    key={category._id}
                  >
                    <div className="categrie-product-2">
                      <a href="#" style={{ minWidth: "300px" }}>
                        <img
                          className="img-fluid"
                          src={`http://localhost:8000/assets/${category.imagePath}`}
                          alt="product categorie"
                        />
                        <h6 className="cat-title">{category.name}</h6>
                      </a>
                    </div>
                    {/* <!-- End .categrie-product --> */}
                  </div>
                </div>
              </div>
            </div>
          ))}
      </Slider>
    </Fragment>
  );
};

export default CategorySlider;
