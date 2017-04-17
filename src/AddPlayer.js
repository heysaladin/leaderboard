import React from 'react';

class AddPlayer extends React.Component{
	
	constructor(props){
		super(props)
		this.state = {
			name: ""
		}
		this.onPlayerChange = this.onPlayerChange.bind(this)
		this.addPlayer = this.addPlayer.bind(this)
	}

	onPlayerChange(event){
		this.setState({
			name: event.target.value
		})
	}

	addPlayer(event){
		this.props.onAdd(this.state.name)
		this.setState({
			name: ""
		})
	}

	render(){

		const styles = {
			container: {
				marginTop: 15,
				padding: 10,
				display: 'flex',
				alignItems: 'center',
				
			},
			input: {
				flexGrow: 1,
				padding: '2px 40px 2px 10px',
				marginRight: 5,
				width: '45%',
				height: 27,
				borderRadius: 25,
				border: 'solid 1px #ddd'
			},
			button: {
				flexGrow: 1,
				float: 'right',
				width: 100,
				padding: 8,
				borderRadius: 25,
				border: 'solid 1px #00d2d0',
				backgroundImage: 'linear-gradient(45deg,#00d2d0 0%,#0078a5 100%)',
				color: 'white',
				fontWeight: 'bold'
			}
		}

		return (
			<div style={styles.container}>
				<input style={styles.input} onChange={this.onPlayerChange} type="text" placeholder = "Put your favorite leader name here ..." value={this.state.name} />
				<button style={styles.button} onClick={this.addPlayer} >Add Leader</button>
			</div>
		)
	}
}

export default AddPlayer