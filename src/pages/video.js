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
            return(
                <>
                <h1>
                    {this.state.video[0].id_video} 
                    {this.state.video[0].name_video} 
                </h1>
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
            {/* video */}
            
            {/* video End */}
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