import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';
import {getUsers} from '../actions/users';


class UserProfile extends Component {

	componentDidMount() {
		this.props.getUsers()
	}

	render() {
		console.log(this.props.user)

		return (
			<Grid centered columns={4} textAlign='center' padded='vertically'>
				{this.props.user &&
					<Grid.Column>
						<p>Username: {this.props.user.username}</p>
						<p>email: {this.props.user.email}</p>
						<p>Valid passport: {String(this.props.user.valid_passport)} </p>
					</Grid.Column>
					}
			</Grid>			
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		user: state.users.find(user => user.id === +ownProps.match.params.userId)
	}
}

export default connect(mapStateToProps, {getUsers})(UserProfile);