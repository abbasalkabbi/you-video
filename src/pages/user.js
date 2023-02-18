import React from "react";
import { useContext ,Component} from "react";
import { useParams } from "react-router-dom";
import Header from "../components/header";
import User_card from "../components/user_card";
import Context from "../Context";
import { Loading } from "../components/Loading";
import Video_item from "../components/video_item";

class User extends Component{
    constructor(){
        super();
        this.state={
            name:'',
            avatar:'',
            videos:'',
            finished_info:false,
            finished_videos:false,
        }
    }

    // render
      // Start componentDidMount
    componentDidMount(){
        // get id video
        let  {id_user}=this.props.params;
        var link_user=`${this.props.usecontext.user}?id_user=${id_user}`;
        fetch(`${link_user}`)
        .then(response => response.json())
        .then(json=>{
            this.setState({
                name:json[0].name,
                avatar:json[0].avatar,
                finished_info:true,
            })
        })
        // get videos
        var link_user_videos=`${this.props.usecontext.user_videos}?id_user=${id_user}`;
        fetch(`${link_user_videos}`)
        .then(response => response.json())
        .then(json=>{
            console.log(json)
            this.setState({
                videos:json,
                finished_videos:true,
            })
        })
    }
    mapping(){
        let {finished_videos,finished_info}=this.state
        if(finished_videos === false || finished_info === false){
            return (
                <Loading/>
            )
        }else if(finished_info ===true & finished_videos === false){
            return(
                <User_card name={this.state.name} avatar={this.state.avatar}/>
            )
        }
        if(finished_videos === true || finished_info === true){
            let data=
            this.state.videos.map(video => 
                <Video_item id={video.id_video} name={video.name_video} img={video.url_img} date={video.date_video} view={video.views}/>
            )
            return (<>
                    <div className="row">
                    <User_card  name={this.state.name} avatar={this.state.avatar} />
                    </div>
                    <div className="row ">
                    <h2 className=" text-center mb-5 text-bg-light p-3 fade show">Videos Of {this.state.name}</h2>
                    {data}
                    </div>
                    </>
                )
        }
    }
    render(){
        let  {id_user}=this.props.params;
        return(
            <>
            <Header/>
            {/* container */}
            <div className="container">
               {/* mapping */}
                    {this.mapping()}
               {/* mapping End */}
            </div>
            {/* container End */}
            </>
        )
    }
    // render End
}
export default (props)=>(
    <User
    {...props}
    params={useParams()}
    usecontext={useContext(Context)}
    />
)