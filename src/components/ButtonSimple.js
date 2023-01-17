import React, { Fragment } from "react";

const ButtonSimple = ({ name, btnFunction }) => {
  return (
    <Fragment>
      <div className="form-group ">
        <input
          type="submit"
          className="axil-btn"
          onClick={btnFunction}
          value={name}
        />
      </div>
    </Fragment>
  );
};

export default ButtonSimple;
