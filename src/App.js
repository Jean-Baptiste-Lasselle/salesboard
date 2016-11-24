import React, { Component } from 'react'
import { HorizonRoute, connect } from 'react-hz'
import Main from './main/Main'
import Horizon from '@horizon/client'

class App extends Component {
	render() {
		return (
			<div>
				<Main />
				{this.props.openIssues}
			</div>
		)
	}
}

export default App