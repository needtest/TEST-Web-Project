<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<title>Untitled Document</title>
</head>

<body>


<?php
define ('DB_NAME', 'contact');
define ('DB_USER', 'a1952378_paul');
define ('DB_PASSWORD', 'welcome1');
define ('DB_HOST', 'server42.000webhost.com')

$link = mysql_connect('DB_HOST', 'DB_USER', 'DB_PASSWORD');

if (!$link) {
	die('could not connect: ' .mysql_error());
}
$db_selected = mysql_select_db(DB_NAME, $link);

if (!$db_selected) {
	die ('can\'t use' .DB_NAME . ':' .mysql_error());
}

echo 'Connected Successfully';




?>




</body>
</html>