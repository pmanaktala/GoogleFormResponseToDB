<?php

//Extracting the JSON/XML from POST request
$post = file_get_contents('php://input');
//$post now contains the JSON array
$post = json_decode($post,true);

//Extact the data from this $post variable and push this data to database.

//Including yout config file of database
include "config.php";

//Your own customised SQL statement
$sql = "INSERT INTO TABLE_NAME VALUES ('$v1','$v2','$v3','$v4','$v5',$v6)";
$result = mysqli_query($conn, $sql);

$msg = "Added " . $v1 . " - " . $v2 . "\nStatus -" . $result;

//Optionally mail success after it is done
$res = mail('example@service.com', 'User Added', $msg , 'From: admin@domain.com');
if($res == 1)
{
    //Success
}
else
{
    //Failure
}
?>