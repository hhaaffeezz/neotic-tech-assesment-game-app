// src/components/RequireNoAuth.jsx
import React from "react";
import { Navigate } from "react-router-dom";
import { getSessionCookie, decryptToken } from "../utils/auth"; // adjust path

const RequireNoAuth = ({ children }) => {
  const token = getSessionCookie();
  const session = token ? decryptToken(token) : null;

  if (session) {
    // If user is logged in, redirect to home
    return <Navigate to="/home" replace />;
  }

  return children;
};

export default RequireNoAuth;
