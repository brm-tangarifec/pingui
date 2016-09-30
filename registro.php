<?php
require("db/requires.php");
if(isset($_COOKIE['ywd_usu']) && $_COOKIE['ywd_usu']!='' ){
	header('location:registro.php');
}else{
	
$smarty->display("register.html");
}


?>