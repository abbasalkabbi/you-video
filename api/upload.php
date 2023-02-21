<?php
require 'config.php';
$httpPost = file_get_contents("php://input");
$_POST = json_decode($httpPost,true);
$DIR_video = "./videos/";
$DIR_thumbe = "./thumbe/";
if($_POST){
    $name=$_POST['name'];
    $id_author=$_POST['id_author'];
    $video=$_POST['video'];
    $image=$_POST['image'];
    // uplaod Video
    function upload_video($DIR){
        $file_chunks_video = explode(";base64,", $_POST['video']);
        $fileType = explode("video/", $file_chunks_video[0]);
        $video_type = $fileType[1];
        $base64video = base64_decode($file_chunks_video[1]);
        $name_video= uniqid() . '.'.$video_type;
        $file_video = $DIR . $name_video;
        file_put_contents($file_video, $base64video);
        return $name_video;
    }
    // End Video upload
    //  img upload
    function upload_img($DIR){
        // if there image
        $file_chunks = explode(";base64,", $_POST['image']);
        $fileType_img = explode("image/", $file_chunks[0]);
        $image_type = $fileType_img[1];
        $base64Img = base64_decode($file_chunks[1]);
        $name_img= uniqid() . '.'.$image_type;
        $file = $DIR . $name_img;
        file_put_contents($file, $base64Img);
        return $name_img;
    }// End img upload
    if(!empty($name) & !empty($video) & !empty($image)){
        $url_video=upload_video($DIR_video);
        $url_img=upload_img($DIR_thumbe);
        $insert=mysqli_query($conn,"INSERT INTO `videos` (`id_author`,`name_video`,`url_video`,`url_img`,`views`) VALUES ($id_author,'$name','$url_video','$url_img',12)");
        if($insert){
            echo json_encode(['status'=>true,'message'=>'Upload']);
        }
    }else{
    function error_input($name,$video,$image){
            if(empty($name)){
                return json_encode(['status'=>false,'message'=>'Name input is empty']);
            }
            if(empty($video)){
                return json_encode(['status'=>false,'message'=>'video input is empty']);
            }
            if(empty($image)){
                return json_encode(['status'=>false,'message'=>'image input is empty']);
            }
        }
        echo error_input($name,$video,$image);
    }
}


?>