import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Form, Button, Grid, Radio } from 'semantic-ui-react'
import { createLog } from '../actions/logs'
import LogForm from './LogForm' 


const CravelLogForm = ({createLog}) =>{
	return <LogForm formSubmit={createLog} title="Create" />
} 

export default connect(null, { createLog })(CravelLogForm)