import React from 'react';
import './header.css'
import logo from "../images/youtube-logo.png"
import { Outlet,NavLink } from "react-router-dom";
function Header(){
    return(
        <>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            {/*  container-fluid */}
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                {/* navbarNav */}
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        {/* home */}
                        <li class="nav-item">
                        <NavLink
						to='/'
						className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link ')}
						>
						Home
						</NavLink>
                        </li>
                        {/* end home */}
                        {/* singin in */}
                        <li class="nav-item">
                        <NavLink
						to='/singin'
						className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link ')}
						>
						sing in
						</NavLink>
                        </li>
                        {/* end singin in */}
                    </ul>
                </div>
                {/*End  navbarNav */}
            </div>
            {/* End container-fluid */}
        </nav>
        <Outlet/>
        </>
    )
}
export default Header;