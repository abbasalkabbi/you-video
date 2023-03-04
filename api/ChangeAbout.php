<?php
require 'config.php';
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);
if($_POST){
     // get data
    $about=$_POST['about'];
    $id=$_POST['id'];
    if(strlen($about) <10){
        //   if about is short 8 char
        echo json_encode(['status'=>false,"message" => "($about) is  Short"]);
    }else{
        $change=mysqli_query($conn,"UPDATE `user` SET `about`='$about' WHERE `id`=$id");
        echo json_encode(['status'=>true,"message" => "true"]);
    }
    

}

?>