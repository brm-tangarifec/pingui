<?php
require('db/requires.php');
ini_set('display_errors','1');
@error_reporting(0);
/*se ejecutan eventos dependiendo de lo solicitado*/
$varPost=filter_input_array(INPUT_POST);
$registrar= new Registro();
$session= new manejaSession();
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


//printVar($varPost);
$vrtCtr=$varPost['vrtCrt'];
//printVar($vrtCtr);
switch ($vrtCtr) {
	/*Trae ciudades por departamento*/
	case 'enc':
	$idVideoC=$varPost['video'];
	$video=explode("-", $idVideoC);
	$idVideo=$video[1];
	//printVar($idVideo);
	$datoVideo=$session->encryptS($idVideo,$protected);
	//printVar($datoVideo);
	setcookie('ywd_vid',$datoVideo, time() + 1200, '/');
	echo json_encode($datoVideo);
	break;
	/*Actualiza perfil*/
	case 'desc':
	$data=$varPost['video'];
	$desc=$session->decryptS($data,$protected);
	echo json_encode($desc);
	break;
	
	default:
		# code...
		break;
}
?>