import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./App.css";
import "./index.css";
import Home from "./components/Home";
import About from "./components/About";
import Rounds from "./components/Rounds";

import roundrobin from "roundrobin";

class App extends Component {
	//prettier-ignore
	state = {
		participantsSize: 10,
		participantsList: ["pavan","rahul","sandhya","kancham","veerendra","bharath","sasank","chaitanya","bhumesh","sonali"],
		matches: []
	};

	componentDidMount() {
		const matches = roundrobin(10, this.state.participantsList);
		this.setState({
			matches: matches
		});
		window.state = this.state;
	}

	onSelectChange = (winnerId, matchIndex, roundIndex) => {
		let matches = this.state.matches;
		matches[roundIndex][matchIndex][winnerId].points = "ok";
	};

	render() {
		return (
			<BrowserRouter>
				<div className="App container">
					<h1 className="App-title">CHESS APP</h1>
					<div className="route-bar">
						<Link to="/home">Home</Link>
						<Link to="/about">About</Link>
						<Link to="/rounds">Rounds</Link>
					</div>
					<Route exact path="/home" component={Home} />
					<Route
						path="/about"
						render={() => (
							<About list={this.state.participantsList} />
						)}
					/>
					<Route
						path="/rounds"
						render={() => (
							<Rounds
								{...this.state}
								onSelectChange={this.onSelectChange}
							/>
						)}
					/>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
