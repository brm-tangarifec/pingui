<?php
class Registro {

	/*Registra el usuario en la base de datos*/
	function inscripcion($campos) {
		//printVar($campos);
		$inscr = DB_DataObject::Factory('TbUsuario');
		$inscr ->nombre = $campos['nombre'];
		$inscr ->apellido = $campos['apellido'];
		$inscr ->email = $campos['email'];
		$inscr ->provincia = $campos['provincia'];
		$inscr ->ciudad = $campos['ciudad'];
		$inscr ->contrasena = $campos['lepass'];
		$inscr ->activo = $campos['aceptar'];
		$inscr ->idFacebook = $campos['idR'];
		$inscr ->fecha = date("Y-m-d H:i:s");
		$insert = $inscr -> insert();

		$inscr -> free();
		return $insert;
	}
	/*Verifica si existe el email*/
	function verficaEmial($mail){
		//DB_DataObject::debugLevel(1);
		$inscr = DB_DataObject::Factory('TbUsuario');
		$inscr->email=$mail;
		$return =false;
		$find=$inscr->find();
		if($find>0){
			$return = true;
		}
		//printVar($return);
		return $return;
	}

	/*Funcion para limpiar el texto antes de guardarlo*/
	function limpiaContent($nombreVariable){
		$limpieza = array(	"é" => "&eacute;",
			"á" => "&aacute;",
			"í" => "&iacute;",
			"ó" => "&oacute;",
			"ú" => "&uacute;",
			"ñ" => "&ntilde;",
			"É" => "&Eacute;",
			"Á" => "&Aacute;",
			"Í" => "&Iacute;",
			"Ó" => "&Oacute;",
			"Ú" => "&Uacute;",
			"Ñ" => "&Ntilde;",
			"®" => "&reg;",
			"¿" => "&iquest;",
			"¡" => "&iexcl;",
			"®" => "&reg;",

							
		);
		$nombreVariable = strtr($nombreVariable, $limpieza);
		return $nombreVariable;
	}

	/*Login*/
	function logueo($mail,$pass){
		//DB_DataObject::debugLevel(1);
		$logueo=DB_DataObject::Factory('TbUsuario');
		$logueo->selectAdd();
		$logueo->selectAdd('id,email,contrasena');
		$logueo->whereAdd('email="'.$mail.'" AND contrasena="'.$pass.'"');
		$logueo -> limit('1');
		$logueo -> find();
		
		$count = 0;
		while ($logueo -> fetch()) {
			$ret[$count]->id = $logueo->id;			
			$count++;
		}
		//$ret = $ret + 1;
		//Libera el objeto DBO
		return $ret;
		$logueo -> free();

	}
	/*Perfil de usuario*/
	function perfil($id){
		//printVar($id);
		//DB_DataObject::debugLevel(1);
		$perfil=DB_DataObject::Factory('TbUsuario');
		$perfil->selectAdd();
		$perfil->selectAdd('id,email,nombre,apellido,provincia,ciudad,contrasena,idFacebook');
		$perfil->whereAdd('id="'.$id.'"');
		$perfil->find();
		$count=0;
		while ($perfil->fetch()) {
			# code...
			$pef[$count]->id=$perfil->id;
			$pef[$count]->email=$perfil->email;
			$pef[$count]->nombre=$perfil->nombre;
			$pef[$count]->apellido=$perfil->apellido;
			$pef[$count]->provincia=$perfil->provincia;
			$pef[$count]->ciudad=$perfil->ciudad;
			$pef[$count]->contrasena=$perfil->contrasena;
			$pef[$count]->idFacebook=$perfil->idFacebook;
			$count++;

		}

		return $pef;
		$perfil->free();

	}
	/*Verifica si existe el email para enviar el mail*/
	function verficaEmialE($mail){
		//DB_DataObject::debugLevel(1);
		$inscr = DB_DataObject::Factory('TbUsuario');
		$inscr->selectAdd();
		$inscr->selectAdd('id,email');
		$inscr->whereAdd('email="'.$mail.'"');
		//$inscr->email=$mail;
		//$return =false;
		$find=$inscr->find();
		$count = 0;
		while ($inscr -> fetch()) {
			$ret[$count]->id = $inscr->id;			
			$ret[$count]->email = $inscr->email;			
			$count++;
		}
		//$ret = $ret + 1;
		//Libera el objeto DBO
		return $ret;
	}
}
?>