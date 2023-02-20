<?php
require 'config.php';
$httpPost = file_get_contents("php://input");
$_POST = json_decode($httpPost,true);
$DIR = "./assets/";
if($_POST){
    $name=$_POST['name'];
    $video=$_POST['video'];
    $file_chunks_video = explode(";base64,", $_POST['video']);
    $fileType = explode("video/", $file_chunks_video[0]);
    $video_type = $fileType[1];
    $base64Img = base64_decode($file_chunks_video[1]);
    $name_video= uniqid() . '.'.$video_type;
    $file = $DIR . $name_video;
    file_put_contents($file, $base64Img);
    
}


?>