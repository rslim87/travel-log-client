import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react'


const TravelLogs = (props) => (

	<Grid centered columns={4} textAlign='center' padded='vertically'>
		<Grid.Column>
			<h2>Your Travel Logs</h2>
			{props.logs.map(log => 
				<p>{log.city}</p>
			)}
		</Grid.Column>				
	</Grid>			
)

export default TravelLogs;