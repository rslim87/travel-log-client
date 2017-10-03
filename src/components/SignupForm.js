import React, { Component } from 'react';
import { Form, Button, Grid, Radio } from 'semantic-ui-react'

class SignupForm extends Component {
	constructor(){
		super();

		this.state = {
			username: '',
			password: '',
			email: '',
			validPassport: true,
		}

	}

	handleChange = event => {
		this.setState({
			[event.target.name]: event.target.value,
		})
	}

	handleSubmit = event => {
		event.preventDefault();
	}

	render() {
		return(
			<Grid centered columns={4} textAlign='center' padded='vertically'>
				<Grid.Column>
				<h3>Signup</h3>
					<Form onSubmit={this.handleSubmit}>
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
					    <label>Email</label>
								<input
									type="email"
									name="email"
									value={this.state.email}
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
					  <label>Do you have a valid passport?</label>
		        <Form.Field>
		          <Radio
		            label='true'
		            value={true}
		            checked={this.state.validPassport === true}
		            onChange={this.handleOptionChange}
		          />
		        </Form.Field>
		        <Form.Field>
		          <Radio
		            label='false'
		            value={false}
		            checked={this.state.validPassport === false}
		            onChange={this.handleOptionChange}
		          />
		        </Form.Field>					  
					  <Button type='submit'>Submit</Button>
					</Form>				
				</Grid.Column>
			</Grid>

		);
	}
}

export default SignupForm