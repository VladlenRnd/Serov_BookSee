<?php
header("Access-Control-Allow-Origin: *");

define('HOST','localhost');
define('USER','id4723019_root');
define('PASS','12345');
define('DB','id4723019_user');




if(isset($_FILES['file']))
{
$path = '../images/ProductImg/'; // ���������� ��� ��������
$tmp = explode('.', $_FILES['file']['name']);
$file_extension = end($tmp);

$new_name = time().'.'.$file_extension; // ����� ��� � �����������
$full_path = $path.$new_name; // ������ ���� � ����� ������ � �����������






if($_FILES['file']['error'] == 0){

    if(move_uploaded_file($_FILES['file']['tmp_name'], $full_path))
	{

    $data = json_decode($_POST["MyInfo"]);

	$_name = $data->name;
	$_prise = $data->prise;
	$_auctor = $data->auctor;
	$_genre = $data->genre;
	$_img = "images/ProductImg/".$new_name;
	$_hit = false;
	$_description = $data->description;
	$_availability = $data->availability;
	$_discont = $data->discont;

	$conn = new mysqli(HOST, USER, PASS,DB);


	$sql = "INSERT INTO product (Name, Prise, Auctor, Genre, Img, Hit, Description, Availability, Discount)
	VALUES ('".$_name."',".$_prise.",'".$_auctor."','".$_genre."','".$_img."',false,'".$_description."',".$_availability.",".$_discont.")";


	if ($conn->query($sql) === TRUE) {
	 echo "OK";
	} 
	else {
		echo "Error: " . $sql . "<br>" . $conn->error;
          } 

        // ���� ���� ������� ��������, �� ������ � �� (�������, ��� �� ������ ���)
        // ����� ��������� $full_path (������ ����) ��� ������ ��� ����� - $new_name
    }
 }


}
 else
 {
 $data = json_decode($_POST["MyInfo"]);

	$_name = $data->name;
	$_prise = $data->prise;
	$_auctor = $data->auctor;
	$_genre = $data->genre;
	$_img = "";
	$_hit = false;
	$_description = $data->description;
	$_availability = $data->availability;
	$_discont = $data->discont;

	$conn = new mysqli(HOST, USER, PASS,DB);


	$sql = "INSERT INTO product (Name, Prise, Auctor, Genre, Img, Hit, Description, Availability, Discount)
	VALUES ('".$_name."',".$_prise.",'".$_auctor."','".$_genre."','".$_img."',false,'".$_description."',".$_availability.",".$_discont.")";


	if ($conn->query($sql) === TRUE) {
	 echo "OK";
	} 
	else {
		echo "Error: " . $sql . "<br>" . $conn->error;
          } 
 
 }







$conn->close();
?>

