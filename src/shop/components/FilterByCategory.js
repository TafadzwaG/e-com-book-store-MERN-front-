import React, { Fragment } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

const FilterByCategory = ({ handleFilters }) => {
  const [toggleCat, setToggleCat] = useState(true);

  const [checked, setChecked] = useState([]);
  const handleToggle = (c) => () => {
    //return the first index of -1
    const currentCategoryId = checked.indexOf(c);
    const newCheckedCategoryId = [...checked];
    //if currently checked was not already in checked state > push
    //else pull/take off
    if (currentCategoryId === -1) {
      newCheckedCategoryId.push(c);
    } else {
      newCheckedCategoryId.splice(currentCategoryId, 1);
    }
    console.log(newCheckedCategoryId);
    setChecked(newCheckedCategoryId);
    handleFilters(newCheckedCategoryId)
  };

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
              categories.map((c, index) => (
                <li key={index} className="list-unstyled">
                  <input
                    onChange={handleToggle(c._id)}
                    type="checkbox"
                    value={checked.indexOf(c._id === -1)}
                    className="form-check-input"
                    style={{ zIndex: "10" }}
                  />
                  <label className="form-check-label" style={{ zIndex: "7" }}>
                    {c.name}
                  </label>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default FilterByCategory;
