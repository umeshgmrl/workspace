<style>
	body{
		margin: 15px;
		font-family: Consolas;
		font-size: 18px;
	}
	a{
		color: black;
	}
</style>
<?php
$directory = "../";

$request = parse_url($_SERVER['REQUEST_URI']);
$path = $request["path"];
if($path!='/'){
	$directory = $path.'/';
}

echo $directory.'<br>';
$files = glob($directory."*");
foreach ($files as $file) {
	echo '<a href="'.$file.'">'.$file.'</a><br>';
}
echo '<a href="/">Home</a><br>';

