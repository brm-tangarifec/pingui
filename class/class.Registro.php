<?php
class Registro {

	function inscripcion($campos) {
		printVar($campos);
		$inscr = DB_DataObject::Factory('TbUsuario');
		$inscr ->nombre = $campos['nombre'];
		$inscr ->apellido = $campos['apellido'];
		$inscr ->email = $campos['email'];
		$inscr ->provincia = $campos['provincia'];
		$inscr ->ciudad = $campos['ciudad'];
		$inscr ->contrasena = $campos['lepass'];
		$inscr ->activo = $campos['aceptar'];
		$inscr ->fecha = date("Y:m:d H:i:s");
		$insert = $inscr -> insert();

		$inscr -> free();
		return $insert;
	}

	function verficaEmial($mail){
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
}
?>