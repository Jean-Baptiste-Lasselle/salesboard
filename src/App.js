import React, { Component } from 'react'
import Main from './main/Main'
import EmployeeLocations from './main/EmployeeLocations'
import AllIssues from './main/AllIssues'
import Footer from './components/Footer'
import NavBar from './components/NavBar'

class App extends Component {
	render() {
		return (
			<div className="columns">
				<NavBar />
				<div className="column is-10" style={{paddingLeft: 0}}>
					<nav className="nav has-shadow" id="top">
						<div className="nav-left">
							<a className="nav-item" href="../index.html">
								<h2 style={{fontSize: "24", paddingLeft: 10, letterSpacing: 1, fontWeight: "bold"}}>SALESBOARD</h2>
							</a>
						</div>
						<span className="nav-toggle" style={{paddingTop: 35}}>
							<span></span>
							<span></span>
							<span></span>
						</span>
						<div className="nav-right nav-menu is-hidden-tablet">
							<a href="#" className="nav-item is-active">
								Dashboard
							</a>
							<a href="#" className="nav-item">
								Activity
							</a>
							<a href="#" className="nav-item">
								Timeline
							</a>
							<a href="#" className="nav-item">
								Folders
							</a>
						</div>
					</nav>
				{this.props.children}
				<Footer />
				</div>
			</div>
		)
	}
}

export default App
