import React, { Fragment } from "react";

const Tab = ({ href, title, icon="fas fa-shopping-basket"}) => {
  return (
    <Fragment>
      <a
        className="nav-item nav-link"
        data-bs-toggle="tab"
        href={href}
        role="tab"
        aria-selected="false"
      >
        <i className={icon}></i>{ title }
      </a>
    </Fragment>
  );
};

export default Tab;
