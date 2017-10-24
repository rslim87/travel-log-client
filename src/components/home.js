import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { bindActionCreators } from "redux"
import * as sessionActions from '../actions/sessionActions';

class Home extends Component { 
	render() {
  	return (
	  	<Grid centered columns={4} textAlign='center' padded='vertically'>
	    <Grid.Column>
				<h1>Travel Log</h1>
				<p>Wish list of places you want to travel</p>
				{!this.props.logged_in &&
	    		<p>Please <a href='/signup'>sign up</a> or <a href='/login'>log in</a> to use</p>
	    	}


	    </Grid.Column>
		  </Grid>
	  )
	}
}

function mapStateToProps(state, ownProps) {
	console.log(state)
  return {logged_in: state.session};
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(sessionActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);



