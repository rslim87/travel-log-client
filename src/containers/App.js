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

	render () {

		return (
	    <Router>
	        <div>
	           <Route exact path="/" component={Home} />
	           <Route path="/logs" component={TravelLogs} />
	        </div>
	    </Router>
	);
	}
}

export default App