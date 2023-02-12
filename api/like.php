<?php 
require"config.php";
if($_GET){
    $id_video=$_GET['id_video'];
    $id_visitor=$_GET['id_visitor'];
    $like=mysqli_query($conn,"INSERT INTO `like` (`id_video`, `id_author`) VALUES ( $id_video, $id_visitor)");
}
?>