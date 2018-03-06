<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

define('HOST','localhost');
define('USER','id4723019_root');
define('PASS','12345');
define('DB','id4723019_user');


$conn = new mysqli(HOST, USER, PASS,DB);

$result = $conn->query("SELECT * FROM `product` WHERE 1");


$rows = array();
while($r = mysqli_fetch_assoc($result)) {
    $rows[] = $r;
}

$outp = json_encode($rows);
$conn->close();

echo($outp);
?>