import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div className="h-screen w-screen overflow-auto bg-indigo-700 flex flex-col text-center">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
