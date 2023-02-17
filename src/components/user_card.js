
import React from "react";
function User_card(props){
    return(
<>
<div className="user card col-sm-12 col-md-4 mb-3">
    <img src={require(`../assets/avatarfull_original.png`)} className="card-img-top" alt="..."/>
    <div className="card-body">
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
</div>
</>
    )

}
export default User_card;