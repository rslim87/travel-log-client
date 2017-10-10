import React, { Component } from 'react';
import { Form, Button, Grid, Radio } from 'semantic-ui-react'

class MakeLog extends Component {
	constructor(){
		super()

		this.state = {
			city: '',
			country: '',
			soloTravel: '',
			month: '',
			year: ''
		}


	}

 handleRadio = (event, { value }) => {
 	const soloTravel = value === "true" ? true: false
 	this.setState({ 
 		value,
 		soloTravel
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
	console.log("save!")
	console.log(this.state.city)
	console.log(this.state.country)
	console.log(this.state.month)
	console.log(this.state.year)
	console.log(this.state.soloTravel)

}
	render(){
		return (
		  <Grid centered columns={4} textAlign='center' padded='vertically'>
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
										type="text"
										name="year"
										value={this.state.year}
										onChange={this.handleChange}
									/>
						  </Form.Field>		
						  <label>Solo Travel?</label>
				        <Form.Field>
				          <Radio
				            label='true'
				            name='soloTravel'
				            value='true'
				            checked={this.state.value === 'true'}
				            onChange={this.handleRadio}
				          />
				        </Form.Field>
				        <Form.Field>
				          <Radio
				            label='false'
				            name='soloTravel'
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

export default MakeLog