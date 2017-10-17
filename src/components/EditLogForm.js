import React from 'react';
import { connect } from 'react-redux';
import { updateLog } from '../actions/logs'
import LogForm from './LogForm' 




const EditLogForm = ({updateLog, log, history}) =>{
	return <LogForm formSubmit={updateLog} title="Edit" log={log} history={history}/>
} 
	
export default connect(null, { updateLog })(EditLogForm)