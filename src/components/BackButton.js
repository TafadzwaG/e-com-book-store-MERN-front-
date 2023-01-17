import React, { Fragment } from "react";

const BackButton = ({ text = "Back", btnFuction }) => {
  return (
    <Fragment>
      <span
        className="nav-item nav-link"
        style={{ cursor: "pointer" }}
        onClick={btnFuction}
      >
        <i className="fal fa-sign-out"></i> {text}
      </span>
    </Fragment>
  );
};

export default BackButton;
