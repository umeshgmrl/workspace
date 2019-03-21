import React from "react";

const Home = props => {
	return (
		<div>
			<h1>Leaderboard</h1>
			<div>
				{props.state.matches.map(round => (
					<div className="box">
						{round.map(match => (
							<p>
								{match.p1} vs {match.p2} : <strong>{match.outcome}</strong>
							</p>
						))}
					</div>
				))}
			</div>
		</div>
	);
};

export default Home;
