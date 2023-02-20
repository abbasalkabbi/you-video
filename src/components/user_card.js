
import React from "react";
function User_card(props){
    return(
<>
<div className="user card col-sm-12 col-md-4 mb-3">
    <img src={`${props.avatar}`} className="card-img-top" alt="..."/>
    <div className="card-body">
        <p className="card-text">{props.name}</p>
    </div>
</div>
{/* info */}
<div class="card col-sm-12 col-md-8 mb-3">
    <div class="card-header">
        Info Of {props.name}
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">About : {props.about}</li>
        <li class="list-group-item">Date : {props.date}</li>
    </ul>
</div>
{/* info End */}
</>
    )

}
export default User_card;