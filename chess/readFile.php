<?php
$f = fopen("abc.txt", "r");
// Read line from the text file and write the contents to the client
echo fgets($f);
echo "\n";

while(!feof($f)) { 
	echo fgets($f);
}
fclose($f);

$f = fopen("abc.txt", "a+");
fwrite($f, "PHP is fun!"); 
echo fgets($f);
fclose($f);
