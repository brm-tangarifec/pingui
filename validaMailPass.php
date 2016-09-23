<?php
require("db/requires.php");
$url=$_SERVER['QUERY_STRING'];

$session= new manejaSession();
$protected=$session->llamaPass();



$idUser=$session->decryptS($url,$protected);
printVar($idUser);
$separar=explode("~", $idUser);
var_dump($separar);

$fechaO=$separar[2];
$dfecha=date("Y-m-d H:i:s", strtotime($fechaO."+1 hours"));
printVar($fechaO);
printVar($dfecha);
$afecha=date("Y-m-d H:i:s");
printVar($afecha);
/*if($dfecha){

}*/
?>