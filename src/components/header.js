import React from 'react';
import './header.css'
import logo from "../images/youtube-logo.png"
function Header(){
    return(
        <header>
            <div class="left-section">
                <i class="material-icons logo">menu</i>
                <img src={logo}  alt='ds'/>
            </div>
            <div class="mid-section">
                <form action="">
                    <input type="text" placeholder="Search"/>
                    <button><i class='material-icons'>search</i></button>
                </form>
                <i class="material-icons mic">mic</i>
            </div>
            <div class="right-section">
                <a href="h.html"><i class='material-icons'>video_call</i></a>
                <a href="h.html"><i class='material-icons'>apps</i></a>
                <a href="h.html"><i class='material-icons'>notifications</i></a>
                <a href="h.html"><i class='material-icons'>account_circle</i></a>
            </div>
        </header>
    )
}
export default Header;