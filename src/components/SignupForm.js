import React, { Component } from 'react';
import { Form, Button, Grid, Radio } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { signup } from '../actions/users'
import { createHashHistory } from 'history';

class SignupForm extends Component {
	constructor(){
		super();

		this.state = {
				username: '',
				password: '',
				email: '',
				valid_passport: true,
		}

	const history = createHashHistory()
		
	}


handleRadio = (event, { value }) => {
 	const valid_passport = value === "true" ? true: false
 	this.setState({ 
 		value,
 		valid_passport
 	})
 }

	handleChange = event => {
		this.setState({
			[event.target.name]: event.target.value,
		})
	}

	handleSubmit = event => {
		event.preventDefault();
		this.props.signup(this.state)
		this.props.history.push('/')
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
			            name='valid_passport'
			            value='true'
			            checked={this.state.value === 'true'}
			            onChange={this.handleRadio}
			          />
			        </Form.Field>
			        <Form.Field>
			          <Radio
			            label='false'
			            name='valid_passport'
			            value='false'
			            checked={this.state.value === 'false'}
			            onChange={this.handleRadio}
			          />
			        </Form.Field>			  
					  <Button type='submit'>Submit</Button>
					</Form>				
				</Grid.Column>
			</Grid>

		);
	}
}
export default connect(null, { signup })(SignupForm)