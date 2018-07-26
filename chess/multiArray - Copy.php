<?php
$table= array();
echo "Enter number of players : 10\n";
$count= 10+1;
//$count = trim(fgets(STDIN));
//CREATING AN ARRAY WITH DUMMY VALUES
for ($i=0; $i < $count; $i++) { //ROWS
	for ($j=0; $j < $count; $j++) { //COLUMNS
		$table["$i"]["$j"]= $j;
	}
}
//MAKING VALUES 0
/*for ($j=0; $j < $count; $j++) { 
	$table["$j"]["0"]= $j;
}*/
//PRINTING THE ARRAY
for ($i=0; $i < $count; $i++) { //ROWS
    for ($j=0; $j < $count; $j++) { //COLUMNS
        echo $table["$j"]["$i"];
        echo "\t";
    }
    echo "\n";
}
die();
/*
for ($i=0; $i < $count; $i++) { 
	for ($j=0; $j < $count; $j++) { 
		if ($i!=0 && $j!=0) {
			$table["$i"]["$j"]= 0;
		}
	}
}*/
echo "---table for $count players has been created\n";
echo "---tournament has started\n";
//FUNCTION FOR MAKING SCHEDULE
function make_schedule(array $teams): array
{
    $teamCount = count($teams);
    if($teamCount < 2) {
        return [];
    }
    //Account for odd number of teams by adding a bye
    if($teamCount % 2 === 1) {
        array_push($teams, null);
        $teamCount += 1;
    }
    $halfTeamCount = $teamCount / 2;
    $rounds = $teamCount - 1;
    $schedule = [];
    for($round = 1; $round <= $rounds; $round += 1) {
        foreach($teams as $key => $team) {
            if($key >= $halfTeamCount) {
                break;
            }
            $team1 = $team;
            $team2 = $teams[$key + $halfTeamCount];
            //Home-away swapping
            $matchup = $round % 2 === 0 ? [$team1, $team2] : [$team2, $team1];
            $schedule[$round][] = $matchup;
        }
        rotate($teams);
    }
    return $schedule;
}
//ROTATING THE PLAYERS FOR ROUND ROBIN SCHEDULE
function rotate(array &$items)
{
    $itemCount = count($items);
    if($itemCount < 3) {
        return;
    }
    $lastIndex = $itemCount - 1;
    $factor = (int) ($itemCount % 2 === 0 ? $itemCount / 2 : ($itemCount / 2) + 1);
    $topRightIndex = $factor - 1;
    $topRightItem = $items[$topRightIndex];
    $bottomLeftIndex = $factor;
    $bottomLeftItem = $items[$bottomLeftIndex];
    for($i = $topRightIndex; $i > 0; $i -= 1) {
        $items[$i] = $items[$i - 1];
    }
    for($i = $bottomLeftIndex; $i < $lastIndex; $i += 1) {
        $items[$i] = $items[$i + 1];
    }
    $items[1] = $bottomLeftItem;
    $items[$lastIndex] = $topRightItem;
}
//MAKING SCHEDULE
$matchArray = make_schedule(['1','2','3','4','5','6','7','8','9','10']);

echo "Schedule is created\n";
echo "enter result of the 1st player...\n";
echo "2nd Player's result automatically added based on the result of 1st player...\n";


//CREATING ROUNDS
for ($round=1; $round < 3; $round++) {
	echo "---------Round $round has started----------\n";
	for ($match=0; $match < 5; $match++) { 
		echo ">>>>Player-".$matchArray[$round][$match][0]." v/s Player-".$matchArray[$round][$match][1].":\t";
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
        echo "---Player-".$standingTable[$key][0]."'s score is ".$standingTable[$key][1]."\n";
    }
}
for ($i=0; $i < $count; $i++) { 
    for ($j=0; $j < $count; $j++) { 
        echo $table["$j"]["$i"];
        echo "\t";
    }
    echo "\n";
}




