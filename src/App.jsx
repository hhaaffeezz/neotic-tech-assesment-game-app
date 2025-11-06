import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import MainLayout from "./layouts/Mainlayout";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import AuthLayout from "./layouts/authLayout";
import RequireNoAuth from "./components/RequireNoAuth";



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />, 
    children: [
      { index: true, element: <Landing /> },   // default route
      { path: "home", element: <Home /> },
    ],
    },
    {
      path: "/login",
      element: <AuthLayout />,
      children: [
        { index: true, element: <RequireNoAuth><Login /></RequireNoAuth> },
        { path: "login", element: <RequireNoAuth><Login /></RequireNoAuth> },
      ],
    },
  ]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
