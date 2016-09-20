<?php
/*Dato de lectura*/
    require("db/requires.php");
<<<<<<< Updated upstream
=======
<<<<<<< HEAD
   $smarty->display("recipes.html");
=======
>>>>>>> Stashed changes
	$session= new manejaSession();
    $receta=5;
    $decrypProt=$session->llamaPass();
	printVar($decrypProt);
	if(isset($_COOKIE['ywd_in'])){
		printVar($datoCook,'Hola');
		$datoCook=$session->decryptS($_COOKIE['ywd_in'],$decrypProt);
		printVar($datoCook);
		echo '<div class="mensajes-sistema">'.$datoCook.'</div>';
		die();
	}else{
		/*Creación y lectura de cookie*/
		
		$host=$_SERVER['SERVER_NAME'];
		$dato=$receta."~".$host.'~4591';
		$creaSession=$session->write($receta,$dato,$host);
		$createCookie=$session->start_session('ywd_in',true);
		$datoCookie=$session->encryptS($receta, $decrypProt);
		/*Se crea cookie de usuario*/
		setcookie('ywd_in', $createCookie, time() + 1200, '/', $secure, $httponly);
		setcookie('ywd_dt', $datoCookie, time() + 1200, '/', $secure, $httponly);
	}
   //$smarty->display("pruebahtml.html");
<<<<<<< Updated upstream
=======
>>>>>>> origin/master
>>>>>>> Stashed changes
?>