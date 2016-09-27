<?php

    require("db/requires.php");
    
    //logueo
    $limpiaVar=filter_input_array(INPUT_POST);
    //printVar($limpiaVar);
    $registrar= new Registro();
    $session= new manejaSession();
    $protocol=$session->site_protocol();
    //print_r($protocol);
    //printVar($protocol);
    if($protocol=="https://"){
    	$secure=true;
    	$httponly=true;
    	//printVar($secure,'https');
    }else{
    	$secure=false;
    	$httponly=false;
    	//printVar($secure,'https');
    }
    //die();
    $mail=$limpiaVar['email'];
    $pass=base64_encode($limpiaVar['lepas']);
    $login=$registrar->logueo($mail,$pass);
    //printVar($login[0]->id);
    if($login[0]->id!='' && $login[0]->id!=0 && $login[0]->id > 0){
    	//echo "El usuario existe";
        $idUsuarioL=$login[0]->id;
    	$host=$_SERVER['SERVER_NAME'];
		$dato=$idUsuarioL."~".$host.'~4591';
		$destroy=$session->destroy($idUsuarioL);
		$creaSessionU=$session->write($idUsuarioL,$dato);
		//printvar($creaSessionU,'holaCU');
		$createCookieU=$session->start_session('ywd_usu',true);
		$protected=$session->llamaPass();
		$datoCookie=$session->encryptS($idUsuarioL,$protected);
		//printvar($datoCookie,'holaC');
		//printvar($httponly,'holaC');
		/*Se crea cookie de usuario*/
	   	setcookie('ywd_fr',$datoCookie, time() + 1200, '/');
		setcookie('ywd_usu', $creaSessionU, time() + 1200, '/', $secure, $httponly);
			
		header('location: perfil.php');
    }else{
    	//echo "El usuario o la contras&ntilde;a no son v&aacute;lidos";
    	header('location: registro.php');
    }



?>