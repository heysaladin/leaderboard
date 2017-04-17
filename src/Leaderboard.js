import React from 'react';

import Players from './Players.js'
import AddPlayer from './AddPlayer.js'

class Leaderboard extends React.Component{
	
	constructor(props){
		super(props)
		
		const PLAYERS = [
			{id: 1, name: "Soekarno", score: 30},
			{id: 2, name: "Soeharto", score: 10},
			{id: 3, name: "Habibi", score: 25},
			{id: 4, name: "Abdurrahman Wahid", score: 30},
			{id: 5, name: "Megawati Soekarno Putri", score: 10},
			{id: 6, name: "Susilo Bambang Yudhoyono", score: 25},
			{id: 7, name: "Joko Widodo", score: 25}
		]

		this.state = {
			members: PLAYERS
		}

		this.onPlayerAdd = this.onPlayerAdd.bind(this)

	}

	onPlayerAdd(name){
		let new_members = this.state.members
		new_members.push({id:new_members.length + 1, name: name, score: 10})
		this.setState({
			members: new_members
		})
	}

	render(){

		const styles = {
			container: {
				width: 350,
				margin: '25px auto',
				padding: 25,
				borderRadius: '0 0 15px 15px',
				fontFamily: 'sans-serif',
				borderTop: '4px solid transparent',
				borderImage: 'linear-gradient(to right, #3acfd5 0%, #3a4ed5 100%)',
				borderImageSlice: '1 0 0 0',
				borderBottom: 0,
				borderLeft: 0,
				borderRight: 0,
				boxShadow: '0 1px 5px rgba(0,0,0,.15)'
			},
			title:{
				textAlign: 'center',
				color: '#555',
				marginTop: 5,
				marginBottom: 25,
				paddingBottom: 25,
				borderBottom: 'solid 1px #eee'
			}
		}

		return (
			<div style={styles.container}>
				<h1 style={styles.title}>Leaderboard</h1>
				<Players members={this.state.members} />
				<AddPlayer onAdd={this.onPlayerAdd} />
			</div>
		)
	}
}

export default Leaderboard