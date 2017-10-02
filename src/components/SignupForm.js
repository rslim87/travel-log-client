import React, { Component } from 'react';

class SignupForm extends Component {
	constructor(){
		super();

		this.state = {
			username: '',
			password: '',
			validPassport: ''
		}
	}

	handleChange = event => {
		this.setState({
			username: event.target.value,
			password: event.target.value,
			validPassport: event.target.value
		})
	}

	handleSubmit = event => {
		event.preventDefault();
	}

	render() {
		return(
			<div>
				<h3>Signup Form</h3>
				<form onSubmit={this.handleSubmit}>
					<div>
						<label>
							Username:
							<input 
								type="text" 
								value={this.state.username}
								onChange={this.handleChange}/>
							</label>	
					</div>

					<div>
						<label>
							Password:
							<input 
								type="password" 
								name="password" 
								value={this.state.password}
								onChange={this.handleChange}/>
							</label>	
					</div>
					
					<div>
						<label>
							Do you have a valid passport?
							<label>
								Yes
								<input type="radio" />
							</label>
							<label>	
								No
								<input type="radio" />
							</label>
						</label>	
					</div>
				
				</form>
			</div>

		);
	}
}

export default SignupForm