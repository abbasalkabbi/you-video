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
            info:'',
        }
        this.onFileChange = this.onFileChange.bind(this);
    }
     // upload image
    onFileChange(e) {
    let files = e.target.files;
    let fileReader = new FileReader();
    fileReader.readAsDataURL(files[0]);
    fileReader.onload = (event) => {
        this.setState({
            video: event.target.result,
        })
    }
}
handleFormSubmit( event ) {
    event.preventDefault();
    const upload_url=this.props.usecontext.upload
    console.log(upload_url)
    let add_post={
        name:this.state.name,
        video: this.state.video
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
    render(){
        let{name ,video}=this.state
        return(
            <>
            <Header/>
            {/* form */}
            <div className="container">
                <div className="row">
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
                                    <label for="video" class="form-label"> </label>
                                    <input class="form-control" type="file" id="formFile"  onChange={this.onFileChange}/>
                                </div>
                                {/* addpost Button */}
                                <div class="text-center text-lg-start mt-4 pt-2">
                                    <button type="submit" onClick={e => this.handleFormSubmit(e)} class="btn btn-primary">Upload</button>
                                </div>
                                {/* END addpost Button */}
                            </div>
                        </div>
                    </form>
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