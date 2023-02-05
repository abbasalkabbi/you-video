import {useContext, Component } from "react";
import React from "react";
import { useParams } from "react-router-dom";
import Context from "../Context";
import Header from "../components/header";
class Video extends Component{
    constructor(){
        super();
        this.state={
            id:0,
            finished:false,
            video:[]
        }
    }
    // End constructor
    // Start componentDidMount
    componentDidMount(){
        // get id video
        let  {id}=this.props.params;
        const link=`${this.props.usecontext.video}?id=1`;
        fetch(`${link}`)
        .then(response => response.json())
        .then(json=>{
            this.setState({
                video:json,
                finished:true
            })
        })
    }
    // video
    video(){
        if(this.state.finished === true){
            let {id_video,id_author,name_video,url_video,url_img,date_video,views}=this.state.video[0];
            return(
                <>
 {/* video */}
                <div className="video  col-sm-12 col-md-9 ">
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
                                <p className="info-count card-text col-4">{views} viwes 10 likes 20 unlike</p>
                            </div>
                            {/* end title */}
                            {/* card body */}
                            <div className="card-body row"></div>
                            {/* like list */}
                            <div className="btn-group col-4 like-unlike" role="group" aria-label="Basic example">
                                    <button type="button" className="btn btn-outline-primary"> like</button>
                                    <button type="button" className="btn btn-outline-danger">unlike</button>
                            </div>
                            {/*End  like list */}
                            {/* channel */}
                            <a className="col-8 channel " href="/l">
                                    <p className="">
                                        Abbas Alkbbi
                                    </p>
                                    <img src={require('../assets/avatarfull_original.png')} class="channel-img  img-thumbnail " alt="..." style={{'width':'100px'}}/>
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
        return(
            <>
            <h2>
                loading
            </h2>
            </>
        )
    }
    // video End 
    // render
    render(){
        console.log(this.props.params.id)
        return(
            <>
            <Header/>
            {/* container*/}
            <div className="container">
                {/* div for video and list  */}
                <div className="row">
                    {/* video */}
                    {this.video()}
                    {/* video End */}
                </div>
                {/* div for video and list  End*/}
            </div>
            {/* container End */}
            </>
        )
    }
    // render End 
}

export default (props)=>(
    <Video
    {...props}
    params={useParams()}
    usecontext={useContext(Context)}
    />
);