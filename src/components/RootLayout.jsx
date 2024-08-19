import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header/header";
import ScrollToTop from "./Other/ScrollTop";
import Footer from "../components/footer";

export default function RootLayout() {
  return (
    <>
      <div className="max-w-screen-2xl lg:px-3 3xl:px-0 relative mx-auto">
        <Header />
        <ScrollToTop />
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
