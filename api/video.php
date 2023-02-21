<?php
require"./config.php";

if($_GET){
    $id_video=$_GET['id_video'];
    $is_like=false;
    $is_unlike=false;
    // get video
    $video_query=mysqli_query($conn,"SELECT * FROM `videos` WHERE id_video=$id_video ");
    if(mysqli_num_rows($video_query)){
        while($video = mysqli_fetch_object($video_query)){
            $id_author=$video ->id_author; //get id_author
            $video_name=$video ->name_video; //get name
            $url_video=$video->url_video; //get url_video
            $thumbe_video=$video ->url_img; //get url_img
            $date_video=$video->date_video; //get date_video
            $views_video=$video ->views; //get date_video
        }
    }
    // end get video
    // get author info
    $author_query=mysqli_query($conn,"SELECT * FROM `user`  WHERE id=$id_author");
    if(mysqli_num_rows($author_query)){
        while($author = mysqli_fetch_object($author_query)){
            $author_name=$author -> name; // get author name
            $author_avatar=$author -> avatar; // get author avatar
        }
    }
    // get author info End
    // count like
    $like_count=mysqli_fetch_all(mysqli_query($conn,"SELECT count(*) as like_count from `like` WHERE id_video=$id_video"),MYSQLI_ASSOC);
    $likes=$like_count[0]['like_count'];
    // count like End 
    // count like
    $unlike_count=mysqli_fetch_all(mysqli_query($conn,"SELECT count(*) as unlike_count from `unlike` WHERE id_video=$id_video"),MYSQLI_ASSOC);
    $unlikes=$unlike_count[0]['unlike_count'];
    // count like End 
    if(isset($_GET['id_visitor'])){
        // if id_visitor
        $id_visitor=$_GET['id_visitor'];
        $like=mysqli_query($conn,"SELECT * FROM `like` WHERE  id_author=$id_visitor AND  id_video=$id_video");
        if(mysqli_num_rows($like)){
            $is_like=true;
        }
        $unlike=mysqli_query($conn,"SELECT * FROM `unlike` WHERE  id_author=$id_visitor AND  id_video=$id_video");
        if(mysqli_num_rows($unlike)){
            $is_unlike=true;
        }
    }
    echo json_encode([
    'status'=>true,
    'id_video'=>$id_video,
    'id_author'=>$id_author,
    'name_video'=>$video_name,
    'url_video'=>$url_video,
    'url_img'=>$thumbe_video,
    'date_video'=>$date_video,
    'views'=>$views_video,
    'avatar'=>$author_avatar,
    'name'=>$author_name,
    'like_count'=>$likes,
    'unlike_count'=>$unlikes,
    'like'=>$is_like,
    'unlike'=>$is_unlike,
    ]);
}else{
    
}


?>