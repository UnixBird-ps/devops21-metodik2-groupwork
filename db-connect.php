<?php
// Do not allow this file to be loaded directly in browser
if(count(get_included_files()) ==1 && !isset($_GET["populateDB"])){
  exit("Direct access not permitted.");
}

// Connection details for MySQL server
$host = 'country-info-db-main'; // change to name of container
$port = '8010';
$user = 'root';
$pass = '';
$charset = 'utf8mb4';

// Options
$options = [
  PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
  PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
  PDO::ATTR_EMULATE_PREPARES   => false,
];

// Connect to MySQL server
try {
  $dsn = "mysql:host=$host;port=$port;charset=$charset";
  $db = new PDO($dsn, $user, $pass, $options);
} catch (\PDOException $e) {
  // throw new \PDOException($e->getMessage(), (int)$e->getCode());
  echo 'Dev mode:<br>Could not connect to DB<br>Retrying soon...';
  exit('<script>setTimeout(()=>location.reload(), 3000);</script>');
}

// Return a list of databases on the MySQL server
function getDatabases(){
  global $db;
  $stmt = $db->query('SHOW DATABASES');
  $dbs = [];
  $result = $stmt->fetchAll();
  foreach($result as $row){
    array_push($dbs,$row['Database']);
  }
  return $dbs;
}

// If the database "countries" does not exist then create it
// and populate it with data from the data folder
if(!in_array('countries', getDatabases()) && !isset($_GET["populateDB"])){
  echo 'Dev mode:<br>Creating and populating the database.<br>Hang on...';
  exit('<script src="db-connect.php?populateDB=1"></script>');
}
else if(!in_array('countries', getDatabases())){
  header('Content-type: application/javascript; charset=utf-8');
  $db->query('CREATE DATABASE countries');
  $db->query('USE countries');
  $db->query("CREATE TABLE `info` (
    `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
    `name` text,
    `infotext` longtext,
    PRIMARY KEY (`id`)
  )");
  $files = scandir('./data');
  $stmt = $db->prepare('INSERT INTO info(name,infotext) VALUES (?,?)');
  foreach($files as $file){
    if(!str_contains($file,'.html')){ continue; }
    $data = file_get_contents('./data/'.$file);
    $data = mb_convert_encoding($data, 'HTML-ENTITIES', 'UTF-8');
    $stmt->execute([substr($file, 0, -5), $data]);
  }
  exit('location.reload();');
}
else {
  $db->query('USE countries');
}