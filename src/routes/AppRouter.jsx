import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import SignIn from "../containers/auth/SignIn";
import SignUp from "../containers/auth/SignUp";
import { useDispatch } from "react-redux";
import PublicRoutes from "./PublicRoutes";
import PrivateRoutes from "./PrivateRoutes";
import DashBoardRoutes from "./DashBoardRoutes";
import { getUserAction } from "../redux/actions/user.action";

const AppRoutes = () => {
  const [cheking, setCheking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user?.uid) {
        setIsLoggedIn(true);
        setUserData(user);
        dispatch(getUserAction(userData));
      } else {
        setIsLoggedIn(false);
        setUserData(null);
      }
      setCheking(false);
    });
  }, [setIsLoggedIn, setCheking]);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(getUserAction(userData));
    }
  }, [isLoggedIn]);

  if (cheking) {
    return (
      <div className="auth">
        <Spinner animation="border" />
      </div>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        {/* || -------------------- Public Routes -------------------- || */}

        <Route
          path="/signin"
          element={
            <PublicRoutes isLoggedIn={isLoggedIn}>
              <SignIn />
            </PublicRoutes>
          }
        />

        <Route
          path="/signup"
          element={
            <PublicRoutes isLoggedIn={isLoggedIn}>
              <SignUp />
            </PublicRoutes>
          }
        />

        {/* || -------------------- End of Public Routes -------------------- || */}

        {/* || -------------------- Private Routes -------------------- || */}

        <Route
          path="/*"
          element={
            <PrivateRoutes isLoggedIn={isLoggedIn}>
              <DashBoardRoutes />
            </PrivateRoutes>
          }
        />

        {/* || -------------------- End of Private Routes -------------------- || */}

      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;