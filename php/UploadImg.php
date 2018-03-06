<?php
define('HOST','localhost');
define('USER','id4723019_root');
define('PASS','12345');
define('DB','id4723019_user');

$data = json_decode(file_get_contents("php://input"));

$_name = $data->name;

echo($_name);

?>

