import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import * as V from 'victory'
import { Router, Route, IndexRoute, IndexLink, Link, browserHistory } from 'react-router'
import Main from './main/Main'
import EmployeeLocations from './main/EmployeeLocations'
import AllIssues from './main/AllIssues'

// <Router>
//   <Route path="/" component={Main}>
//     <IndexRoute component={App}/>
//   </Route>
// </Router>
// const { Router, Route, IndexRoute, IndexLink, Link } = ReactRouter

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <IndexRoute path="main" component={App}/>
      <Route path="locations" component={EmployeeLocations}/>
      <Route path="issues" component={AllIssues}/>
    </Route>
  </Router>,
  document.getElementById('root')
)
