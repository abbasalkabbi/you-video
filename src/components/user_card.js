
import React from "react";
function User_card(props){
    return(
<>
<div className="user card col-sm-12 col-md-4 mb-3">
    <img src={require(`../assets/${props.avatar}`)} className="card-img-top" alt="..."/>
    <div className="card-body">
        <p className="card-text">{props.name}</p>
    </div>
</div>
</>
    )

}
export default User_card;