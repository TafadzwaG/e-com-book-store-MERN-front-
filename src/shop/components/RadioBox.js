import React, { Fragment, useState } from "react";

const RadioBox = ({ prices, handleFilters }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event) => {
    handleFilters(event.target.value)
    setValue(event.target.value)
  }

  return prices.map((p, i) => (
    <div key={i}>
      <input
        type="radio"
        className="current-cat"
        style={{ zIndex: "10" }}
        onChange={handleChange}
        value={`${p._id}`}
        name={p}
      />
      <label className="form-check-label" style={{ zIndex: "7" }}>
        {p.name}
      </label>
    </div>
  ));
};

export default RadioBox;
