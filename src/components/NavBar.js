import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { BrowserRouter as Router, Route, Switch, NavLink, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux"
import * as sessionActions from '../actions/sessionActions';
import auth from '../auth/authenticator';

class NavBar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
  }

  handleLogout = (event) => {
    event.preventDefault();
    this.props.actions.logoutUser()
    this.forceUpdate();
  } 



  render() {
    const { activeItem } = this.state
    const signing = auth.loggedIn() 
    

    return (
      <Menu inverted>
        <Menu.Item as={NavLink} to='/' name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
        <Menu.Item as={NavLink} to='/logs' name='logs' active={activeItem === 'logs'} onClick={this.handleItemClick} /> 
        {signing ? (
        <Menu.Item as={NavLink} to='/logout' name='logout' active={activeItem === 'logout'} onClick={this.handleLogout} />
        ) : (
        <Menu.Item as={NavLink} to='/login' name='login' active={activeItem === 'login'} onClick={this.handleLogout} />
        )}
      </Menu>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(sessionActions, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(NavBar)


