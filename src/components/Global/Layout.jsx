import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";

const Layout = ({ pages }) => {
  return (
    <div className="overflow-hidden">
      <ScrollToTop />
      <Navbar />
      {pages}
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
