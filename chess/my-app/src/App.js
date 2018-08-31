import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';
import './index.css';
import Home from './components/Home';
import About from './components/About';
import Rounds from './components/Rounds';
import matches from './matches';
import roundrobin from 'roundrobin';

class App extends Component {
	//prettier-ignore
	state = {
		participantsSize: 10,
		participantsList: ["pavan","rahul","sandhya","kancham","veerendra","bharath","sasank","chaitanya","bhumesh","sonali"],
		matches: []
	};

	componentDidMount() {
		//const matches = roundrobin(10, this.state.participantsList);
		this.setState({
			matches: matches
		});
	}

	onSelectChange = (outcome, matchIndex, roundIndex) => {
		let tempMatches = this.state.matches;
		tempMatches[roundIndex][matchIndex].outcome = outcome;
		this.setState({ matches: tempMatches });
		window.state = this.state;
	};

	render() {
		return (
			<BrowserRouter>
				<div className="App container">
					<h1 className="App-title">CHESS APP</h1>
					<div className="route-bar">
						<Link to="/home">Leaderboard</Link>
						<Link to="/about">Participants</Link>
						<Link to="/rounds">Rounds</Link>
					</div>
					<Route exact path="/home" component={Home} />
					<Route
						path="/about"
						render={() => <About list={this.state.participantsList} />}
					/>
					<Route
						path="/rounds"
						render={() => (
							<Rounds {...this.state} onSelectChange={this.onSelectChange} />
						)}
					/>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
[
	[
		['pavan', 'sonali'],
		['rahul', 'bhumesh'],
		['sandhya', 'chaitanya'],
		['kancham', 'sasank'],
		['veerendra', 'bharath']
	],
	[
		['pavan', 'bhumesh'],
		['sonali', 'chaitanya'],
		['rahul', 'sasank'],
		['sandhya', 'bharath'],
		['kancham', 'veerendra']
	],
	[
		['pavan', 'chaitanya'],
		['bhumesh', 'sasank'],
		['sonali', 'bharath'],
		['rahul', 'veerendra'],
		['sandhya', 'kancham']
	],
	[
		['pavan', 'sasank'],
		['chaitanya', 'bharath'],
		['bhumesh', 'veerendra'],
		['sonali', 'kancham'],
		['rahul', 'sandhya']
	],
	[
		['pavan', 'bharath'],
		['sasank', 'veerendra'],
		['chaitanya', 'kancham'],
		['bhumesh', 'sandhya'],
		['sonali', 'rahul']
	],
	[
		['pavan', 'veerendra'],
		['bharath', 'kancham'],
		['sasank', 'sandhya'],
		['chaitanya', 'rahul'],
		['bhumesh', 'sonali']
	],
	[
		['pavan', 'kancham'],
		['veerendra', 'sandhya'],
		['bharath', 'rahul'],
		['sasank', 'sonali'],
		['chaitanya', 'bhumesh']
	],
	[
		['pavan', 'sandhya'],
		['kancham', 'rahul'],
		['veerendra', 'sonali'],
		['bharath', 'bhumesh'],
		['sasank', 'chaitanya']
	],
	[
		['pavan', 'rahul'],
		['sandhya', 'sonali'],
		['kancham', 'bhumesh'],
		['veerendra', 'chaitanya'],
		['bharath', 'sasank']
	]
];
