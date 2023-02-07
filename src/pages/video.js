import {useContext, Component } from "react";
import React from "react";
import { useParams } from "react-router-dom";
import Context from "../Context";
import Header from "../components/header";
import Video_ from "../components/video";
class Video extends Component{
    constructor(){
        super();
        this.state={
            id:0,
            finished:false,
            novideo:false,
            video:[],
            message:[],
        }
    }
    // End constructor
    // Start componentDidMount
    componentDidMount(){
        // get id video
        let  {id}=this.props.params;
        const link=`${this.props.usecontext.video}?id=${id}`;
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
                novideo:false
            })
            }
        })
    }
    // video
    video(){
        if(this.state.finished === true && this.state.novideo ==false){
            let {id_video,id_author,name_video,url_video,url_img,date_video,views}=this.state.video[0];
            return(
                <Video_ url_video={url_video}  name_video={name_video}  views={views}/>
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