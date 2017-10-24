import React from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink, Redirect } from 'react-router-dom';
// import { Route, IndexRoute } from 'react-router';
// import Home from './components/Home';
import SignupForm from './components/SignupForm';
import LoginForm from './components/LoginForm';
import TravelLog from './components/TravelLog';
import TravelLogs from './components/TravelLogs';
import UserProfile from './components/UserProfile';
import auth from './auth/authenticator';
import App from './containers/App';

export default  (
	<Switch>

				<Route exact path="/" component={App} >

					<Route exact path="/logs" component={TravelLogs}  >
						<Route path="/logs/:logId" component={TravelLog} />
					</Route>	
					<Route exact path="/signup" component={SignupForm} />
					<Route exact path="/login" component={LoginForm} />
					<Route path="/users/:userId" component={UserProfile} />
				</Route>
</Switch>

);


function requireAuth(nextState, replace) {
  console.log(auth.loggedIn());
  if (!auth.loggedIn()) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}

