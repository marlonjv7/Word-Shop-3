import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Buy from "../components/Buy";
import Choose from "../components/Choose";
import Intro from "../components/Intro";
import NavBars from "../components/NavBars";
import Sell from "../components/Sell";
import Home from "../containers/Home";
import UpdateProfile from "../containers/UpdateProfile";
import AgregarEjercisio from "../components/AgregarEjercisio";
import Terms from "../components/Terms";
import About from "../components/About";

const DashBoardRoutes = () => {
  return (
    <>
      <NavBars />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/update-profile" element={<UpdateProfile />} />
        <Route path='/intro' element={<Intro />} />
        <Route path='/choose' element={<Choose />} />
        <Route path='/sell' element={<Sell />} />
        <Route path='/buy' element={<Buy />} />
       <Route path="/AgregarEjercisio" element={<AgregarEjercisio/>}/>
       <Route path="/Terms" element={<Terms/>}/>
       <Route path="/About" element={<About/>}/>
      <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </>
  );
};

export default DashBoardRoutes;
