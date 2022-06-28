import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Buy from '../components/Buy';
import Choose from '../components/Choose';
import Intro from '../components/Intro';
import Sell from '../components/Sell';
import Home from '../containers/Home';
import AgregarEjercisio from '../components/AgregarEjercisio';



const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/intro' element={<Intro />} />
        <Route path='/choose' element={<Choose />} />
        <Route path='/sell' element={<Sell />} />
        <Route path='/buy' element={<Buy />} />
        <Route path="/AgregarEjercisio" element={<AgregarEjercisio/>}/>
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter;