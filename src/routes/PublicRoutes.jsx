import React from "react";
import { Navigate } from "react-router-dom";

const PublicRoutes = ({isLoggedIn, children}) => {
  return !isLoggedIn ? children : <Navigate to="/" />;
};

export default PublicRoutes;
