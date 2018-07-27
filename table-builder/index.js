class Greeting extends React.Component {
	//prettier-ignore
	state = {
		table: 
			[
				['hello', 'hello', 'hello', 'hello', 'hello', 'hello', 'hello', 'hello'],
				['hello', 'hello', 'hello', 'hello', 'hello', 'hello', 'hello', 'hello'],
				['hello', 'hello', 'hello', 'hello', 'hello', 'hello', 'hello', 'hello'],
				['hello', 'hello', 'hello', 'hello', 'hello', 'hello', 'hello', 'hello'],
				['hello', 'hello', 'hello', 'hello', 'hello', 'hello', 'hello', 'hello'],
				['hello', 'hello', 'hello', 'hello', 'hello', 'hello', 'hello', 'hello']
			]
		
	};
	render() {
		return (
			<table>
				{this.state.table.map(tr => (
					<tr>{tr.map(td => <td>{td}</td>)}</tr>
				))}
			</table>
		);
	}
}
ReactDOM.render(<Greeting />, document.getElementById("root"));