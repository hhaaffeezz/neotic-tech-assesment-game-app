import React from "react";
import { Outlet } from "react-router-dom";

// authlayout 

 
const AuthLayout = () => {
  return (
    <div className="min-h-screen w-full bg-gray-900 flex items-start justify-center">
      <main className="w-full max-w-md">
        <Outlet />
      </main>
    </div>
  );
};

export default AuthLayout;
