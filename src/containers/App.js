import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink, Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import fetch from 'isomorphic-fetch'


import Home from '../components/Home'
import SignupForm from '../components/SignupForm'
import LoginForm from '../components/LoginForm'
import TravelLog from '../components/TravelLog'
import TravelLogs from '../components/TravelLogs'
import NavBar from '../components/NavBar'


class App extends Component {

	render () {

		return (
			
	    <Router>
	    		<div>
	    			<NavBar />
		        <Switch>
		           <Route exact path="/" component={Home} />
		           <Route exact path="/logs" component={TravelLogs} />
		           <Route path="/logs/:logId" component={TravelLog} />

		        </Switch>
	        </div>

	    </Router>
	);
	}
}


export default App;