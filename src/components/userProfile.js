import React, { Component } from 'react';
import { Button, Grid } from 'semantic-ui-react'


class UserProfile extends Component {
	render() {
		return (
			<Grid centered columns={4} textAlign='center' padded='vertically'>
				<Grid.Column>
					<p>Username:</p>
					<p>email:</p>
					<p>Valid email: true </p>

					<Button size="mini">Edit</Button>
				</Grid.Column>
			</Grid>			
		);
	}
}

export default UserProfile;