import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./header";

export default function RootLayout() {
  return (
    <div className="max-w-screen-2xl relative mx-auto">
      <Header />
      <Outlet />
    </div>
  );
}
