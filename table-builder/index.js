class Greeting extends React.Component {
	//prettier-ignore
	state = {
	    table: [
	        ['  ','  ','  ','  ','  ','  ','  ','  ','  ','  ','  ','  ','FO ','  ','  ','  ','  ',' '],
	        ['Dublin Airport (Atrium Rd Zone 11 Stop 1) <span style="float: right;" >DEP.</span> ',' 05.00',' 06.00',' 07.00',' 08.00',' 09.00',' 10.00',' 11.00',' 12.00',' 13.00',' 14.00',' 15.00',' |',' 16.00',' 17.00',' 18.00',' 20.00',' 22.30'],
	        ['Dublin (Busáras)<span class="red-text"> P</span>  ','05.30 ','06.30 ','07.30 ','08.30 ','09.30 ','10.30 ','11.30 ','12.30 ','13.30 ','14.30 ','15.30 ','16.00 ','16.30 ','17.30 ','18.30 ','20.30 ','23.00'],
	        ['Dublin (Heuston Station)<span class="red-text"> P</span>  ','05.40 ','06.40 ','07.40 ','08.40 ','09.40 ','10.40 ','11.40 ','12.40 ','13.40 ','14.40 ','15.40 ','16.10 ','16.40 ','17.40 ','18.40 ','20.40 ','23.10'],
	        ['Maynooth (67A Terminus)<span class="red-text"> P</span>  ','| ','| ','08.05 ','| ','| ','11.05 ','| ','| ','14.05 ','| ','| ','16.35 ','17.05 ','| ','  ','21.05 ','|'],
	        ['Enfield (Café Main Street) ','| ','| ','08.20 ','| ','| ','11.20 ','| ','| ','14.20 ','| ','| ','16.50 ','17.20 ','| ','| ','21.20 ','|'],
	        ['Kinnegad (Public House Main Street) ','| ','| ','08.35 ','| ','| ','11.35 ','| ','| ','14.35 ','| ','| ','17.05 ','17.35 ','| ','| ','21.35 ','|'],
	        ['Kilbeggan (The Square) ',' | ','|  ','08.55 ','|  ','|  ','11.55 ',' | ',' | ','14.55 ','|  ','|  ','17.25 ','17.55 ','|  ','|  ','21.55 ','| '],
	        ['Moate (Opp Bank Main Street) ',' | ',' | ','09.10 ',' | ',' | ','12.10 ','|  ','|  ','15.10 ',' | ','|  ','17.40 ','18.10 ',' | ',' | ','22.10 ','|'],
	        ['Athlone (Opp Athlone IT) ','07.00 ','08.00 ','09.25 ','10.00 ','11.00 ','12.25 ','13.00 ','14.00 ','15.25 ','16.00 ','17.00 ','17.55 ','18.25 ','19.00 ','20.00 ','22.25 ','00.30'],
	        ['Athlone (Bus Station) ','07.05 ','08.05 ','09.30 ','10.05 ','11.05 ','12.30 ','13.05 ','14.05 ','15.30 ','16.05 ','17.05 ','18.00 ','18.30 ','19.05 ','20.05 ','22.30 ','00.35'],
	        ['Ballinasloe (Dunlo Street) ','07.40 ','08.40 ','10.05 ','10.40 ','11.40 ','13.05 ','13.40 ','14.40 ','16.05 ','16.40 ','17.40 ','18.35 ','19.05 ','19.40 ','20.40 ','22.55 ','01.10'],
	        ['Ballinasloe (Portiuncula Hospital) ','07.42 ','08.42 ','10.07 ','10.42 ','11.42 ','13.07 ','13.42 ','14.42 ','16.07 ','16.42 ','17.42 ','18.37 ','19.07 ','19.42 ','20.42 ','22.57 ','01.12'],
	        ['Aughrim (Opp Emo Station) ','07.47 ','08.47 ','10.12 ','10.47 ','11.47 ','13.12 ','13.47 ','14.47 ','16.12 ','16.47 ','17.47 ','18.42 ','19.12 ','19.47 ','20.47 ','23.02 ','01.17'],
	        ['Loughrea (Beattys) ','08.06 ','09.06 ','10.30 ','11.06 ','12.06 ','13.30 ','14.06 ','15.06 ','16.30 ','17.06 ','18.05 ','19.90 ','19.30 ','20.06 ','21.06 ','23.30 ','01.36'],
	        ['Craughwell (Opp Church) ',' | ',' | ','10.44 ',' | ',' | ','13.44 ','|  ',' | ','16.44 ','|  ',' | ','19.14 ','19.44 ',' | ',' | ','23.44 ','|'],
	        ['Galway  (Opp GMIT Dublin Road)<span class="red-text"> D</span>  ','08.39 ','09.39 ','11.04 ','11.39 ','12.39 ','14.04 ','14.39 ','15.39 ','17.04 ','17.39 ','18.39 ','19.34 ','20.04 ','20.39 ','21.39 ','00.04 ','02.09'],
	        ['Galway (Bus Station) <span style="float: right;" >ARR.</span>  ','08.45 ','09.45 ','11.10 ','11.45 ','12.45 ','14.10 ','14.45 ','15.45 ','17.10 ','17.45 ','18.45 ','19.40 ','20.10 ','20.45 ','21.45 ','00.10 ','02.15']
	    ],
	    customProps: {
	    	contentEditable: true
	    }
	};

	exportData = () => {
		console.log(JSON.stringify(this.state.table));
	};
	addRow = () => {
		this.setState(
			{
				table: [
					...this.state.table,
					Array(this.state.table[0].length).fill(null)
				]
			},
			() => {
				console.log(this.state);
			}
		);
	};
	addColumn = () => {
		let tbl = this.state.table;
		tbl.forEach(tr => {
			tr.push(null);
		});
		this.setState({ table: tbl }, () => {
			console.log(this.state.table);
		});
	};

	updateCell = (e, idx, index) => {
		if(!e.target.value) return;
		let updatedTable = this.state.table;
		// e.target.value = e.target.innerText;
		updatedTable[idx][index] = e.target.value;
		this.setState({
			table: updatedTable
		});
	};
	handleClick = e => {
		console.log(e.type);
	};
	handleOnBlur = e => {
		e.target.contentEditable = false;
	};
	render() {
		return (
			<div>
				<table>
					<tbody>
						{this.state.table.map((tr, idx) => (
							<tr key={idx}>
								{tr.map((td, index) => (
									<td
										{...this.state.customProps}
										suppressContentEditableWarning="true"
										onClick={this.handleClick}
										onContextMenu={this.handleClick}
										onBlur={this.handleOnBlur}
										onKeyUp={e => {
											this.updateCell(e, idx, index);
										}}
										key={index}
									>
										{td}
									</td>
								))}
							</tr>
						))}
					</tbody>
				</table>
				<button onClick={this.exportData}>Export</button>
				<button onClick={this.addRow}>Add row</button>
				<button onClick={this.addColumn}>Add column</button>
			</div>
		);
	}
}
ReactDOM.render(<Greeting />, document.getElementById("root"));