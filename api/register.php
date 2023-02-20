<?php
require 'config.php';
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);
if($_POST){
    // get data
    $name=$_POST['name'];
    $email=$_POST['email'];
    $password=$_POST['password'];
    // End get data
    // if input  empty
    if(empty($name) || empty($email) || empty($password)){
        echo json_encode(['status'=>false,"message" => "input is empty"]);
    }
    // if input is not empty
    if(!empty($email) && !empty($email) && !empty($password)){
        if(filter_var($email,FILTER_VALIDATE_EMAIL)){
            // check is email 
            $email_check=mysqli_query($conn,"SELECT * FROM user WHERE email = '{$email}'");
            if(mysqli_num_rows($email_check) >0){
                // if email is not new
                    echo json_encode(['status'=>false,"message" => "($email) is  login"]);
            }else{
                // if email is new
                if(strlen($name) <7){
                    //   if name is short 8 char
                    echo json_encode(['status'=>false,"message" => "($name) is  Short"]);
                }else{
                    if(strlen($password) <7){
                         //   if password is short 8 char
                        echo json_encode(['status'=>false,"message" => "($password) is  Short"]);
                    }else{
                        //   if password is not  short 8 char
                        $register=mysqli_query($conn,"INSERT INTO `user`( `name`, `email`, `password`, `avatar`, `about`) VALUES ('$name','$email','$password','default.png','Not about ')");
                        if($register){
                            $login=mysqli_query($conn,"SELECT * FROM user WHERE email ='{$email}' AND password = '{$password}'");
                            if(mysqli_num_rows($login)){
                                // if logined
                                while($obj = mysqli_fetch_object($login)){
                                    $id= $obj -> id; //hendle Unique_id
                                }
                                echo json_encode(['status'=>true,"message" => "successful","id"=>$id]);
                            }else{
                                // if input is wrong
                                echo json_encode(['status'=>false,"message" => "Input is not wrong"]);
                            }
                        }
                    }
                }
            }
        }else{
            // if is not eamil
            echo json_encode(['status'=>false,"message" => "($email) is not validate"]);
        }
        
    }
}else{
    echo json_encode(['status'=>false,"message" => "There is input"]);
}




?>