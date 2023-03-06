<?php
require 'config.php';
$httpPost = file_get_contents("php://input");
$_POST = json_decode($httpPost,true);
$DIR= "./img/";
if($_POST){
    $image=$_POST['image'];
    $id=$_POST['id'];
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
    }
    $url_img=upload_img($DIR);
    $change=mysqli_query($conn,"UPDATE `user` SET `avatar`='$url_img' WHERE `id`=$id");
    if($change){
        echo json_encode(['status'=>true,"message" => "true","avatar"=>$url_img]);
    }else{
        echo json_encode(['status'=>false,"message" => "false"]);
    }
}
?>