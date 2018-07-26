<?php 
//CREATING AN ARRAY WITH DUMMY VALUES
function makeTable(){
	global $count;
	global $table;
	for ($i=0; $i < $count; $i++) { //ROWS
		for ($j=0; $j < $count; $j++) { //COLUMNS
			$table["$i"]["$j"]= 0;
		}
	}
	for ($i=0; $i < $count; $i++){
	    for ($j=0; $j < 1; $j++) { //COLUMNS
	        $table["$i"]["$j"]= "round".$i;
	    }
	}
	for ($i=0; $i < 1; $i++){
	    for ($j=0; $j < $count; $j++) { //COLUMNS
	        $table["$i"]["$j"]= "P".$j;
	    }
	}
}

//PRINTING THE ARRAY
function printTable(){
	global $count;
	global $table;
	for ($i=0; $i < $count; $i++) { //ROWS
	    for ($j=0; $j < $count; $j++) { //COLUMNS
	        echo $table["$j"]["$i"];
	        echo "\t";
	    }
	    echo "\n";
	}
}
 ?>