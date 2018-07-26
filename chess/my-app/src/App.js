import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';
import './index.css';
import Home from './components/Home';
import About from './components/About';
import Topics from './components/Topics';

class App extends Component {
	state = {
		participantsSize: 10,
		participantsList: ['p0', 'p1', 'p2', 'p3', 'p4', 'p5', 'p6', 'p7', 'p8', 'p9']
	};
	render() {
		return (
			<BrowserRouter>
				<div className="App container">
					<h1 className="App-title">CHESS APP</h1>
					<div className="route-bar">
						<Link to="/home">Home</Link>
						<Link to="/about">About</Link>
						<Link to="/topics">Topics</Link>
					</div>
					<Route exact path="/home" component={Home} />
					<Route path="/about" render={() => <About list={this.state.participantsList} />} />
					<Route path="/topics" component={Topics} />
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
