import React, { Component } from 'react';

class LoginForm extends Component {
	constructor(){
		super();

		this.state = {
			username: '',
			password: ''
		}
	}

	handleChange = event => {
		this.setState({
			username: event.target.value,
			password: event.target.value		
		})
	}

	handleSubmit = event => {
		event.preventDefault();
	}

	render () {
		return (
			<div>
				<h3>Login</h3>
				<form onSubmit={this.handleSubmit}>
					<div>
						<label>
							Username:
							<input
								type="text"
								value={this.state.username}
							/>
						</label>
						<label>
							Password:
							<input
								type="text"
								value={this.state.password}
							/>
						</label>						
					</div>	
				</form>
			</div>
		);
	}
}

export default LoginForm