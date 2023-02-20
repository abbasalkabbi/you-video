<?php
require 'config.php';
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);
if($_POST){
    // get data
    $email=$_POST['email'];
    $password=$_POST['password'];
    // End get data
    // if input  empty
    if(empty($email) && empty($password)){
        echo json_encode(['status'=>false,"message" => "input is empty"]);
    }
    // if email is empty
    if (empty($email) && !empty($password) ){
        echo json_encode(['status'=>false,"message" => "email is empty"]);
    }
    // if password is empty
    if(empty($password) && !empty($email)){
        echo json_encode(['status'=>false,"message" => "password is empty"]);
    }
    // if input is not empty
    if(!empty($email) && !empty($password)){
        $login=mysqli_query($conn,"SELECT * FROM user WHERE email ='{$email}' AND password = '{$password}'");
        if(mysqli_num_rows($login)){
            // if logined
            while($obj = mysqli_fetch_object($login)){
                $id= $obj -> id; //hendle Unique_id
                $avatar= $obj -> avatar; //hendle Unique_id
            }
            echo json_encode(['status'=>true,"message" => "successful","id"=>$id,'avatar'=>"$avatar"]);
        }else{
            // if input is wrong
            echo json_encode(['status'=>false,"message" => "Input is not wrong"]);
        }
    }
}else{
    echo json_encode(['status'=>false,"message" => "There is input"]);
}



?>