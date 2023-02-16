import React from "react";
import { useContext ,Component} from "react";
import { useParams } from "react-router-dom";
import Header from "../components/header";
import Context from "../Context";
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
    render(){
        let  {id_user}=this.props.params;
        return(
            <>
            <Header/>
            Hi From user{this.state.name}
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