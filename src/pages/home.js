import React from "react";
import { useContext ,Component} from "react";
import Header from '../components/header'
import image from '../assets/thumbe.png'
import Video_item from "../components/video_item";
import Context from "../Context";
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
        fetch('http://localhost/you-video/api/videos.php')
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
                <Video_item name={video.name_video} date={video.date_video} view={video.views}/>
            )
            return data
        }
        return (
            <h2>
                loading
            </h2>
        )
    }
    // End mapping
    // render
    render(){
        let {finished , videos }=this.state
        return(
        <>
        <Header/>
        <div className="container">
            <h1>{finished}
            </h1>
            {this.mapping()}
        {/* row */}
        <div class="row">
            {/* video */}
            <div class="col-sm-6 mb-3 ">
                
                <a class="card" href="/singin" style={{'text-decoration':'none' ,'color':'#000'}}>
                <img src={image} class="card-img-top" alt="..."/>
                    <div class="card-body">
                        {/* info */}
                        <div className="info  d-flex justify-content-between">
                            <p>2023/1/2</p>
                            <p>views:100</p>
                        </div>
                        {/* info */}
                        <p class="card-text text-break fs-6">mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm</p>
                    </div>
                </a>
            </div>
            {/* End video */}
            <Video_item name='hi' date='2020/1/2' view='100'/>
            
            
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