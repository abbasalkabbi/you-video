import React from "react";
import { NavLink } from "react-router-dom";
function Header_guest(){
    return(
        <>
        <NavLink
            to='/singin'
            className="btn btn-link px-3 me-2"
            >
            Login
        </NavLink>
        <NavLink
            to='/singin'
            className="btn btn-primary me-3"
            >
            Sign up for free
        </NavLink>
        </>
    )
}
export default Header_guest