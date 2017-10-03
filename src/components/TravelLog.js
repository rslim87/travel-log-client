import React, { Component } from 'react';
import { Button, Grid, Divider } from 'semantic-ui-react'


class TravelLog extends Component {
	render() {
		return (
			<Grid centered columns={4} textAlign='center' padded='vertically'>
				<Grid.Column>
					<h2>City, Country</h2>
					<p></p>
					<p>Valid email: true </p>
					<p>Month: </p>
					<p>Year: </p>
					<Button size="mini">Edit</Button>
					<Divider />
					<p> Video </p>
					
				</Grid.Column>				
			</Grid>			
		);
	}
}

export default TravelLog;