<?php 
require"./config.php";
if($_GET){
    // check if get set
    if(isset($_GET['id_user'])){
        $id_user=$_GET['id_user'];
        // 
        $user_query=mysqli_query($conn,"SELECT  `name`,`avatar`,`about`,`date` FROM `user` ");
        $user_fetch= mysqli_fetch_all($user_query,MYSQLI_ASSOC);
        echo json_encode($user_fetch);
        
    }
    // check if get set End
}else{
    echo json_encode(['status'=>false,"message" => "There is input"]);
}


?>