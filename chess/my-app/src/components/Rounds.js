import React from "react";

const Topics = props => {
	return (
		<div>
			{props.matches.map((round, roundIndex) => (
				<div key={roundIndex} className="box">
					{round.map((match, matchIndex) => (
						<p className="box" key={matchIndex}>
							{match[0]} v/s {match[1]}
							<select
								defaultValue=" "
								className="select"
								onChange={e =>
									props.onSelectChange(
										e.target.value,
										matchIndex,
										roundIndex
									)
								}
							>
								<option value=" " disabled={true} />
								<option value="0">{match[0]}</option>
								<option value="1">{match[1]}</option>
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
