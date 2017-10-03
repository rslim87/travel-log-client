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

		handleChange = event => {

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
					            value={true}
					            checked={this.state.soloTravel === true}
					            onChange={this.handleOptionChange}
					          />
					        </Form.Field>
					        <Form.Field>
					          <Radio
					            label='false'
					            value={false}
					            checked={this.state.soloTravel === false}
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

export default MakeLog