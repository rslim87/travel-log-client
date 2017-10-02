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

class App extends Component {
	render () {
		return (
			<Home/>
		);
	}
}

export default App