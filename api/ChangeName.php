<?php
require 'config.php';
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);
if($_POST){
     // get data
    $name=$_POST['name'];
    $id=$_POST['id'];
    if(strlen($name) <7){
        //   if name is short 8 char
        echo json_encode(['status'=>false,"message" => "($name) is  Short"]);
    }else{
        $change=mysqli_query($conn,"UPDATE `user` SET `name`='$name' WHERE `id`=$id");
        echo json_encode(['status'=>true,"message" => "true"]);
    }
    

}

?>