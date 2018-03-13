<?php
header("Access-Control-Allow-Origin: *");

define('HOST','localhost');
define('USER','id4723019_root');
define('PASS','12345');
define('DB','id4723019_user');



$data = json_decode(file_get_contents("php://input"));


$_id = $data->id;

$conn = new mysqli(HOST, USER, PASS,DB);

$sql = "DELETE FROM product WHERE Id=".$_id."";


if ($conn->query($sql) === TRUE) {
    echo "OK";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}



$conn->close();




?>

