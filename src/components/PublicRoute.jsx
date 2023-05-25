import React from "react";
import { useAuth } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";

function PublicRoute({ component: Component }) {
  const { currentUser } = useAuth();
  return currentUser ? <Navigate to="/" /> : <Component />;
}

export default PublicRoute;
