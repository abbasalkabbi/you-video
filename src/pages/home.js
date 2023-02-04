import React from "react";
import Header from '../components/header'
import image from '../assets/thumbe.png'
import Video_item from "../components/video_item";
function Home(){
    return(
        <>
        <Header/>
        <div className="container">
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
            <Video_item name='hi' date='2020/1/2' view='100'/>
            <Video_item name='hi' date='2020/1/2' view='100'/>
            <Video_item name='hi' date='2020/1/2' view='100'/>
            <Video_item name='hi' date='2020/1/2' view='100'/>
            <Video_item name='hi' date='2020/1/2' view='100'/>
            
        </div>
        {/* end row */}
        </div>
        </>
    )
}
export default Home;