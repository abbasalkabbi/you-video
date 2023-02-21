import React from "react";
import { useContext ,Component} from "react";
import Header from '../components/header'
import Video_item from "../components/video_item";
import Context from "../Context";
import { Loading } from "../components/Loading";
class Home extends Component{
    constructor(){
        super();
        this.state={
            videos:[],
            finished:false,
            src_thumbe:'',
        }
    }
    // created method fetch data from api
    componentDidMount(){
        this.setState({
            src_thumbe:this.props.usecontext.src_thumbe,
        })
        let link=this.props.usecontext.videos
        fetch(`${link}`)
        .then(response => response.json())
        .then(json=>{
            console.log(json)
            this.setState({
                videos:json,
                finished:true,
                assets:this.props.usecontext.assets
            })
        })
    }
    // end get api
    // mapping
    mapping(){
        if(this.state.finished === true){
            // console.log(this.state.videos[0].id_author)
            let data=
            this.state.videos.map(video => 
                <Video_item id={video.id_video} name={video.name_video} img={`${this.state.src_thumbe}${video.url_img}`} date={video.date_video} view={video.views}/>
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