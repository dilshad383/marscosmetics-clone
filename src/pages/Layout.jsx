import React from "react";
import { Outlet, useLocation } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = () => {
  const location = useLocation();
  const hideHeaderFooter = location.pathname === "/signin";
  return (
    <div>
      {!hideHeaderFooter && <Header />}
      <Outlet />
      {!hideHeaderFooter && <Footer />}
    </div>
  );
};

export default Layout;
