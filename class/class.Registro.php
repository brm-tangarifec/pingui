<?php
class Registro {

	function inscripcion($campos) {
		//printVar($campos);
		$inscr = DB_DataObject::Factory('VntInscripcion');
		$inscr ->nombre = $campos['nombre'];
		$inscr ->apellido = $campos['apellido'];
		$inscr ->email = $campos['email'];
		$inscr ->autorizacion = $campos['autorizacion'];
		$inscr ->politicas = $campos['politicas'];
		$inscr ->idHorus = $campos['idHorus'];
		$inscr ->hash = $campos['hash'];
		$inscr ->token = $campos['token'];
		$inscr ->fecha = date("Y:m:d H:i:s");
		$insert = $inscr -> insert();

		$inscr -> free();
		return $insert;
	}

	function verficaEmial($mail){
		$inscr = DB_DataObject::Factory('VntInscripcion');
		$inscr->email=$mail;
		$return =false;
		$find=$inscr->find();
		if($find>0){
			$return = true;
		}
		//printVar($return);
		return $return;
	}

}
?>