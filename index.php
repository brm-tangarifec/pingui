<?php
require("db/requires.php");
$session= new manejaSession();
$registro= new Registro();
$protocol=$session->site_protocol();
$protected=$session->llamaPass();
    //printVar($protocol);
    if($protocol=="https://"){
    	$secure=true;
    	$httponly=true;
    }else{
    	$secure=false;
    	$httponly=false;
    }
if(isset($_COOKIE['ywd_usu']) && $_COOKIE['ywd_usu']!='' || isset($_COOKIE['ywd_usud']) && $_COOKIE['ywd_usud']!=''  ){
	printVar($_COOKIE['ywd_usud']);
	/*Aqui va lo del usuario registrado*/
}else{
	$idF=rand (10000,99999);
	//printVar($idF);
	$creaSessionU=$session->write($idF,$dato);	
	$protected=$session->llamaPass();
	$createCookieU=$session->start_session('ywd_usud',true);
	//$datoCookie=$session->encryptS($idUsuarioL,$protected);
	//setcookie('ywd_usud', $creaSessionU, time() + 1200, '/', $secure, $httponly);
	$randoR=array("1","8","13");
	$recetasDesb=array_rand($randoR);
	printVar($recetasDesb);
	$recetas=$registro->recetasPing();
	$cuentar=count($recetas);
	for ($i=0; $i < $cuentar; $i++) {
		# code...
		printVar($recetas[$i]);
		$id=$recetas[$i]->id;
		$nombre=$recetas[$i]->nombre;
		$descripcion=$recetas[$i]->descripcion;
		printVar($id,"nombre[$id]");
		$smarty->assign("id[$id]",$id);
		$smarty->assign("nombre[$id]",$nombre);
		$smarty->assign("descripcion[$id]",$descripcion);
	}

	//printVar($recetas);
}

$smarty->display("recipes.html");
?>