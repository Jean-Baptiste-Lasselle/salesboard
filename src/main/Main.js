import React, { Component } from 'react'
import { VictoryChart, VictoryAxis, VictoryBar, VictoryTooltip, VictoryArea, VictoryLine, VictoryTheme } from 'victory'

class Main extends Component {
	render() {
		return (
			<div className="container is-fluid" style={{backgroundColor: 'white', margin: 0}}>
				<div className="tile is-ancestor" style={{paddingLeft: 10, paddingRight: 10, margin: 0}}>
					<div className="tile is-4">
							<div className="tile">
								<div className="tile is-parent is-vertical">
									<article className="tile is-child" style={{border: "1px solid", borderRadius: 5, padding: 15}}>
										<p style={{fontWeight: "bold", letterSpacing: 1}}>WELCOME WINFRED</p>
										<p className="subtitle">you sexy beast</p>
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
											data={[
												{month: "September", profit: 35000, loss: 2000},
												{month: "October", profit: 42000, loss: 8000},
												{month: "November", profit: 55000, loss: 5000},
												{month: "December", profit: 35000, loss: 2000},
												{month: "January", profit: 42000, loss: 8000},
												{month: "February", profit: 55000, loss: 2000}
											]}
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
								<p className="subtitle"><span className="title">45</span> total tickets</p>
								</article>
								<article className="tile is-child" style={{border: "1px solid", borderRadius: 5, padding: 15}}>
								<p style={{fontWeight: "bold", letterSpacing: 1}}>TICKETS RAISED TODAY</p>
								<p className="subtitle"><span className="title">32</span> new tickets</p>
								</article>
							</div>
							<div className="tile is-parent">
								<article className="tile is-child" style={{backgroundColor: "#A7DBD8", borderRadius: 5, padding: 15, color: "#ffffff", fontWeight: "bold", letterSpacing: 1}}>
								<p>TICKETS RESOLVED TODAY</p>
								<p className="subtitle" style={{color: "#ffffff"}}><span style={{fontSize: 54}}>22</span> tickets resolved the past 24 hours</p>
								</article>
							</div>
						</div>
						<div className="tile is-parent">
							<article className="tile is-child notification is-danger" style={{backgroundColor: "#F38630", borderRadius: 0, padding: 15}}>
								<p style={{fontWeight: "bold", letterSpacing: 1}}>AVERAGE REPLY TIME</p>
								<span className="title">24 minutes 35 seconds</span>
							</article>
						</div>
					</div>
					<div className="tile is-parent">
						<article className="tile is-child" style={{border: "1px solid", borderRadius: 0, padding: 15}}>
								<p style={{fontWeight: "bold", letterSpacing: 1}}>MONTHLY TICKETS</p>
								<p className="subtitle">past 6 months</p>
								<VictoryChart
									domain={{ x: [0, 11], y: [-10, 10] }}
								>
								<VictoryBar
									labelComponent={<VictoryTooltip/>}
									data={[
										{x: 2, y: 5, label: "right-side-up"},
										{x: 4, y: -6, label: "upside-down"},
										{x: 6, y: 4, label: "tiny"},
										{x: 8, y: -5, label: "or a little \n BIGGER"},
										{x: 10, y: 7, label: "automatically"}
									]}
									style={{
										data: {fill: "#F38630", width: 60}
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
