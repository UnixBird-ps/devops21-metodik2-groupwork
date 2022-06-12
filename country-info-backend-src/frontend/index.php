<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Country Info</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
<?php
  // Comment in for error reporting
  /*ini_set('display_errors', 1);
  ini_set('display_startup_errors', 1);
  error_reporting(E_ALL);*/

  // Include code for database connection
  include_once('./db-connect.php');

  // Get country from query parameter
  $country = isset($_GET["country"]) ? $_GET["country"] : '';

  // Check for info about the country in the database
  $stmt = $db->prepare('SELECT * FROM info WHERE name=?');
  $stmt->execute([$country]);
  $result = $stmt->fetchAll();
  
  // Echo info if found
  if($country != '' && count($result) === 0){
    echo 'Can not find info about '.$country.'...';
  }
  else if($country != ''){
    echo $result[0]['infotext'];
  }
  else {
    echo 'Click on a country to get info...';
  }
?>
<script src="main.js"></script>
</body>
</html>