import React from "react";

function Singn_in(){
    return(
        <>
        <form className="card singin">
            {/* Email */}
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            {/*End  Email  */}
            {/*Password */}
            <div class="mb-3">
                <label for="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1"/>
            </div>
            {/* End Password */}
            <button type="submit" className="btn btn-primary">Singn in</button>
        </form>
        </>
    )
}
export default Singn_in;