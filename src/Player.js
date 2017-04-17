import React from 'react';

class Player extends React.Component{
	
	constructor(props){
		super(props)
		this.state = {
			score: this.props.score
		}
		this.incrementScore = this.incrementScore.bind(this)
		this.decrementScore = this.decrementScore.bind(this)
	}

	incrementScore(event){
		this.setState({
			score: this.state.score + 1
		})
	}

	decrementScore(event){
		this.setState({
			score: this.state.score - 1
		})
	}

	render(){

		const styles = {
			player: {
				display: 'flex',
				alignItems: 'center',
				padding: 10
			},
			name: {
				flex: '1'
			},
			playerScore: {
				width: 200,
				display: 'flex',
				justifyContent: 'flex-end'
			},
			score: {
				padding: 20
			},
			button: {
				padding: '8px 11px',
				borderRadius: '50%',
				border: 'solid 1px #ddd'
			},
			buttonMinus: {
				padding: '8px 13px',
				borderRadius: '50%',
				border: 'solid 1px #ddd'
			}
		}

		return (
			<div style={styles.player}>
				<div style={styles.name}>
					{this.props.name}
				</div>
				<div style={styles.playerScore}>
					<div>
						<button onClick={this.decrementScore} style={styles.buttonMinus}>-</button>
						<span style={styles.score}>{this.state.score}</span>
						<button onClick={this.incrementScore} style={styles.button}>+</button>
					</div>
				</div>
			</div>
		)
	}
}

export default Player