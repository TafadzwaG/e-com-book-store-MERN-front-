import React from "react";

const BaseSectionLayout = ({
  className,
  iconClass,
  className2,
  sectionTitle,
  iconTitle,
  children,
  className3,
}) => {
  return (
    <>
      <div className={className}>
        <div className="container">
          <div className="section-title-wrapper">
            <span className={className2}>
              <i className={iconClass}></i> {iconTitle}
            </span>
            <h2 className="title">{sectionTitle}</h2>
          </div>
          <div className={className3}>{children}</div>
        </div>
      </div>
    </>
  );
};

export default BaseSectionLayout;
