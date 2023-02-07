<?php
require"./config.php";
if($_GET){
    $id_video=$_GET['id'];
    function get_video($db,$id){
        // get all links
        $video=mysqli_query($db,"SELECT * FROM videos WHERE id_video=$id");
        $data_video= mysqli_fetch_all($video,MYSQLI_ASSOC);
        if($data_video){
            return json_encode($data_video);
        }else{
            return json_encode(['status'=>false,"message" => "No Video has This id $id"]);
        }
    }
    echo get_video($conn,$id_video);
}else{
    echo json_encode(['status'=>false,"message" => "There is Not Video"]);
}


?>