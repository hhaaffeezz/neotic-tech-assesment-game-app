import React from "react";
import { Outlet } from "react-router-dom";
import Topbar from "./Topbar";
import Footer from "./Footer";

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900">
      {" "}
      <main className="flex-1 p-2 max-w-96 mx-auto w-full">
        {" "}
        <Topbar /> <Outlet />{" "}
      </main>{" "}
      <Footer /> 
    </div>
  );
};

export default MainLayout;
