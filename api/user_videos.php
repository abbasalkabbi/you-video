<?php 
require"./config.php";
if($_GET){
    // check if get set
    if(isset($_GET['id_user'])){
        $id_user=$_GET['id_user'];
        $videos_query=mysqli_query($conn,"SELECT * FROM `videos` WHERE `id_author`=$id_user");
        $videos_fetch= mysqli_fetch_all($videos_query,MYSQLI_ASSOC);
        echo json_encode($videos_fetch);
    }
    // check if get set
}else{

}
?>