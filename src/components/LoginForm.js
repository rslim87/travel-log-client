import React, { Component } from 'react';
import { Form, Button, Grid } from 'semantic-ui-react'

class LoginForm extends Component {
	constructor(){
		super();

		this.state = {
			username: '',
			password: '',
		}
	}

	handleChange = event => {
		this.setState({
			username: event.target.username,
			password: event.target.password,		
		})
	}

	handleSubmit = event => {
		event.preventDefault();
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
					  <Button type='submit'>Submit</Button>
					</Form>				
				</Grid.Column>
			</Grid>
		);
	}
}

export default LoginForm