import React, { Component } from 'react'
import Main from './main/Main'
import EmployeeLocations from './main/EmployeeLocations'
import AllIssues from './main/AllIssues'

class App extends Component {
	render() {
		return (
			<div>
				<Main />
				{this.props.children}
			</div>
		)
	}
}

export default App
