<?php
require('db/requires.php');
ini_set('display_errors','0');
@error_reporting(0);
/*se ejecutan eventos dependiendo de lo solicitado*/
$varPost=filter_input_array(INPUT_POST);
$registrar= new Registro();
$session= new manejaSession();
$protocol=$session->site_protocol();
    printVar($protocol);
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
	case 'ciudad':
		# code...
	
		break;
	/*Verifica si ya se encuentra registrado el email*/
	case 'email':
		# code...
		$cedula=$varPost['email'];
		//printVar($varPost);
		
		$existe=$registrar->verficaEmial($cedula);
		//printVar($existe);
		if($existe==1){
			$mensaje='El mail ya se encuentra registrado';
			//echo false;
		}else{
			
			$mensaje='true';
		}
		echo json_encode($mensaje);
		//die();
		break;
	/*Registro de usuario*/
	case 'registrar':
		# code...
		printVar($varPost);
		setcookie('ywd_usui', "hola", time() + 1200, '/', $secure, $httponly);
		/*Datos de usauario*/
		if(isset($varPost['email']) && $varPost['email']!='' && isset($varPost['aceptar']) && $varPost['aceptar']=='S' && isset($varPost['lepas']) && $varPost['lepas']!='' && isset($varPost['lepasc']) && $varPost['lepasc']=!'' && $varPost['lepas']==$varPost['lepasc'] ){



		$campos['nombre']=utf8_decode($varPost['nombre']);
		$campos['apellido']=utf8_decode($varPost['apellido']);
		$campos['email']=strtolower($varPost['email']);
		$campos['provincia']=utf8_decode($varPost['provincia']);
		$campos['ciudad']=utf8_decode($varPost['ciudad']);
		$campos['lepass']=base64_encode($varPost['lepas']);
		$campos['aceptar']=$varPost['aceptar'];
		$campos['idR']=$varPost['idR'];

		//printVar($subida,'Hola s');
		$guardaUsu=$registrar->inscripcion($campos);
		//printVar($guardaUsu,'Respuesta insert');
		/*Creación y lectura de cookie*/
		//if($guardaUsu!=''){
			$host=$_SERVER['SERVER_NAME'];
			$dato=$guardaUsu."~".$host.'~4591';
			$creaSessionU=$session->write($guardaUsu,$dato,$host);
			//printvar($creaSessionU,'holaCU');
			$createCookieU=$session->start_session('ywd_usu',true);
			//printvar($createCookieU,'holaC');
			/*Se crea cookie de usuario*/
			setcookie('ywd_usu', $creaSessionU, time() + 1200, '/', $secure, $httponly);
		//}
		
		//die();
		if($guardaUsu>0){
			$mensaje="exitoso";
		}else{
			$mensaje="noguarda";
		}
	}else{
		$mensaje="Registro no v&aacute;lido";
	}
		echo json_encode($mensaje);
		break;
	/*Valida código de redención*/
	
	default:
		# code...
		break;
}
?>