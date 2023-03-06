import React from "react";
import { useContext ,Component} from "react";
import Context from "../Context";
import Header from "../components/header";
import User_card from "../components/user_card";
import axios from "axios";
class Settings extends Component{
    constructor(){
        super();
        this.state={
            id:"",
            name:'',
            avatar:'',
            about:'',
            NameClass:'',
            imageClass:'',
        }
        this.img_upload = this.img_upload.bind(this);
    }
    // end constructor
    // Start componentDidMount
    componentDidMount(){
        // get src and get id 
        var id =localStorage.getItem('id');
        this.setState({
            src_img:this.props.usecontext.src_img,
            id:id
        })
            var link_user=`${this.props.usecontext.user}?id_user=${id}`;
            fetch(`${link_user}`)
            .then(response => response.json())
            .then(json=>{console.log(json)
                this.setState({
                    name:json[0].name,
                    avatar:json[0].avatar,
                    about:json[0].about,
                    date:json[0].date,
                    finished_info:true,
                })
            })
        
    }
    user_mapping(){
        let {finished_info,name,avatar,about,date,src_img}=this.state
        if(finished_info ===true){
            return(
                <div className="row">
                    <User_card name={name} avatar={`${src_img}${avatar}`} about={about} date={date}/>
                </div>
                
                )
        }
    }
    // ChangeName
    ChangeName(event){
        event.preventDefault();
        let url=this.props.usecontext.ChangeName
        let data={
            name: this.state.name,
            id: this.state.id,
        }
        axios({
            method: 'post',
            url: `${url}`,
            headers: { 'content-type': 'application/json' },
            data: data
        })
        .then(result =>{ console.log(result)
            if(result.data.status ==true){
                this.setState({
                    NameClass:'is-valid',
                })
            }else{
                this.setState({
                    NameClass:'is-invalid',
                })
            }
        })
    }
    // ChangeName End 
    // ChangeAbout(e)
    ChangeAbout(event){
        event.preventDefault();
        let url=this.props.usecontext.ChangeAbout
        let data={
            about: this.state.about,
            id: this.state.id,
        }
        axios({
            method: 'post',
            url: `${url}`,
            headers: { 'content-type': 'application/json' },
            data: data
        })
        .then(result =>{ console.log(result)
            if(result.data.status ==true){
                this.setState({
                    AboutClass:'is-valid',
                })
            }else{
                this.setState({
                    AboutClass:'is-invalid',
                })
            }
        })
    }
    // ChangeAbout(e) End
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
                    imageClass:'is-valid',
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
                imageClass:'is-invalid',
            })
        }
        }
    preview(){
            if(this.state.image_status === true ){
                return(
                    <>
                    <div className="card  col-sm-12 col-md-6 bg-light shadow-lg p-3 mb-5 bg-body rounded ">
                                <div className="card-body  p-5">
                                    <h2 className="text-uppercase text-center mb-5"> image preview </h2>
                                    <img src={this.state.image} class="card-img-top" alt="..."/>
                                </div>
                    </div>
                    </>
                )
            }
        }
        ChangeImage(event){
        event.preventDefault();
        let url=this.props.usecontext.ChangeImage
        let data={
            image: this.state.image,
            id: this.state.id,
        }
        axios({
            method: 'post',
            url: `${url}`,
            headers: { 'content-type': 'application/json' },
            data: data
        })
        .then(result =>{ console.log(result)
            if(result.data.status ==true){
                localStorage.setItem('avatar',result.data.avatar)
                this.setState({
                    imageClass:'is-valid',
                })
            }else{
                this.setState({
                    imageClass:'is-invalid',
                })
            }
        })
        }
        // end img
    // render
    render(){
        let {name,NameClass,about,AboutClass,imageClass}=this.state
        return(
            <>
            <Header/>
             {/* container */}
            <div className="container">
               {/* mapping */}
                    {this.user_mapping()}
               {/* mapping End */}
                <div className="row">
                     {/* name */}
                    <form className="mt-1 col-sm-12 col-md-12 ">
                        
                        <div className="mb-3 col-12 row ">
                                    <label for="fullname" className="form-label "> Name</label>
                                    <input type="text" className={`form-control  col-sm-12 col-md-8 ${NameClass}`}id="fullname" aria-describedby="emailHelp"
                                    onChange={e=>this.setState({name:e.target.value})}
                                    value={name}
                                    />
                                     {/* save Button */}
                                    <div class="text-center text-lg-end mt-2  ">
                                                <button type="submit" onClick={e => this.ChangeName(e)} class="btn btn-primary">Save</button>
                                    </div>
                                    {/* END save Button */}
                                </div>
                    </form>
                    {/* End name */}
                    {/* About */}
                    <form className="mt-1 col-sm-12 col-md-12 ">
                        
                        <div className="mb-3 col-12 row ">
                                    <label for="fullname" className="form-label "> About</label>
                                    <textarea  className={`form-control  col-sm-12 col-md-8 ${AboutClass}`} placeholder={about} id="floatingTextarea" onChange={e=>this.setState({about:e.target.value})}></textarea>
                                     {/* save Button */}
                                    <div class="text-center text-lg-end mt-2  ">
                                                <button type="submit" onClick={e => this.ChangeAbout(e)} class="btn btn-primary">Save</button>
                                    </div>
                                    {/* END save Button */}
                                </div>
                    </form>
                    {/* End About */}
                     {/* image */}
                    <form className="mt-1 col-sm-12 col-md-12 ">
                        
                        <div className="mb-3 col-12 row ">
                                    <label for="fullname" className="form-label "> image</label>
                                    <input  className={`form-control  col-sm-12 col-md-8 ${imageClass}`} type="file" id="formFile"  onChange={this.img_upload}/>
                                     {/* save Button */}
                                    <div class="text-center text-lg-end mt-2  ">
                                                <button type="submit" onClick={e => this.ChangeImage(e)} class="btn btn-primary">Save</button>
                                    </div>
                                    {/* END save Button */}
                                </div>
                    </form>
                    {
                        this.preview()
                    }
                    {/* End image */}
                </div>
            </div>
            {/* container End */}
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