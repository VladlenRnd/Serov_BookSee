<?php
header("Access-Control-Allow-Origin: *");

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
$_hit = false;
$_description = $data->description;
$_availability = $data->availability;
$_discont = $data->discont;

$conn = new mysqli(HOST, USER, PASS,DB);

$sql = "INSERT INTO product (Name, Prise, Auctor, Genre, Img, Hit, Description, Availability, Discount)
VALUES ('".$_name."',".$_prise.",'".$_auctor."','".$_genre."','',false,'".$_description."',".$_availability.",".$_discont.")";

/*
$conn->query("INSERT INTO `product`(`Name`, `Prise`, `Auctor`, `Genre`, `Img`, `Hit`, `Description`, `Availability`, `Discount`) 
VALUES ('".$_name."',".$_prise.",'".$_auctor."','".$_genre."','',".$_hit.",'".$_description."',".$_availability.",".$_discont.")");
*/

if ($conn->query($sql) === TRUE) {
    echo "OK";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}



$conn->close();




?>

