import React from "react";

function Header_logined(){
    return(
        <>
         {/* dropdown */}
        <div class="dropdown">
                    {/* Avatar  */}
                    <a
                        class="nav-link dropdown-toggle" 
                        href="#" role="button" 
                        id="navbarDropdownMenuAvatar"
                        data-bs-toggle="dropdown" 
                        aria-expanded="false"
                    >
                        <img
                            src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                            class="rounded-circle"
                            height="25"
                            alt="Black and White Portrait of a Man"
                            loading="lazy"
                        />
                    </a>
                    {/* end Avatar  */}
                    {/* ul */}
                    <ul class="dropdown-menu dropdown-menu-lg-end dropdown-menu-sm-start">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><hr class="dropdown-divider"/></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                    {/* ul end  */}
                </div>
            {/* dropdown End */}
        </>
    )
}
export default Header_logined;