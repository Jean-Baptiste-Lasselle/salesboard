import React, { Component } from 'react'
import { VictoryChart, VictoryAxis, VictoryLine, VictoryTheme, VictoryBar, VictoryTooltip } from 'victory'
import axios from 'axios'

class Main extends Component {
	
	constructor(props) {
		super(props)
		this.state = {
			openIssues: '--',
			todayIssues: '--',
			resolvedToday: '--',
			avgReplyTime: '--',
			lineChartData: require('../data/mainview.json'),
			barChartData: require('../data/mainview.json')
		}
		this.poll = this.poll.bind(this);
	}
	
	componentWillMount() {
		const intervalPoll = setInterval(this.poll, 3000)
		this.setState({intervalPoll: intervalPoll})
	}
	
	componentWillUnmount () {
		clearInterval(this.state.intervalPoll)
	}
	
	poll () {
		// blob address : 'https://jsonblob.com/74a7f0ea-b25b-11e6-871b-2761cb55326e'
		axios.get('https://jsonblob.com/api/jsonBlob/74a7f0ea-b25b-11e6-871b-2761cb55326e')
		.then((response) => {
			this.setState({
				openIssues: response.data.openIssues,
				todayIssues: response.data.todayIssues,
				resolvedToday: response.data.resolvedToday,
				avgReplyTime: response.data.avgReplyTime,
			})
			console.log(response)
		})
	}
	
	render() {
		const {openIssues, todayIssues, resolvedToday} = this.state
		return (
			<div className="container is-fluid" style={{backgroundColor: 'white', margin: 0}}>
				<div className="tile is-ancestor" style={{paddingLeft: 10, paddingRight: 10, margin: 0}}>
					<div className="tile is-4">
							<div className="tile">
								<div className="tile is-parent is-vertical">
									<article className="tile is-child" style={{border: "1px solid", borderRadius: 5, padding: 15}}>
										<p style={{fontWeight: "bold", letterSpacing: 1}}>WELCOME JOHN DOE</p>
										<p className="subtitle">to your dashboard</p>
									</article>
								</div>
						</div>
					</div>
					<div className="tile is-vertical is-8">
						<div className="tile">
							<div className="tile is-parent is-vertical">
								<article className="tile is-child" style={{border: "1px solid", borderRadius: 5, padding: 15}}>
									<p style={{fontWeight: "bold", letterSpacing: 1}}>TOTAL CUSTOMERS</p>
									<p className="subtitle">past 6 months</p>
									<div>
									<VictoryChart
										theme={VictoryTheme.material}
										domainPadding={20}
										height={150}
										padding={25}
									>
										<VictoryAxis 
											tickValues={["September", "October", "November", "December", "January", "February"]}
											style={{
												tickLabels: {fontSize: 6, padding: 5}
											}}
										/>
										<VictoryAxis 
											dependentAxis tickFormat={(y) => (`${y / 1000}k`)}
											style={{
												tickLabels: {fontSize: 6, padding: 5}
											}}
										/>
										<VictoryLine
											data={this.state.lineChartData.lineChart}
											x="month"
											y="profit"
											style={{
												labels: {fontSize: 12},
												parent: {border: "1px solid #ccc"}
											}}
										/>
									</VictoryChart>
									</div>
								</article>
							</div>
						</div>
					</div>
				</div>
				<div className="tile is-ancestor" style={{padding: 20}}>
					<div className="tile is-vertical is-8">
						<div className="tile">
							<div className="tile is-parent is-vertical">
								<article className="tile is-child" style={{border: "1px solid", borderRadius: 5, padding: 15}}>
								<p style={{fontWeight: "bold", letterSpacing: 1}}>OPEN ISSUES</p>
								<p className="subtitle"><span className="title">{openIssues}</span> total tickets</p>
								</article>
								<article className="tile is-child" style={{border: "1px solid", borderRadius: 5, padding: 15}}>
								<p style={{fontWeight: "bold", letterSpacing: 1}}>TICKETS RAISED TODAY</p>
								<p className="subtitle"><span className="title">{todayIssues}</span> new tickets</p>
								</article>
							</div>
							<div className="tile is-parent">
								<article className="tile is-child" style={{backgroundColor: "#A7DBD8", borderRadius: 5, padding: 15, color: "#ffffff", fontWeight: "bold", letterSpacing: 1}}>
								<p>TICKETS RESOLVED TODAY</p>
								<p className="subtitle" style={{color: "#ffffff"}}><span style={{fontSize: 54}}>{resolvedToday}</span> tickets resolved the past 24 hours</p>
								</article>
							</div>
						</div>
						<div className="tile is-parent">
							<article className="tile is-child notification is-danger" style={{backgroundColor: "#F38630", borderRadius: 0, padding: 15}}>
								<p style={{fontWeight: "bold", letterSpacing: 1}}>AVERAGE REPLY TIME</p>
								<span className="title">{this.state.avgReplyTime}</span>
							</article>
						</div>
					</div>
					<div className="tile is-parent">
						<article className="tile is-child" style={{border: "1px solid", borderRadius: 0, padding: 15}}>
								<p style={{fontWeight: "bold", letterSpacing: 1}}>MONTHLY TICKETS</p>
								<p className="subtitle">past 6 months</p>
								<VictoryChart
									domain={{ x: [0, 6.5], y: [-100, 100] }}
								>
								<VictoryBar
									labelComponent={<VictoryTooltip/>}
									data={this.state.barChartData.barChart}
									style={{
										data: {fill: "#F38630", width: 40}
									}}
								/>
								</VictoryChart>
						</article>
					</div>
				</div>
			</div>
		)
	}
}

export default Main
