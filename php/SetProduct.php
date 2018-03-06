<?php
define('HOST','localhost');
define('USER','id4723019_root');
define('PASS','12345');
define('DB','id4723019_user');

$data = json_decode(file_get_contents("php://input"));

$_name = $data->name;
$_prise = $data->prise;
$_auctor = $data->auctor;
$_genre = $data->genre;
$_img = $data->img;
$_hit = $data->hit;
$_description = $data->description;
$_availability = $data->availability;

$conn = new mysqli(HOST, USER, PASS,DB);

$conn->query("INSERT INTO `product`(`Name`, `Prise`, `Auctor`, `Genre`, `Img`, `Hit`, `Description`, `Availability`) 
VALUES ('".$_name."',".$_prise.",'".$_auctor."','".$_genre."','".$_img."',".$_hit.",'".$_description."',".$_availability."");

$conn->close();

?>

