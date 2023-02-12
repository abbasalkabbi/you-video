import {useContext, Component } from "react";
import React from "react";
import { useParams } from "react-router-dom";
import Context from "../Context";
import Header from "../components/header";
import Video_ from "../components/video";
import { Loading } from "../components/Loading";
class Video extends Component{
    constructor(){
        super();
        this.state={
            id:0,
            finished:false,
            novideo:false,
            video:[],
            message:[],
            like:false,
            unlike:false
        }
    }
    // End constructor
    // Start componentDidMount
    componentDidMount(){
        // get id video
        let  {id_video}=this.props.params;
        if(localStorage.getItem('id')){
            let id=localStorage.getItem('id')
            console.log(id)
            var link=`${this.props.usecontext.video}?id_video=${id_video}&id_visitor=${id}`;
        }else{
            var link=`${this.props.usecontext.video}?id_video=${id_video}`;
        }
        
        fetch(`${link}`)
        .then(response => response.json())
        .then(json=>{
            console.log(json)
            if(json.status ==false){
                this.setState({
                    novideo:true,
                    finished:true,
                    message:json,
                    
                })
            }else{
            this.setState({
                video:json,
                finished:true,
                novideo:false,
                like:json[1].islike,
                unlike:json[1].isunlike,
            })
            }
            console.log(this.state.like)
        })
    }
    // video
    video(){
        if(this.state.finished === true && this.state.novideo ==false){
            let {id_video,id_author,name_video,url_video,url_img,date_video,views,avatar,name}=this.state.video[0];
            let {like,unlike}=this.state;
            return(
                <Video_  id_video={id_video} url_video={url_video} islike={like} isunlike={unlike} name_video={name_video}  views={views} author={name} avatar={avatar}/>
            )
        }if(this.state.finished === true && this.state.novideo ==true){
            let {message}=this.state.message;
            return(
                <>
                <h2>
                    {message}
                </h2>
                </>
            )
        }
        return(
            <Loading/>
        )
    }
    // video End 
    // render
    render(){
        console.log(this.state.like)
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