<?php
define('HOST','localhost');
define('USER','id4723019_root');
define('PASS','12345');
define('DB','id4723019_user');

$data = json_decode(file_get_contents("php://input"));

$_code = $data->code;

$conn = new mysqli(HOST, USER, PASS,DB);

$conn->query("INSERT INTO `coupons`(`Cupon_code`) 
VALUES ('".$_code."'");

$conn->close();

?>