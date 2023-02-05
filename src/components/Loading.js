import React from "react";

export  const Loading=()=>{
return(
    <div className=' d-flex justify-content-center'>
        <div class="spinner-border d-flex " role="status">
                <span class=" visually-hidden">Loading...</span>
        </div>
    </div>
)
}