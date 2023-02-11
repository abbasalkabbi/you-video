<?php
require"./config.php";
if($_GET){
    $id_video=$_GET['id_video'];
    function get_video($db,$id_video){
        // get all links
        $video=mysqli_query($db,"SELECT 
        `videos`.* , `user`.`avatar` , `user`.`id` , `user`.`name` FROM `user` 
        LEFT JOIN `videos` 
        ON `videos`.`id_author` = `user`.`id` AND videos.id_video=$id_video");
        $data_video= mysqli_fetch_all($video,MYSQLI_ASSOC);
        if($data_video){
            return json_encode($data_video);
        }else{
            return json_encode(['status'=>false,"message" => "No Video has This id $id"]);
        }
    }
    // get_video End 
    
    echo get_video($conn,$id_video);
    
}else{
    echo json_encode(['status'=>false,"message" => "There is Not Video"]);
}


?>