<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
<title>Untitled Document</title>
	<script language="JavaScript" type="text/javascript" src="RSA.js"></script>
	<script language="JavaScript" type="text/javascript" src="BigInt.js"></script>
</head>

<body>
<?php

function printVar( $variable, $title = "" )
{
	$var = print_r( $variable, true );
	echo "<pre style='background-color:#dddd00; border: dashed thin #000000;'><strong>[$title]</strong> $var</pre>";
}

$include_path = ini_get('include_path');
//$include_path .= ":" . $_SERVER["DOCUMENT_ROOT"] . "/PEAR";
$include_path .= ";" . $_SERVER["DOCUMENT_ROOT"] . "/PEAR";
//printVar($include_path);
@ini_set('include_path', $include_path);

require_once 'Crypt/RSA.php';

$key_pair = new Crypt_RSA_KeyPair(38);

$public_key = $key_pair->getPublicKey();
$private_key = $key_pair->getPrivateKey();
$length = $key_pair->getKeyLength();

printVar( $length, "length" );
printVar( bin2hex($public_key->toString()), "public_key" );

printVar( bin2hex($private_key->toString()), "private_key" );



?>

<script language="JavaScript" type="text/javascript">

</script>
</body>
</html>
