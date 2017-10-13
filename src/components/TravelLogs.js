import React, { Component } from 'react';
import { Grid, Button } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { getLogs } from '../actions/logs'
import { Link } from 'react-router-dom';
import TravelLogForm  from './TravelLogForm'
 


class TravelLogs extends Component {
	constructor(props) {
    super(props);

    this.state = {
    	showForm: false
    }

  }

	componentDidMount() {
		this.props.getLogs()
	}

	handleClick = (event) => {
		event.preventDefault();
		this.setState({showForm: !this.state.showForm})
	}


	render() {
		return(
			<Grid centered columns={4} textAlign='center' padded='vertically'>
				<Grid.Column>
					<h2>Your Travel Logs</h2>			
					{this.props.logs.map(log => 
						<p key={log.id}><Link to={`/logs/${log.id}`}>{log.city}</Link></p>
					)}
					<Button size="mini" onClick={this.handleClick}>Show Add Log Form</Button>
					{this.state.showForm && < TravelLogForm / >}		
					
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