<?php
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
$matchArray = make_schedule(['1','2','3','4','5','6','7','8','9','10']);
echo "<pre>";
print_r($matchArray);
echo "</pre>";
