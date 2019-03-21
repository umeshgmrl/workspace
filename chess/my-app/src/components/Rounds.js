import React from "react";

const Topics = props => {
	return (
		<div>
			{props.matches.map((round, roundIndex) => (
				<div key={roundIndex} className="box">
					{round.map((match, matchIndex) => (
						<p className="box" key={matchIndex}>
							{match.p1} v/s {match.p2}
							<select
								defaultValue=" "
								className="select"
								onChange={e => props.onSelectChange(e.target.value, matchIndex, roundIndex)}
							>
								<option value=" " disabled={true} />
								<option value={match.p1}>{match.p1}</option>
								<option value={match.p2}>{match.p2}</option>
								<option value="tie">tie</option>
							</select>
						</p>
					))}
				</div>
			))}
		</div>
	);
};

export default Topics;
