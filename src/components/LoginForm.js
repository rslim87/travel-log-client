import React, { Component } from 'react';
import { Form, Button, Grid } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { loginUser } from '../actions/sessionActions'
import history from '../history' 

class LoginForm extends Component {
	constructor(){
		super();

		this.state = {
			username: '',
			password: '',
		}


	}

handleChange = event => {
  const { name, value } = event.target;
  this.setState({
    [name]: value
  })
}

handleSubmit = event => {
	event.preventDefault();
	console.log(this.state)
	this.props.loginUser(this.state)
	history.push('/')
}

	render () {
		return (
			<Grid centered columns={4} textAlign='center' padded='vertically'>
				<Grid.Column>
				<h3>Login</h3>
					<Form>
					  <Form.Field>
					    <label>Username</label>
							<input
								type="text"
								name="username"
								value={this.state.username}
								onChange={this.handleChange}
							/>
					  </Form.Field>
					  <Form.Field>
					    <label>Password</label>
								<input
									type="password"
									name="password"
									value={this.state.password}
									onChange={this.handleChange}
								/>
					  </Form.Field>
					  <Button 
					  	type='submit'
					  	onClick={this.handleSubmit}>
					  	Submit
					  </Button>
					</Form>				
				</Grid.Column>
			</Grid>
		);
	}
}

export default connect(null, { loginUser })(LoginForm)