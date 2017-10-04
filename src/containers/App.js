import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import fetch from 'isomorphic-fetch'
import Home from '../components/Home'
import SignupForm from '../components/SignupForm'
import LoginForm from '../components/LoginForm'
import MakeLog from '../components/MakeLog'
import TravelLog from '../components/TravelLog'
import TravelLogs from '../components/TravelLogs'

class App extends Component {
	constructor(props) {
		super(props)

		this.state = {
			logs: []
		}
	}

	componentDidMount() {
		fetch('http://localhost:3001/api/logs')
		.then(response => response.json())
		.then(logs => this.setState({logs}))
	}

	render () {
		
		return (
			<TravelLogs logs={this.state.logs}/>
		);
	}
}

export default App