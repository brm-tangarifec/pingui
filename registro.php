<?php
require("db/requires.php");

$varPost = filter_input_array(INPUT_POST);



$vrtCtr=$varPost['varCtrl'];

switch ($vrtCtr) {
	case 'ins':
		# code...
		//printVar($varPost,'hola');
		$registro= new Registro();
		if(isset($varPost['nombre']) && $varPost['nombre']!='' && isset($varPost['apellido']) && $varPost['apellido']!='' && isset($varPost['mail']) && $varPost['mail']!='' && isset($varPost["autorizacion"]) && $varPost["autorizacion"]=="S" && isset($varPost['politicas']) && $varPost['politicas']=="S"){


			
			/*Registro*/
			$horus=new Horus();
			$contrasena=$horus->multiPass();
			$campos['nombre']=$varPost['nombre'];
			$campos['apellido']=$varPost['apellido'];
			$campos['email']=$varPost['mail'];
			$campos['autorizacion']=$varPost['autorizacion'];
			$campos['politicas']=$varPost['politicas'];
			$campos['hash']=$contrasena;
			//printVar($campos);
			//die();
			$lologuea=$horus->doLogin($campos);
			//die();
			//printVar($lologuea);
			if($lologuea!=''){
				//echo 'existe';
				$campos['token']=$lologuea;
			
			}else{
				//echo 'Hola';
				$regHorus=$horus->registerHorus($campos);
				//printVar($regHorus);
				$campos['idHorus']=$regHorus->_id;
				$campos['token']=$regHorus->_token;
				//printVar($campos['idHorus'],'idHorus');
				//printVar($campos['token'],'horusT');
			}
			$inscripcion=$registro->inscripcion($campos);

			if($inscripcion!=''){
				$mensaje='exito';
			}else{
				$mensaje='error';
			}

		}else{
			$mensaje='error';
		}
		echo $mensaje;
		break;

	case 'cnt':
		# code...
		$registro= new Registro();
		if(isset($varPost['nombrec']) && $varPost['nombrec']!='' && isset($varPost['empresac']) && $varPost['empresac']!='' && isset($varPost['contacto']) && $varPost['contacto']!='' && isset($varPost['cargo']) && $varPost['cargo']!='' && isset($varPost['mailc']) && $varPost['mailc']!=''){

		
			$campos['nombre']=$varPost['nombrec'];
			$campos['empresac']=$varPost['empresac'];
			$campos['contacto']=$varPost['contacto'];
			$campos['cargo']=$varPost['cargo'];
			$campos['emailc']=$varPost['mailc'];
			
			$contacto=$registro->contacto($campos);

			if($contacto!=''){
				$mensaje='exito';
			}else{
				$mensaje='error';
			}
		}else{
			$mensaje='error';
		}
		
		echo $mensaje;
		break;

	case 'em':
		# code...
		//printVar($varPost,'hola');
		//die();
		$registro= new Registro();
		$email=$varPost['em'];
		$emailC=$registro->verficaEmial($email);
		//printVar($emailC);
		echo $emailC;
		break;
	
	default:
		# code...
		break;
}

?>