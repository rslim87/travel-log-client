import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

class NavBar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
  }

  render() {
    const { activeItem } = this.state

    return (
      <Menu inverted>
        <Menu.Item as={NavLink} to='/' name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
        <Menu.Item as={NavLink} to='/logs' name='logs' active={activeItem === 'logs'} onClick={this.handleItemClick} />
        <Menu.Item as={NavLink} to='/users/:id' name='profile' active={activeItem === 'profile'} onClick={this.handleItemClick} />
      </Menu>
    )
  }
}

export default NavBar
