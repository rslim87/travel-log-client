import React, { Component } from 'react';
import { Grid, Button } from 'semantic-ui-react'
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';
import CreateLogForm  from './CreateLogForm'
import { getLogs } from '../actions/logs'
import Logs from './Logs'

class TravelLogs extends Component {
	constructor(props) {
    super(props);

    this.state = {
    	showForm: false
    }

  }

	handleClick = (event) => {
		event.preventDefault();
		this.setState({showForm: !this.state.showForm})
	}

	componentWillMount() {
		this.props.getLogs()
	}


	render() {

		return(
			<Grid centered columns={4} textAlign='center' padded='vertically'>
				<Grid.Column>
					<h2>Your Travel Logs</h2>			
					{this.props.logs.map(log => 
						<Logs log={log} />
					)}
					<Button size="mini" onClick={this.handleClick}>Show Add Log Form</Button>
					{this.state.showForm && < CreateLogForm / >}		
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