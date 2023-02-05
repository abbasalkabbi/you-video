import React from "react";
import { useContext ,Component} from "react";
import Header from '../components/header'
import image from '../assets/thumbe.png'
import Video_item from "../components/video_item";
import Context from "../Context";
import { Loading } from "../components/Loading";
class Home extends Component{
    constructor(){
        super();
        this.state={
            videos:[],
            finished:false,
            
        }
    }
    // created method fetch data from api
    componentDidMount(){
        let link=this.props.usecontext.videos
        fetch(`${link}`)
        .then(response => response.json())
        .then(json=>{
            this.setState({
                videos:json,
                finished:true
            })
        })
    }
    // end get api
    // mapping
    mapping(){
        if(this.state.finished === true){
            let data=
            this.state.videos.map(video => 
                <Video_item name={video.name_video} img={video.url_img} date={video.date_video} view={video.views}/>
            )
            return data
        }
        return (
            <Loading/>
        )
    }
    // End mapping
    // render
    render(){
        return(
        <>
        <Header/>
        <div className="container">
        {/* row */}
        <div class="row">
            {/* video */}
            {this.mapping()}
            {/* End video */}
            
            
        </div>
        {/* end row */}
        </div>
        </>
        )
    }
    // End render
}
export default (props)=>(
    <Home
    {...props}
    usecontext={useContext(Context)}
    />
)