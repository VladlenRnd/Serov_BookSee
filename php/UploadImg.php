<?php
header("Access-Control-Allow-Origin: *");

define('HOST','localhost');
define('USER','id4723019_root');
define('PASS','12345');
define('DB','id4723019_user');



/*
$path = '../images/ProductImg/'; // директория для загрузки
$tmp = explode('.', $_FILES['file']['name']);
$file_extension = end($tmp);

$new_name = time().'.'.$file_extension; // новое имя с расширением
$full_path = $path.$new_name; // полный путь с новым именем и расширением





if($_FILES['file']['error'] == 0){
    if(move_uploaded_file($_FILES['file']['tmp_name'], $full_path)){
	
	$conn = new mysqli(HOST, USER, PASS,DB);

     $pathSave = "images/ProductImg/".$new_name;
		
		$sql = "UPDATE product SET Img='".$pathSave."' WHERE Id=3";

      if ($conn->query($sql) === TRUE) {
         echo "Record updated successfully ";
		}       
		else {
              echo "Error updating record: " . $conn->error;
		}

        // Если файл успешно загружен, то вносим в БД (надеюсь, что вы знаете как)
        // Можно сохранить $full_path (полный путь) или просто имя файла - $new_name
    }
}

$conn->close();
*/


?>