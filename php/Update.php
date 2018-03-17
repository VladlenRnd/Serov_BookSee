<?php
header("Access-Control-Allow-Origin: *");

define('HOST','localhost');
define('USER','id4723019_root');
define('PASS','12345');
define('DB','id4723019_user');




    $data = json_decode($_POST["Update"]);

	$_id = $data->Id;
	$_name = $data->Name;
	$_prise = $data->Prise;
	$_auctor = $data->Auctor;
	$_genre = $data->Genre;
	$_description = $data->Description;
	$_availability = $data->Availability;
	$_discont = $data->Discount;



	$conn = new mysqli(HOST, USER, PASS,DB);


	$sql = "UPDATE product SET Name='".$_name."',Prise=".$_prise.",Auctor='".$_auctor."',Genre='".$_genre."',Description='".$_description."',Availability=".$_availability.",Discount=".$_discont." WHERE Id=".$_id."";

	if ($conn->query($sql) === TRUE) {
	 echo "OK";
	} 
	else {
		echo "Error: " . $sql . "<br>" . $conn->error;
          } 

		  

$conn->close();



?>