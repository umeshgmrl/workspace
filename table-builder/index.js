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

	exportData = () => {
		console.log(JSON.stringify(this.state.table));
	}
	addRow = () => {
		this.setState({
			table: [...this.state.table, Array(this.state.table[0].length).fill(null)]
		}, ()=>{ console.log(this.state)})
	}

	updateCell = (e, idx, index) =>{
		let updatedTable = this.state.table;
		updatedTable[idx][index] = e.target.innerText;
		this.setState({
			table : updatedTable
		}, ()=>{console.log(this.state.table)})
	}

	render() {
		return (
			<div>
				<table>
				<tbody>
					{this.state.table.map((tr, idx) => (
						<tr key={idx}>{tr.map((td, index) => <td onKeyUp={e => {this.updateCell(e, idx, index)}} contentEditable='true' key={index}>{td}</td>)}</tr>
					))}
				</tbody>
				</table>
				<button onClick={this.exportData}>Export</button>
				<button onClick={this.addRow}>Add row</button>
			</div>
		);
	}
}
ReactDOM.render(<Greeting />, document.getElementById("root"));