// ProtectedRoute.jsx
import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const isLoggedIn = useSelector((state) => state.app.isLoggedIn);

  if (isLoggedIn && window.location.pathname === "/signin") {
    // Already logged in, prevent going back to signin
    return <Navigate to="/" replace />;
  }

  if (!isLoggedIn && window.location.pathname !== "/signin") {
    // Not logged in, block access to protected routes
    return <Navigate to="/signin" replace />;
  }

  return children;
}
