import React, {Component} from 'react'
import Griddle from 'griddle-react'
import Dropzone from 'react-dropzone'
import Papa from 'papaparse'

const fakeData = [
    {
        "id": 0,
        "name": "Mayer Leonard",
        "city": "Kapowsin",
    }
]

class AllIssues extends Component {

    onDrop = (acceptedFiles, rejectedFiles) => {
        const parsed = Papa.parse(acceptedFiles[0], {
            complete: (results) => {
                console.log(results.data)
            }
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
									<p style={{fontWeight: "bold", letterSpacing: 1}}>Upload latest issues</p>
									<p className="subtitle">Rio de Janeiro, Brazil</p>
                                    <Dropzone onDrop={this.onDrop} style={{width: "100%", height: 200, borderWidth: 2, borderColor: "rgb(102, 102, 102)", borderStyle: "dashed", borderRadius: 5}}>
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
                                    <p className="subtitle">you sexy beast</p>
                                    <Griddle results={fakeData} showFilter={true} />
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