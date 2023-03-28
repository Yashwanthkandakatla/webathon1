<?php
$mysqli = new mysqli('localhost', 'root', '', 'hello');
if ($mysqli->connect_error) {
    die('Connect Error (' . $mysqli->connect_errno . ') '
            . $mysqli->connect_error);
}
echo 'Connected successfully';
$mysqli->close();
?>