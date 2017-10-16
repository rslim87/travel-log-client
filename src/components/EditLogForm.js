import React from 'react';
import { connect } from 'react-redux';
import { editLog } from '../actions/logs'
import LogForm from './LogForm' 


const EditLogForm = ({editLog, log, history}) =>{
	return <LogForm formSubmit={editLog} title="Edit" log={log} history={history}/>
} 

const mapStateToProps = (state, ownProps) => {
	return {
		log: state.logs.find(log => log.id === +ownProps.match.params.logId)
	}
}	

export default connect(null, { editLog })(EditLogForm)