import React from 'react';
import './header.css'
import { Outlet,NavLink } from "react-router-dom";
import Header_logined from './header/header_logined';
import Header_guest from './header/header_guest';
import {useContext } from "react";
import Context from "../Context";
function Header(){
    return(
        <>
{/* <!-- Navbar--> */}
<nav class="navbar navbar-expand-lg navbar-dark bg-dark " data-bs-theme="dark">
    {/* container-fluid */}
    <div class="container-fluid">
        {/* a */}
        <a class="navbar-brand" href="#">You-Video</a>
        {/* a end */}
        {/* button */}
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        {/* button End */}
        {/* navbar-collapse */}
        <div class="collapse navbar-collapse" id="navbarNav">
            {/* ul navbar-nav  <!-- Left links -->*/}
            <ul class="navbar-nav  me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <NavLink
                    to='/'
                    className={({ isActive })=>(isActive?"nav-link active":"nav-link ")}
                    >
                        Home
                    </NavLink>
                    {/* nav-link active" */}
                </li>
            </ul>
            {/* ul navbar-nav  End  <!-- Left links -->*/}
            {/* Right */}
            <div class="d-flex align-items-center">
                {
                    localStorage.getItem('id')?<Header_logined url_img={`${useContext(Context).src_img}${localStorage.getItem('avatar')}`}/>
                    :<Header_guest/>
                }
            </div>
            {/* Right End */}
        </div>
        {/* End navbar-collapse */}
    </div>
    {/* End container-fluid */}
</nav>
{/* <!-- Navbar--> End */}

        </>
    )
}
export default Header;