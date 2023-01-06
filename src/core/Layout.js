import React from "react";
import Footer from "./Footer";
import Menu from "./Menu";

const Layout = ({
  title = "Title",
  description = "Description",
  className,
  children,
}) => {
  return (
    <>
      <Menu />
      <div className={className}>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
