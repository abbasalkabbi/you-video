import React, { Component } from "react";

class Video_  extends Component{
    constructor(){
        super();
        this.state={
            islike:false,
            isunlike:false,
        }
    }
    componentDidMount(){
        this.setState({
            islike:this.props.islike,
            isunlike:this.props.isunlike,
        })
    }
    like(id_video,id_visitor){
        let like_url=`${this.props.like_url}?id_video=${id_video}&id_visitor=${id_visitor}`
        fetch(`${like_url}`)
        .then(response => response.json())
        .then(json=>{
            console.log(json)
            this.setState({
                islike:json.like,
            })
        }
        
        )
    }
    unlike(id_video,id_visitor){
        let unlike_url=`${this.props.unlike_url}?id_video=${id_video}&id_visitor=${id_visitor}`
        fetch(`${unlike_url}`)
        .then(response => response.json())
        .then(json=>{
            console.log(json)
            this.setState({
                isunlike:json.unlike,
            })
        }
        
        )
    }
    render(){
        let {url_video,name_video,views,avatar,id_video,author,like_count,unlike_count}=this.props
        let {islike,isunlike}=this.state
        return(
            <>
             {/* video */}
                            <div className="video  col-sm-12 col-md-12 ">
                                    {/* video play */}
                                    <div class="ratio ratio-16x9">
                                            <video width="320" height="240" controls>
                                                <source src={require(`../assets/${url_video}`)} type="video/mp4"/>
                                            </video>
                                    </div>
                                     {/* video play */}
                                     {/* card body */}
                                    <div className="card">
                                        {/* title */}
                                        <div className="card-header row">
                                            <h5 className="card-title col-8">{name_video}</h5>
                                            <p className="info-count card-text col-4">{views} viwes {like_count}likes  {unlike_count}unlike</p>
                                        </div>
                                        {/* end title */}
                                        {/* card body */}
                                        <div className="card-body row">
                                        {/* like list */}
                                        <div className="btn-group col-4 like-unlike" role="group" aria-label="Basic example">
                                                <button type="button" className={islike===true?"btn  btn-primary":'btn btn-outline-primary'} onClick={()=>this.like(id_video,localStorage.getItem('id'))}> like</button>
                                                <button type="button" className={isunlike===true?"btn btn-danger":"btn btn-outline-danger"} onClick={()=>this.unlike(id_video,localStorage.getItem('id'))}>unlike</button>
                                        </div>
                                        {/*End  like list */}
                                        {/* channel */}
                                        <a className="col-8 channel " href="/l">
                                                <p className="">
                                                    {author}
                                                </p>
                                                <img src={require(`../assets/${avatar}`)} class="channel-img  img-thumbnail " alt="..." style={{'width':'100px'}}/>
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
    
}
export default (props)=>
<Video_
{...props}

/>;