
import React from 'react';
import { Routes, Route,BrowserRouter } from "react-router-dom";
import Home from './pages/home'
import Context from "./Context";
import './App.css';
import Singn_in from './pages/sign_in';
import Video from './pages/video';
import User from './pages/user';
import Register from './pages/register';
import Upload from './pages/upload';
import Settings from './pages/Settings';
function App() {
  const url_base='http://localhost/you-video/api/'
  const url = {
    videos:`${url_base}videos.php`,
    video:`${url_base}video.php`,
    login:`${url_base}login.php`,
    register:`${url_base}register.php`,
    user:`${url_base}user.php`,
    user_videos:`${url_base}user_videos.php`,
    like:`${url_base}like.php`,
    unlike:`${url_base}unlike.php`,
    upload:`${url_base}upload.php`,
    assets:`${url_base}assets/`,
    src_img:`${url_base}img/`,
    src_video:`${url_base}videos/`,
    src_thumbe:`${url_base}thumbe/`,
    ChangeName:`${url_base}ChangeName.php`,
    ChangeAbout:`${url_base}ChangeAbout.php`,
    ChangeImage:`${url_base}ChangeImage.php`,
    };
  return (
    <>
    <Context.Provider  value={url}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/singin' element={<Singn_in />} />
            <Route path='/register' element={<Register/>} />
            <Route path="video/:id_video" element={<Video />} />
            <Route path="upload" element={<Upload/>} /> 
            <Route path="settings" element={<Settings/>} /> 
            <Route path="user/:id_user" element={<User />} />
          </Routes>
        </BrowserRouter>
    </Context.Provider>
      
    </>
  );
}

export default App;
