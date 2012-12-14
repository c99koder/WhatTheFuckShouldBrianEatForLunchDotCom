<html>
<head>
<title>What The Fuck Should Brian Eat For Lunch</title>
</head>
<body>
<center>
<h1>Brian should:</h1>
<?php
$things = array(
"Fucking Eat Chinese Food",
"Not Fucking Eat Chinese Food"
);

echo "<h2>" . $things[rand()%count($things)] . "</h2>";
?>
<a href="/chinese.php?">Brian Doesn't Fucking Want To Do That</a>
</center>
</body>
</html>
