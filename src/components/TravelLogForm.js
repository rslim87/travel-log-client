import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Form, Button, Grid, Radio } from 'semantic-ui-react'
import { createLog } from '../actions/logs'


class TravelLogForm extends Component {
	constructor(){
		super()

		this.state = {
			city: '',
			country: '',
			solo_travel: '',
			month: '',
			year: '',
			user_id: '',
		}


	}

 handleRadio = (event, { value }) => {
 	const solo_travel = value === "true" ? true: false
 	this.setState({ 
 		value,
 		solo_travel
 	})
 }

handleChange = event => {
  const { name, value } = event.target;
  this.setState({
    [name]: value
  })
}

handleSubmit = (event) => {
	event.preventDefault();
	this.props.createLog(this.state);
}
	render(){
		return (
		  <Grid centered columns={1} textAlign='center' padded='vertically'>
		    <Grid.Column>
					<h3>Make a Log</h3>
						<Form>
						  <Form.Field>
						    <label>City</label>
								<input
									type="text"
									name="city"
									value={this.state.city}
									onChange={this.handleChange}
								/>
						  </Form.Field>
						  <Form.Field>
						    <label>Country</label>
									<input
										type="text"
										name="country"
										value={this.state.country}
										onChange={this.handleChange}
									/>
						  </Form.Field>
						  <Form.Field>
						    <label>Month</label>
									<input
										type="text"
										name="month"
										value={this.state.month}
										onChange={this.handleChange}
									/>
						  </Form.Field>			
						  <Form.Field>
						    <label>Year</label>
									<input
										type="number"
										name="year"
										value={this.state.year}
										onChange={this.handleChange}
									/>
						  </Form.Field>		
						  <Form.Field>
						    <label>User Id</label>
									<input
										type="number"
										name="user_id"
										value={this.state.user_id}
										onChange={this.handleChange}
									/>
						  </Form.Field>								  
						  <label>Solo Travel?</label>
				        <Form.Field>
				          <Radio
				            label='true'
				            name='solo_travel'
				            value='true'
				            checked={this.state.value === 'true'}
				            onChange={this.handleRadio}
				          />
				        </Form.Field>
				        <Form.Field>
				          <Radio
				            label='false'
				            name='solo_travel'
				            value='false'
				            checked={this.state.value === 'false'}
				            onChange={this.handleRadio}
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

// function mapDispatchToProps(dispatch) {
// 	return {
// 		addLog: log => dispatch(logs.addLog(log))
// 	}
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//   	actions: bindActionCreators(actions, dispatch)
//   }
// }

export default connect(null, { createLog })(TravelLogForm)