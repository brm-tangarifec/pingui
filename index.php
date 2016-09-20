<?php
/*Dato de lectura*/
    require("db/requires.php");
	$sessioneses= new manejaSession();
    $receta=5;
    $secure=true;
    $decrypProt=$sessioneses->llamaPass();
	printVar($decrypProt);
	if(isset($_COOKIE['ywd_in'])){
		printVar($datoCook,'Hola');
		$datoCook=$sessioneses->decryptS($_COOKIE['ywd_in'],$decrypProt);
		printVar($datoCook);
		echo '<div class="mensajes-sistema">'.$datoCook.'</div>';
		//die();
	}else{
		/*Creación y lectura de cookie*/
		
		$host=$_SERVER['SERVER_NAME'];
		$dato=$receta."~".$host.'~4591';
		$creasessiones=$sessioneses->write($receta,$dato,$host);
		$createCookie=$sessioneses->start_session('ywd_in',true);
		$datoCookie=$sessioneses->encryptS($receta, $decrypProt);
		printVar($decrypProt,'Hola Mateo');
		/*Se crea cookie de usuario*/
		setcookie('ywd_in', $createCookie, time() + 1200, '/', $secure, $httponly);
		setcookie('ywd_dt', $datoCookie, time() + 1200, '/', $secure, $httponly);
	}
   $smarty->display("pruebahtml.html");
?>