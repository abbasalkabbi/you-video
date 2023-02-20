import {useContext, Component } from "react";
import React from "react";
import Context from "../Context";
import axios from "axios";
import { Navigate } from "react-router";
import { NavLink } from "react-router-dom";
class Register  extends  Component{
    constructor(){
        super();
        this.state={
            name:'',
            email:'',
            password:'',
            status:'',
            id:"",
            avatar:'',
            info:'',
        }
    }
    // handleFormSubmit
    handleFormSubmit(event){
        event.preventDefault();
        const url_register=this.props.usecontext.register;
        let register_data={
            name: this.state.name,
            email: this.state.email,
            password:this.state.password,
        }
        axios({
            method: 'post',
            url: `${url_register}`,
            headers: { 'content-type': 'application/json' },
            data: register_data
        })
        .then(result =>
            { console.log(result)
            this.setState({
            info: result.data.message,
            status:result.data.status,
            id:result.data.id,
            avatar:result.data.avatar,
            })
        }
            )
        
    }
    error(){
        if(this.state.status ===false){
            return(
                <div class="alert  alert-danger alert-dismissible fade show text-center" role="alert">
                {this.state.info}
                </div>
            )
        }else
        {
            if(this.state.info=='successful'){
                localStorage.setItem('id',this.state.id)
                localStorage.setItem('avatar',this.state.avatar)
                if(localStorage.getItem('id')){
                return(
                <Navigate replace to="/" />
                )
            }
            }
        }
    }
    // handleFormSubmit End 
    render(){
        let {name,email,password}=this.state
    return(
        
        <div className="container d-flex justify-content-center ">
            {localStorage.getItem('id')?<Navigate replace to="/" />:''}
            <form className="mt-1">
                <div className="card bg-light shadow-lg p-3 mb-5 bg-body rounded ">
                    <div className="card-body  p-5">
                        <h2 className="text-uppercase text-center mb-5"> Register</h2>
                        {this.error()}
                         {/* email */}
                        <div className="mb-3">
                            <label for="fullname" className="form-label">Full Name</label>
                            <input type="text" className="form-control" id="fullname" aria-describedby="emailHelp"
                            onChange={e=>this.setState({name:e.target.value})}
                            value={name}
                            />
                        </div>
                        {/* End Email */}
                        {/* email */}
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                            onChange={e=>this.setState({email:e.target.value})}
                            value={email}
                            />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        {/* End Email */}
                        {/*Password */}
                    <div class="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1"
                        onChange={e=>this.setState({password:e.target.value})}
                        value={password}
                        />
                    </div>
                    {/* End Password */}
                    {/* Login Button */}
                    <div class="text-center text-lg-start mt-4 pt-2">
                        <button type="submit"  className="btn btn-primary"
                        onClick={e => this.handleFormSubmit(e)}
                        >Register</button>
                        <p class="small fw-bold mt-2 pt-1 mb-0"> have an account?
                        <NavLink
                            to='/singin'
                            className="link-primary"
                            >
                            Login
                        </NavLink>
                        </p>
                                            </div>
                    {/* END Login Button */}
                    </div>
                    
                </div>
            </form>
        </div>
    )
    }
}

export default (props)=>(
    <Register
    {...props}
    usecontext={useContext(Context)}
    />
);