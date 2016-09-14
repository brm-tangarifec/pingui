<?php

require_once('DBO.php');

function regenerateDataObject()
{
    //require_once 'DB/DataObject/Generator.php';
    require_once 'DB/DataObject/GeneratorNew.php';
    $generator = new DB_DataObject_Generator;
    $generator->start();
}

regenerateDataObject();

?>