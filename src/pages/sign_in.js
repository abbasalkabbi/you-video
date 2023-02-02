import React from "react";

function Singn_in(){
    return(
        <div className="container d-flex justify-content-center ">
            <form className="mt-1">
                <div className="card bg-light shadow-lg p-3 mb-5 bg-body rounded ">
                    <div className="card-body  p-5">
                        <h2 className="text-uppercase text-center mb-5"> sign in</h2>
                        {/* email */}
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                            
                            />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        {/* End Email */}
                        {/*Password */}
                    <div class="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1"/>
                    </div>
                    {/* End Password */}
                    {/* Login Button */}
                    <div class="text-center text-lg-start mt-4 pt-2">
                        <button type="submit"  className="btn btn-primary">Singn in</button>
                        <p class="small fw-bold mt-2 pt-1 mb-0">Don't have an account?
                        <a href="/register" className="link-primary">Register</a>
                        </p>
                                            </div>
                    {/* END Login Button */}
                    </div>
                    
                </div>
            </form>
        </div>
    )
}
export default Singn_in;