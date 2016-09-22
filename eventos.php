<?php
require('db/requires.php');
require('class/class.Registro.php');
ini_set('display_errors','1');
/*se ejecutan eventos dependiendo de lo solicitado*/
$varPost=filter_input_array(INPUT_POST);
$registrar= new Registro();

//printVar($varPost);
$vrtCtr=$varPost['vrtCrt'];
//printVar($vrtCtr);
switch ($vrtCtr) {
	/*Trae ciudades por departamento*/
	case 'ciudad':
		# code...
	
		break;
	/*Verifica si ya se encuentra registrada la cedula*/
	case 'cc':
		# code...
		$cedula=$varPost['prodCedula'];
		//printVar($cedula);

		$existe=$camiseta->cedulaRegistrada($cedula);
		//printVar($existe[0]->id);
		if($existe[0]->id!=NULL || $existe[0]->id!=0){
			$mensaje='existeC';
		}else{
			$mensaje='noexiste';
		}
		echo json_encode($mensaje);
		break;
	/*Registro de usuario*/
	case 'registrar':
		# code...
		printVar($varPost);
		/*Datos de usauario*/
		if(isset($varPost['email']) && $varPost['email']!='' && isset($varPost['aceptar']) && $varPost['aceptar']=='S' && isset($varPost['lepas']) && $varPost['lepas']!='' && isset($varPost['lepasc']) && $varPost['lepasc']=!'' && $varPost['lepas']==$varPost['lepasc'] ){



		$campos['nombre']=utf8_decode($varPost['nombre']);
		$campos['apellido']=utf8_decode($varPost['apellido']);
		$campos['email']=$varPost['email'];
		$campos['provincia']=utf8_decode($varPost['provincia']);
		$campos['ciudad']=utf8_decode($varPost['ciudad']);
		$campos['lepass']=base64_encode($varPost['lepas']);
		$campos['aceptar']=$varPost['aceptar'];

		//printVar($subida,'Hola s');
		$guardaUsu=$registrar->inscripcion($campos);
		die();
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