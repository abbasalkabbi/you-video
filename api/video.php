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
            return $data_video;
        }else{
            return json_encode(['status'=>false,"message" => "No Video has This id $id"]);
        }
    }
    // get_video End 
    // if have id_visitor
    if(isset($_GET['id_visitor'])){
        $id_visitor=$_GET['id_visitor'];
        function get_visitor($db,$id_video,$id_visitor){
            $is_like=false;
            $is_unlike=false;
            $like=mysqli_query($db,"SELECT * FROM `like` WHERE  id_author=$id_visitor AND  id_video=$id_video");
            if(mysqli_num_rows($like)){
                $is_like=true;
            }
            $unlike=mysqli_query($db,"SELECT * FROM `unlike` WHERE  id_author=$id_visitor AND  id_video=$id_video");
            if(mysqli_num_rows($unlike)){
                $is_unlike=true;
            }
            return ['islike'=>$is_like,"isunlike" => $is_unlike];
        }
    }
    // if have id_visitor End 
    if(isset($_GET['id_video']) && isset($_GET['id_visitor']) ){
        $video_json =get_video($conn,$id_video);
        $like_unlike=get_visitor($conn,$id_video,$id_visitor);
        array_push($video_json,$like_unlike);
        echo json_encode($video_json);
    }else{
        echo json_encode (get_video($conn,$id_video));
    }
    
}else{
    echo json_encode(['status'=>false,"message" => "There is Not Video"]);
}


?>