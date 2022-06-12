<?php
    $servername = "localhost";
    $username = "root";
    $password = "mysql";
    $database = "countries";
?><!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=<, initial-scale=1.0">
  <title>Country Info</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <?php
    ini_set('display_errors', 1);
    ini_set('display_startup_errors', 1);
    error_reporting(E_ALL);

    // Create connection
    $conn = new mysqli($servername, $username, $password);

    // Check connection
    if ($conn->connect_error) {
      die("Connection failed: " . $conn->connect_error);
    }

    // Not really using db after this

    $country = isset($_GET["country"]) ? $_GET["country"] : '';

    if(!file_exists("./info/".$country.".html")){
      echo "<h1>Click a country...</h1>";
    }
    else {
      $contents = file_get_contents("./info/".$country.".html");
      $pos = strpos($contents,'coordinates');
      echo "<h1>$country</h1";
      echo $contents;
    }
?>
</body>
</html>