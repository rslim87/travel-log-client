import React, { Component } from 'react';
import { BrowserRouter as Route, Switch, NavLink, Redirect } from 'react-router-dom';
import { Router } from 'react-router-dom'
import fetch from 'isomorphic-fetch'
import NavBar from '../components/NavBar'
import Home from '../components/Home';
import SignupForm from '../components/SignupForm';
import LoginForm from '../components/LoginForm';
import TravelLog from '../components/TravelLog';
import TravelLogs from '../components/TravelLogs';
import UserProfile from '../components/UserProfile';
import auth from '../auth/authenticator';
// import history from '../history'


class App extends Component {



	render () {
		return (
			
	    <Router>
	    		<div>
	    			<NavBar />

		           <Route exact path="/" component={Home} />
		           <Route exact path="/logs" component={TravelLogs} onEnter={requireAuth} />
		           <Route path="/logs/:logId" component={TravelLog} />
		           <Route path="/users/:userId" component={UserProfile} />
		           <Route exact path="/login" component={LoginForm} />
		           <Route exact path='/signup' component={SignupForm} />

	        </div>

	    </Router>
	);

	
	}
}

function requireAuth(nextState, replace) {
  console.log(auth.loggedIn());
  if (!auth.loggedIn()) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}

export default App;