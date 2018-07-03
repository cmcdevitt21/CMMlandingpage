<?php
    header("Content-Type: application/json; charset=UTF-8");
    $userFile = fopen("users.json", "r") or die("Unable to open file to read!");
    $obj = fread($userFile,filesize("users.json"));
    fclose($userFile);
    echo $obj;
?>