import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBars from "../components/NavBars";
import Home from "../containers/Home";
import UpdateProfile from "../containers/UpdateProfile";

const DashBoardRoutes = () => {
  return (
    <>
      <NavBars />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/update-profile" element={<UpdateProfile />} />
      </Routes>
    </>
  );
};

export default DashBoardRoutes;
