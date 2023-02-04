<?php
require"./config.php";
$get_videos=mysqli_query($conn,"SELECT * FROM `videos`");
$data_videos= mysqli_fetch_all($get_videos,MYSQLI_ASSOC);
echo  json_encode($data_videos);
?>