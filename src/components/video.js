import React from "react";
function Video_(props){
    return(
<>
 {/* video */}
                <div className="video  col-sm-12 col-md-12 ">
                        {/* video play */}
                        <div class="ratio ratio-16x9">
                                <video width="320" height="240" controls>
                                    <source src={require(`../assets/${props.url_video}`)} type="video/mp4"/>
                                </video>
                        </div>
                         {/* video play */}
                         {/* card body */}
                        <div className="card">
                            {/* title */}
                            <div className="card-header row">
                                <h5 className="card-title col-8">{props.name_video}</h5>
                                <p className="info-count card-text col-4">{props.views} viwes 10 likes 20 unlike</p>
                            </div>
                            {/* end title */}
                            {/* card body */}
                            <div className="card-body row">
                            {/* like list */}
                            <div className="btn-group col-4 like-unlike" role="group" aria-label="Basic example">
                                    <button type="button" className="btn btn-outline-primary"> like</button>
                                    <button type="button" className="btn btn-outline-danger">unlike</button>
                            </div>
                            {/*End  like list */}
                            {/* channel */}
                            <a className="col-8 channel " href="/l">
                                    <p className="">
                                        {props.author}
                                    </p>
                                    <img src={require(`../assets/${props.avatar}`)} class="channel-img  img-thumbnail " alt="..." style={{'width':'100px'}}/>
                                </a>
                            {/*END channel */}
                            </div>
                            {/* card body End */}
                        </div>
                        {/* end card */}
                        
                    </div>
                    {/* video End*/}
                </>
    )

}
export default Video_;