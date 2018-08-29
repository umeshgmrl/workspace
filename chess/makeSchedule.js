const makeSchedule = (teams) =>{
	teamCount = teams.length;
	if(teamCount < 2) {
        return [];
    }
    if(teamCount % 2 === 1) {
    //Account for odd number of teams by adding a bye
		teams.push(null);
        teamCount++;
    }
    halfTeamCount = teamCount / 2;
    let rounds = teamCount - 1;
    let schedule = [];
    for(round = 1; round <= rounds; $round++) {
    	for (let i = 0; i < $teams.length; i++) {
    		if(i>=halfTeamCount) break;
    		team1 = team;
            team2 = teams[$key + $halfTeamCount];
    	}
        foreach($teams as $key => $team) {
            if($key >= $halfTeamCount) {
                break;
            }
            
            //Home-away swapping
            $matchup = $round % 2 === 0 ? [$team1, $team2] : [$team2, $team1];
            $schedule[$round][] = $matchup;
        }
        rotate($teams);
    }
    return $schedule;
}

console.log(makeSchedule([
            "p0",
            "p1",
            "p2",
            "p3",
            "p4",
            "p5",
            "p6",
            "p7",
            "p8",
            "p9"
        ]))