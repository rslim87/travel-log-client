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
import TravelLog from '../components/TravelLog'
import TravelLogs from '../components/TravelLogs'
import TravelLogForm from '../components/TravelLogForm'


class App extends Component {

	render () {

		return (
	    <Router>
	        <div>
	           <Route exact path="/" component={Home} />
	           <Route exact path="/logs" component={TravelLogs} />
	           <Route exact path="/logs/:id" component={TravelLog} />
	          


	        </div>
	    </Router>
	);
	}
}

export default App