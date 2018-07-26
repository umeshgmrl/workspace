<?php
echo "============CHESS TOURNAMENT============\n";
echo "Enter number of players : ";
$playerCount = trim(fgets(STDIN));
echo "The tournament has started with $playerCount players\n";

$p = new Player();
$p->addPlayers($playerCount);
$p->showPlayers();

class Player
{
	public $playersList = array();
	function addPlayers($playerCount)
	{	
		for ($i=0; $i < $playerCount; $i++) { 
			array_push($this->playersList, $i+1);
		}
	}
	function showPlayers()
	{
		foreach ($this->playersList as $index =>$player) {
			echo "$player";
			echo $index+1 != sizeof($this->playersList) ? ',' : '';
		}
		
	}
}