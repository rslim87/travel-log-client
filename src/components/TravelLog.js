import React, { Component } from 'react';
import { Button, Grid, Divider } from 'semantic-ui-react'
import { connect } from 'react-redux';


class TravelLog extends Component {
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



	render() {
		return (
			<Grid centered columns={4} textAlign='center' padded='vertically'>
				<Grid.Column key={this.props.log.id}>
					<h2>{this.props.log.city},  {this.props.log.country} </h2>
					<p></p>
					<p>Solo travel: {String(this.props.log.solo_travel)} </p>
					<p>Month: {this.props.log.month} </p> 
					<p>Year: {this.props.log.year} </p>
					<Button size="mini" onClick={this.handleClick}>Edit</Button>		
		
				</Grid.Column>				
			</Grid>			
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		log: state.logs.find(log => log.id === +ownProps.match.params.logId)
	}

}	

export default connect(mapStateToProps)(TravelLog);