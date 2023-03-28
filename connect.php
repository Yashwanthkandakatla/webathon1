<?php
$username=$_POST['username'];
$password=$_POST['password'];
$gender=$_POST['gender'];
$email=$_POST['email'];
$mobilenumber=$_POST['mobilenumber'];
$conn =new mysqli('localhost','root','','hello');
if($conn->connect_error){
    die('Connection Failed : '.conn->connect_error);
}else{
    $stmt=$conn->prepare("insert into users(username,password,gender,email,mobilenumber) values(?,?,?,?,?)");
    $stmt->bind_param("sssss",$username,$password,$gender,$email,$mobilenumber);
    $stmt->execute();
    echo "user successfully updated... ";
    $stmt->close();
    $conn->close();
}


?>


