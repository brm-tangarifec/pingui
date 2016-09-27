<?php
    require("db/requires.php");

    //$receta=5;
	/*if(isset($_COOKIE['ywd_in'])){
		printVar("existe");
		$mensajeSis=$session->decryptS($_COOKIE['youth_msj'],$protected);
		echo '<div class="mensajes-sistema">'.$mensajeSis.'</div>';
	}else{
		/*Creación y lectura de cookie*
		$session= new manejaSession();
		$host=$_SERVER['SERVER_NAME'];
		$dato=$receta."~".$host.'~4591';
		$creaSession=$session->write($receta,$dato,$host);
		$createCookie=$session->start_session('ywd_in',true);
		/*Se crea cookie de usuario*
		setcookie('ywd_in', $creaSession, time() + 1200, '/', $secure, $httponly);
	}*/
  $smarty->display("recipes.html");
?>