
import React from 'react';
import { Routes, Route,BrowserRouter } from "react-router-dom";
import Home from './pages/home'

import './App.css';
import Singn_in from './pages/sign_in';
function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/singin' element={<Singn_in />} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
