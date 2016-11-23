import React, {Component} from 'react'
import { VictoryChart, VictoryAxis, VictoryBar, VictoryTooltip, VictoryArea, VictoryLine, VictoryTheme } from 'victory'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'


class EmployeeLocations extends Component {

    constructor() {
        super();
        this.state = {
        lat: 51.505,
        lng: -0.09,
        zoom: 13,
        };
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
										<p style={{fontWeight: "bold", letterSpacing: 1}}>WELCOME WINFRED</p>
										<p className="subtitle">you sexy beast</p>
									</article>
								</div>
						</div>
					</div>
					<div className="tile is-8">
						<div className="tile">
							<div className="tile is-parent">
								<article className="tile is-child" style={{border: "1px solid", borderRadius: 5, padding: 15}}>
									<p style={{fontWeight: "bold", letterSpacing: 1}}>Employee Location, Main Branch</p>
									<p className="subtitle">Rio de Janeiro, Brazil</p>
                                    <div className="leaflet-container">
      <Map center={[51.505, -0.09]} zoom={this.state.zoom}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
        <Marker position={position}>
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
      <Map center={[51.505, -0.09]} zoom={this.state.zoom}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
        <Marker position={position}>
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
      <Map center={[51.505, -0.09]} zoom={this.state.zoom}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
        <Marker position={position}>
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
