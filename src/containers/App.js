import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink, Redirect } from 'react-router-dom';

import fetch from 'isomorphic-fetch'
import NavBar from '../components/NavBar'
import Home from '../components/Home';
import SignupForm from '../components/SignupForm';
import LoginForm from '../components/LoginForm';
import TravelLog from '../components/TravelLog';
import TravelLogs from '../components/TravelLogs';
import UserProfile from '../components/UserProfile';
import auth from '../auth/authenticator';


const App = () => {



		return (
			
	    <Router>
	    		<div>
	    			<NavBar />
	    				<Switch>
			          <Route exact path="/" component={Home} />
								<Route exact path="/logs" render={() => (
								  !auth.loggedIn() ? (
								    <Redirect to="/login"/>
								  ) : (
								    <TravelLogs/>
								  )
								)}/>
								<Route  path="/logs/:logId" component={TravelLog}/>
								<Route  path="/users/:userId" render={() => (
								  !auth.loggedIn() ? (
								    <Redirect to="/login"/>
								  ) : (
								    <UserProfile/>
								  )
								)}/>
			           <Route exact path="/login" component={LoginForm} />
			           <Route exact path='/signup' component={SignupForm} />
			           <Route exact path='/logout' />
		           </Switch>
	        </div>

	    </Router>
	);

	
	
}



export default App;