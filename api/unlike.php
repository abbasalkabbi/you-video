<?php 
require"config.php";
if($_GET){
    $id_video=$_GET['id_video'];
    $id_author=$_GET['id_visitor'];
    // check if liked 
    $unliked=mysqli_query($conn,"SELECT * FROM `unlike` WHERE id_video=$id_video AND id_author=$id_author");
    if(mysqli_num_rows($unliked)){
        $delete=mysqli_query($conn,"DELETE  FROM `unlike` WHERE id_video=$id_video AND id_author=$id_author");
        if($delete){
            echo json_encode(['status'=>true,"message" => "successful","unlike"=>false]);
        }
    }else{
        $unlike=mysqli_query($conn,"INSERT INTO `unlike` (`id_video`, `id_author`) VALUES ( $id_video, $id_author)");
        if($unlike){
            echo json_encode(['status'=>true,"message" => "successful","unlike"=>true]);
        }
    }
    
}
?>