import React from 'react';
import { connect } from 'react-redux';
import { createLog } from '../actions/logs'
import LogForm from './LogForm' 


const CreateLogForm = ({createLog}) =>{
	return <LogForm formSubmit={createLog} title="Create" />
} 

export default connect(null, { createLog })(CreateLogForm)