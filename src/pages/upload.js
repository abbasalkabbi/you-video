import React from "react";
import { useContext ,Component} from "react";
import Context from "../Context";
import Header from "../components/header";
import axios from "axios";
class Upload extends Component{
    constructor(){
        super();
        this.state={
            name:'',
            video:'',
            image:'',
            info:'',
            image_status:false,
        }
        this.video_uplaod = this.video_uplaod.bind(this);
        this.img_upload = this.img_upload.bind(this);
    }
     // upload Video
    video_uplaod(e) {
    let files = e.target.files;
    let fileReader = new FileReader();
    fileReader.readAsDataURL(files[0]);
    fileReader.onload = (event) => {
        this.setState({
            video: event.target.result,
        })
    }
}
// upload img
    img_upload(e){
        let files = e.target.files;
    let fileReader = new FileReader();
    fileReader.readAsDataURL(files[0]);
    fileReader.onload = (event) => {
        console.log(fileReader.result)
        this.setState({
            image: event.target.result,
            image_status:true,
        })
    }
    }
handleFormSubmit( event ) {
    event.preventDefault();
    const upload_url=this.props.usecontext.upload
    console.log(upload_url)
    let add_post={
        name:this.state.name,
        video: this.state.video,
        image: this.state.image,
    }
    axios({
        method: 'post',
        url: `${upload_url}`,
        headers: { 'content-type': 'application/json' },
        data: add_post
    })
    .then(result => console.log(result)
        )
}
preview(){
    if(this.state.image_status === true){
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