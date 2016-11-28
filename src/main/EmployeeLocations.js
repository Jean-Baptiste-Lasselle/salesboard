import React, {Component} from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import axios from 'axios'

class EmployeeLocations extends Component {

    constructor(props) {
        super(props)
		this.state = {
			lat: 51.505,
			lng: -0.09,
			zoom: 13,
			issuesIbiza: "--",
			issuesKathmandu: "--",
			issuesSingapore: "--"
		}
		this.poll = this.poll.bind(this)
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
				issuesIbiza: response.data.issuesIbiza,
				issuesKathmandu: response.data.issuesKathmandu,
				issuesSingapore: response.data.issuesSingapore
			})
			console.log(response)
		})
	}

    render () {
        const position = [this.state.lat, this.state.lng];
        return (
			<div className="container is-fluid" style={{backgroundColor: 'white', margin: 0}}>
				<div className="tile is-ancestor" style={{paddingLeft: 10, paddingRight: 10, margin: 0}}>
					<div className="tile is-4">
							<div className="tile">
								<div className="tile is-parent is-vertical">
									<article className="tile is-child" style={{border: "1px solid", borderRadius: 5, padding: 15}}>
										<p style={{fontWeight: "bold", letterSpacing: 1}}>WELCOME JOHN DOE</p>
										<p className="subtitle">to your dashboard</p>
										<p>Here is a list of issues by branch: </p>
										<h3>Ibiza : {this.state.issuesIbiza}</h3>
										<h3>Kathmandu : {this.state.issuesKathmandu}</h3>
										<h3>Singapore : {this.state.issuesSingapore}</h3>
									</article>
								</div>
						</div>
					</div>
					<div className="tile is-8">
						<div className="tile">
							<div className="tile is-parent">
								<article className="tile is-child" style={{border: "1px solid", borderRadius: 5, padding: 15}}>
									<p style={{fontWeight: "bold", letterSpacing: 1}}>Employee Location, Main Branch</p>
									<p className="subtitle">Ibiza, Spain</p>
									<div className="leaflet-container">
										<Map center={[39.0200, 1.4821]} zoom={this.state.zoom}>
											<TileLayer
												attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
												url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
											/>
											<Marker position={[39.0200, 1.4821]}>
												<Popup>
												<span>A pretty CSS3 popup. <br/> Easily customizable.</span>
												</Popup>
											</Marker>
										</Map>
									</div>
								</article>
							</div>
						</div>
						<div className="tile">
							<div className="tile is-parent">
								<article className="tile is-child" style={{border: "1px solid", borderRadius: 5, padding: 15}}>
									<p style={{fontWeight: "bold", letterSpacing: 1}}>Employee Location, Branch</p>
									<p className="subtitle">Kathmandu, Nepal</p>
                                    <div className="leaflet-container">
										<Map center={[27.7172, 85.3240]} zoom={this.state.zoom}>
											<TileLayer
											attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
											url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
											/>
											<Marker position={[27.7172, 85.3240]}>
											<Popup>
												<span>A pretty CSS3 popup. <br/> Easily customizable.</span>
											</Popup>
											</Marker>
										</Map>
                                    </div>
								</article>
							</div>
						</div>
						<div className="tile">
							<div className="tile is-parent">
								<article className="tile is-child" style={{border: "1px solid", borderRadius: 5, padding: 15}}>
									<p style={{fontWeight: "bold", letterSpacing: 1}}>Employee Location, Branch</p>
									<p className="subtitle">Singapore, Singapore</p>
                                    <div className="leaflet-container">
										<Map center={[1.3521, 103.8198]} zoom={this.state.zoom}>
											<TileLayer
											attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
											url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
											/>
											<Marker position={[1.3521, 103.8198]}>
											<Popup>
												<span>A pretty CSS3 popup. <br/> Easily customizable.</span>
											</Popup>
											</Marker>
										</Map>
                                    </div>
								</article>
							</div>
						</div>
					</div>
				</div>
				
			</div>
        )
    }
}

export default EmployeeLocations
