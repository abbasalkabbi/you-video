
import React from 'react';
import { Routes, Route,BrowserRouter } from "react-router-dom";
import Home from './pages/home'
import Context from "./Context";
import './App.css';
import Singn_in from './pages/sign_in';
function App() {
  const url_base='http://localhost/you-video/api/'
  const url = {
    videos:`${url_base}videos.php`,
    };
  return (
    <>
    <Context.Provider  value={url}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/singin' element={<Singn_in />} />
          </Routes>
        </BrowserRouter>
    </Context.Provider>
      
    </>
  );
}

export default App;
