
import React from "react";
function Video_item(props){
    return(
<>
{/* video */}
<div class="col-sm-6 mb-3 ">
                
                <a class="card" href={`/video/${props.id}`} style={{'text-decoration':'none' ,'color':'#000'}}>
                <img src={`${props.img}`} class="card-img-top" alt="..."/>
                    <div class="card-body">
                        {/* info */}
                        <div className="info  d-flex justify-content-between">
                            <p>{props.date}</p>
                            <p>Views:{props.view}</p>
                        </div>
                        {/* info */}
                        <p class="card-text text-break fs-6">{props.name}</p>
                    </div>
                </a>
            </div>
            {/* End video */}
</>
    )

}
export default Video_item;