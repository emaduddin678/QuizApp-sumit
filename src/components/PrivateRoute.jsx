import React from "react";
import { useAuth } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";

function PrivateRoute({ component: Component }) {
  const { currentUser } = useAuth();
  return currentUser ? <Component /> : <Navigate to="/login" />;
}

export default PrivateRoute;
