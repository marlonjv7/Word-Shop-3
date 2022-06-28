import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBars from "../components/NavBars";
import Home from "../containers/Home";

const DashBoardRoutes = () => {
  return (
    <>
      <NavBars />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default DashBoardRoutes;
