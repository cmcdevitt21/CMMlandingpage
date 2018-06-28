<?php
//check what mutex key is set to 
header("Content-Type: application/json; charset=UTF-8");
$checkKey = fopen("key.json", "r") or die("Unable to open file to read!");
$key = fread($checkKey,filesize("key.json"));
fclose($checkKey);
echo $key;
?>