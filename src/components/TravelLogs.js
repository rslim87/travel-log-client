import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { getLogs } from '../actions/logs'
import { Link } from 'react-router-dom';
 


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
						<p><Link key={log.id} to={`/logs/${log.id}`}>{log.city}</Link></p>
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