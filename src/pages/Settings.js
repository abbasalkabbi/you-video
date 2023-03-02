import React from "react";
import { useContext ,Component} from "react";
import Context from "../Context";
import Header from "../components/header";

class Settings extends Component{
    constructor(){
        super();
        this.state={
        }
    }
    // end constructor
    // render
    render(){
        return(
            <>
            <Header/>
            Settings
            </>
        )
    }
    // end render
}
export default (props)=>(
    <Settings
    {...props}
    usecontext={useContext(Context)}
    />
);