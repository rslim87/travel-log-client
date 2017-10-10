import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { getLogs } from '../actions/logs'


class TravelLogs extends Component {

	componentDidMount() {
		this.props.getLogs()
	}

	render() {
		return(
			<Grid centered columns={4} textAlign='center' padded='vertically'>
				<Grid.Column>
									<h2>Your Travel Logs</h2>
					{this.props.logs.map(log => 
						<p>{log.city}</p>
					)}
				</Grid.Column>				
			</Grid>	
		)		
	}
}

const mapStateToProps = (state) => {
	return ({
		logs: state.logs
	})
}

export default connect(mapStateToProps, { getLogs })(TravelLogs);