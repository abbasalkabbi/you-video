
import React from 'react';
import { Routes, Route,BrowserRouter } from "react-router-dom";
import Home from './pages/home'
import Context from "./Context";
import './App.css';
import Singn_in from './pages/sign_in';
import Video from './pages/video';
function App() {
  const url_base='http://localhost/you-video/api/'
  const url = {
    videos:`${url_base}videos.php`,
    video:`${url_base}video.php`,
    login:`${url_base}login.php`,
    like:`${url_base}like.php`,
    unlike:`${url_base}unlike.php`,
    };
  return (
    <>
    <Context.Provider  value={url}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/singin' element={<Singn_in />} />
            <Route path="video/:id_video" element={<Video />} />
          </Routes>
        </BrowserRouter>
    </Context.Provider>
      
    </>
  );
}

export default App;
