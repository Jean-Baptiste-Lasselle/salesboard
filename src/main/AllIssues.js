import React, {Component} from 'react'
import Griddle from 'griddle-react'
import Dropzone from 'react-dropzone'
import axios from 'axios'
import Papa from 'papaparse'

var fakeData =  [
    {
        "id": 0,
        "name": "Mayer Leonard",
        "city": "Kapowsin",
        "state": "Hawaii",
        "country": "United Kingdom",
        "company": "Ovolo",
        "favoriteNumber": 7
    }
]

class AllIssues extends Component {

    constructor (props) {
        super(props)
        this.setState = this.setState.bind(this)
        this.state = {
            submission: 0,
            data: fakeData,
            openIssues: "--"
        }
        this.poll = this.poll.bind(this)
    }

	componentWillMount() {
		const intervalPoll = setInterval(this.poll, 3000)
	}
	
	componentWillUnmount () {
	}
	
	poll () {
		// blob address : 'https://jsonblob.com/74a7f0ea-b25b-11e6-871b-2761cb55326e'
		axios.get('https://jsonblob.com/api/jsonBlob/74a7f0ea-b25b-11e6-871b-2761cb55326e')
		.then((response) => {
			this.setState({
				openIssues: response.data.openIssues,
			})
		})
	}    
   
    onDrop (acceptedFiles, rejectedFiles) {
        console.log(acceptedFiles)
        const parsed = Papa.parse(acceptedFiles[0], {
            complete: (result) => { 
                this.setState({data:result.data}) 
            },
            error: (error) => {console.log(error)},
            header: true, 
            quotes: true,
        })
    }
    
    render() {
        return (
            <div className="container is-fluid" style={{backgroundColor: 'white', margin: 0}}>
				<div className="tile is-ancestor" style={{paddingLeft: 10, paddingRight: 10, margin: 0}}>
					<div className="tile is-4">
                        <div className="tile">
                            <div className="tile is-parent is-vertical">
                                <article className="tile is-child" style={{border: "1px solid", borderRadius: 5, padding: 15}}>
                                    <p style={{fontWeight: "bold", letterSpacing: 1}}>WELCOME JOHN DOE</p>
                                    <p className="subtitle">to your dashboard</p>
                                    <h3>Number of open issues: {this.state.openIssues}</h3>
                                </article>
                            </div>
						</div>
					</div>
					<div className="tile is-8">
						<div className="tile">
							<div className="tile is-parent">
								<article className="tile is-child" style={{border: "1px solid", borderRadius: 5, padding: 15}}>
									<p style={{fontWeight: "bold", letterSpacing: 1}}>Upload latest issues</p>
                                    <Dropzone onDrop={this.onDrop.bind(this)} style={{width: "100%", height: 200, borderWidth: 2, borderColor: "rgb(102, 102, 102)", borderStyle: "dashed", borderRadius: 5}}>
                                        <div style={{margin: "0 auto", width: "60%", paddingTop: 50}}>Update the list of issues by dropping a <strong>csv</strong>, or click to select file(s) to upload.</div>
                                    </Dropzone>
								</article>
							</div>
						</div>
					</div>
				</div>
				<div className="tile is-ancestor" style={{paddingLeft: 10, paddingRight: 10, margin: 0}}>
					<div className="tile is-12">
                        <div className="tile">
                            <div className="tile is-parent is-vertical">
                                <article className="tile is-child" style={{border: "1px solid", borderRadius: 5, padding: 15}}>
                                    <p style={{fontWeight: "bold", letterSpacing: 1}}>CURRENTLY OPEN ISSUES</p>
                                    <Griddle results={this.state.data} />
                                </article>
                            </div>
						</div>
					</div>
				</div>
			</div>
        );
    }
}

export default AllIssues
