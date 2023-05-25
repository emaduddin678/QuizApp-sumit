import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

const RequireAuth = ({ children }) => {

  const user = useAuth();
  
  console.log(user);
  if (user) {
    return children;
  } else {
    // <Navigate to={"/signin"} />;
    // return children;
    return <Navigate to={"/login"} />;
  }
};

export default RequireAuth;
