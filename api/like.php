<?php 
require"config.php";
if($_GET){
    $id_video=$_GET['id_video'];
    $id_author=$_GET['id_visitor'];
    // check if liked 
    $liked=mysqli_query($conn,"SELECT * FROM `like` WHERE id_video=$id_video AND id_author=$id_author");
    if(mysqli_num_rows($liked)){
        $delete=mysqli_query($conn,"DELETE  FROM `like` WHERE id_video=$id_video AND id_author=$id_author");
        if($delete){
            echo json_encode(['status'=>true,"message" => "successful","like"=>false]);
        }
    }else{
        $like=mysqli_query($conn,"INSERT INTO `like` (`id_video`, `id_author`) VALUES ( $id_video, $id_author)");
        if($like){
            echo json_encode(['status'=>true,"message" => "successful","like"=>true]);
        }
    }
    
}
?>