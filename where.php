<html>
<head>
<title>Where The Fuck Should Brian Eat Lunch</title>
</head>
<body>
<center>
<h1>Brian should eat at:</h1>
<?php
$things = array(
"Fucking Subway", "Fucking China Wok", "Fucking Panera Bread", "Fucking Italian Connection", "Fucking Empanada Mania","Fucking 5 Guys (Gay)", "Bobby Fucking Flay's Burgers"
);

echo "<h2>" . $things[rand()%count($things)] . "</h2>";
?>
<a href="/where.php?">Brian Doesn't Fucking Want To Eat There</a>
</center>
</body>
</html>
