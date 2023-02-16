import React from "react";
import { useContext ,Component} from "react";
import { useParams } from "react-router-dom";
import Header from "../components/header";
import Context from "../Context";
class User extends Component{
    constructor(){
        super();
    }
    // render
    render(){
        let  {id_user}=this.props.params;
        return(
            <>
            <Header/>
            Hi From user{id_user}
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