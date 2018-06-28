<?php
    $contacts = $_POST["contacts"];
    $one->key="1";
    $zero->key= "0";
    $oneJ =json_encode($one);
    $zeroJ =json_encode($zero);
    $setKey = fopen("key.json", "w") or die("Unable to open file to write!");
    fwrite($setKey, $oneJ);
    fclose($setKey);
    $myfile = fopen("contacts.json", "w") or die("Unable to open file to write!");
    fwrite($myfile, $contacts);
    fclose($myfile);
    $releaseKey = fopen("key.json", "w") or die("Unable to open file to write!");
    fwrite($releaseKey, $zeroJ);
    fclose($releseKey);
    echo "Contacts saved";
?>