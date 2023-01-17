import React, { Fragment } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

const FilterByCategory = () => {
  const [toggleCat, setToggleCat] = useState(true);

  const toggleCategories = () => {
    if (!toggleCat) {
      setToggleCat(true);
    } else {
      setToggleCat(false);
    }
  };

  const categories = useSelector((state) => state.category.categories);

  useEffect(() => {}, []);
  return (
    <Fragment>
      <div
        className={
          !toggleCat
            ? "toggle-list product-categories active"
            : "toggle-list product-categories"
        }
      >
        <h6 className="title" onClick={toggleCategories}>
          CATEGORIES
        </h6>
        <div
          className="shop-submenu"
          style={{ display: !toggleCat ? "" : "none" }}
        >
          <ul>
            {categories &&
              categories.map((category) => (
                <li className="current-cat" key={category._id}>
                  <a>{category.name}</a>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default FilterByCategory;
