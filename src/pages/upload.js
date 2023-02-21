import React from "react";
import { useContext ,Component} from "react";
import Context from "../Context";
import Header from "../components/header";
import axios from "axios";
import { Navigate } from "react-router";
class Upload extends Component{
    constructor(){
        super();
        this.state={
            name:'',
            video:'',
            image:'',
            info:'',
            image_status:false,
            ShowEroor:false,
        }
        this.video_uplaod = this.video_uplaod.bind(this);
        this.img_upload = this.img_upload.bind(this);
    }
     // upload Video
    video_uplaod(e) {
    let files = e.target.files;
      // check is img
        let file_type=files[0].type.split('/').pop().toLowerCase();
        if(file_type == 'mp4'){
            let fileReader = new FileReader();
            fileReader.readAsDataURL(files[0]);
            fileReader.onload = (event) => {
                this.setState({
                    video: event.target.result,
                    message:'',
                    ShowEroor:false,
                })
            }
        }else{
             // if not video
            this.setState({
                ShowEroor:true,
                status:false,
                message:'file is not Video',
            })
        }
        
    
}
// upload img
    img_upload(e){
    let files = e.target.files;//get file
    // check is img
    let extension=['jpg','jpeg','png'];  //acceptable file types
    let file_type=files[0].type.split('/').pop().toLowerCase(),
        isSuccess = extension.indexOf(file_type) > -1;  //is extension in acceptable types
    if(isSuccess){
        // if is img
        let fileReader = new FileReader();
        fileReader.readAsDataURL(files[0]);
        fileReader.onload = (event) => {
            this.setState({
                image: event.target.result,
                image_status:true,
                message:'',
                ShowEroor:false,
            })
        }
    }else{
        // if not img
        this.setState({
            ShowEroor:true,
            status:false,
            message:'thumbe is not image',
            image: '',
            image_status:false,
        })
    }
    }
handleFormSubmit( event ) {
    event.preventDefault();
    const upload_url=this.props.usecontext.upload
    let add_post={
        name:this.state.name,
        video: this.state.video,
        image: this.state.image,
        id_author: localStorage.getItem('id'),
    }
    axios({
        method: 'post',
        url: `${upload_url}`,
        headers: { 'content-type': 'application/json' },
        data: add_post
    })
    .then(result => {
        this.setState({
        status:result.data.status,
        ShowEroor:result.data.status?false:true,
        message:result.data.message,
    })
    })
}
preview(){
    if(this.state.image_status === true ){
        return(
            <>
            <div className="card  col-6 bg-light shadow-lg p-3 mb-5 bg-body rounded ">
                        <div className="card-body  p-5">
                            <h2 className="text-uppercase text-center mb-5"> image preview </h2>
                            <img src={this.state.image} class="card-img-top" alt="..."/>
                        </div>
            </div>
            </>
        )
    }
}
error(){
    if(this.state.status ===false && this.state.ShowEroor === true){
        return(
            <div class="alert  alert-danger alert-dismissible fade show text-center" role="alert">
            {this.state.message}
            </div>
        )
    }else if(this.state.status ===true)
    {
        return(
            <Navigate replace to="/" />
            )
    }
}
    render(){
        let{name }=this.state
        return(
            <>
            <Header/>
            {/* form */}
            <div className="container">
                <div className="row">
                    {/* form */}
                    <form className="mt-1 col-6">
                        <div className="card bg-light shadow-lg p-3 mb-5 bg-body rounded ">
                            <div className="card-body  p-5">
                            <h2 className="text-uppercase text-center mb-5"> Upload Video </h2>
                            {this.error()}
                                {/* name */}
                                <div className="mb-3">
                                    <label for="fullname" className="form-label"> Name</label>
                                    <input type="text" className="form-control" id="fullname" aria-describedby="emailHelp"
                                    onChange={e=>this.setState({name:e.target.value})}
                                    value={name}
                                    />
                                </div>
                               {/* End name */}
                                {/* upload video */}
                                <div class="mb-5">
                                    <label for="video" class="form-label"> Video</label>
                                    <input class="form-control" type="file" id="formFile"  onChange={this.video_uplaod}/>
                                </div>
                                {/* upload thumbe */}
                                <div class="mb-5">
                                    <label for="thumbe" class="form-label"> thumbe </label>
                                    <input class="form-control" type="file" id="formFile"  onChange={this.img_upload}/>
                                </div>
                                {/* addpost Button */}
                                <div class="text-center text-lg-start mt-4 pt-2">
                                    <button type="submit" onClick={e => this.handleFormSubmit(e)} class="btn btn-primary">Upload</button>
                                </div>
                                {/* END addpost Button */}
                            </div>
                        </div>
                    </form>
                    {/* End form */}
                    {/* preview */}
                    {
                        this.preview()
                    }
                    {/* preview End */}
                </div>
            </div>
            
            {/* from End */}
            </>
        )
    }
    // render End
}

export default (props)=>(
    <Upload
    {...props}
    usecontext={useContext(Context)}
    />
)