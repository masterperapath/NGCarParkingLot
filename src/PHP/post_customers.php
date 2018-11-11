<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
$data = json_decode( file_get_contents('php://input'),true );
$fid =  $data['id'];
$firstName =  $data['firstName'];
$lastName =  $data['lastName'];
$conn = new mysqli('localhost','root','','parking_reserve');
$sql = "insert into users(firstName,lastName) values('".$firstName."','".$lastName."')";
$result = $con->query($sql);
?>