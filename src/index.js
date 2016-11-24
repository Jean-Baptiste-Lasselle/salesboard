import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import * as V from 'victory'
import Horizon from '@horizon/client'


const horizon = Horizon({host: 'localhost:8181'})
// const Horizon = window.Horizon
// const horizonInstance = Horizon()

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
