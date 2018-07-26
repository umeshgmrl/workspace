<?php
include 'array-creation.php';
include 'make-schedule.php';

$table= array();
echo "Enter number of players : 10\n";
echo "Number of rounds : 9\n";
$count= 10;
makeTable();
printTable();

echo "---table for $count players has been created\n";
echo "---tournament has started\n";

makeSchedule();

echo "Schedule is created\n";
echo "enter result of the 1st player...\n";
echo "2nd Player's result automatically added based on the result of 1st player...\n";


//CREATING ROUNDS
for ($round=1; $round < 4; $round++) {
	echo "---------Round $round has started----------\n";
	for ($match=0; $match < 5; $match++) { 
		echo ">>>>P".$matchArray[$round][$match][0]." v/s P".$matchArray[$round][$match][1].":\t";
		$result1 = trim(fgets(STDIN));
		if($result1==1){
			$result2= 0;
		}
		elseif($result1==0) {
			$result2= 1;
		}
		else{
			$result1= 0.5;
			$result2= 0.5;
		}
		$table[$round][$matchArray[$round][$match][0]]= $result1;
		$table[$round][$matchArray[$round][$match][1]]= $result2;
	}
    //TEMPORERY ARRAY
    $standingTable= array();
    foreach ($table[$round] as $key => $value) {
        $standingTable[$key][0]=  $key;
        $standingTable[$key][1]= $value;
    }
    //SORTING WITH SPACESHIP OPERATOR
    usort($standingTable, function($a, $b) {
        return $b[1] <=> $a[1];
    });

    for ($key=1; $key < 11; $key++) { 
        echo "---Player-".$standingTable[$key][0]."s score is ".$standingTable[$key][1]."\n";
    }
}
for ($i=0; $i < $count; $i++) { 
    for ($j=0; $j < $count; $j++) { 
        echo $table["$j"]["$i"];
        echo "\t";
    }
    echo "\n";
}




