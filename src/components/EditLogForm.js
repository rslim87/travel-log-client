import React from 'react';
import { connect } from 'react-redux';
import { updateLog } from '../actions/logs'
import LogForm from './LogForm' 




const EditLogForm = ({updateLog, log, history}) =>{
	return <LogForm formSubmit={updateLog} title="Edit" log={log} history={history}/>
} 

const mapStateToProps = (state, ownProps) => {
	return {
		log: state.logs.find(log => log.id === +ownProps.match.params.logId)
	}
}	

export default connect(null, { updateLog })(EditLogForm)