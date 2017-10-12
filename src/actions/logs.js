

// ** Action Creators **
const setLogs = logs => {
	return {
		type: 'GET_LOGS',
		logs
	}
}


// ** Asynch Action **		
export const getLogs = () => {
	return dispatch => {
		return fetch('http://localhost:3001/api/logs')
			.then(response => response.json())
			.then(logs => dispatch(setLogs(logs)))
	}
}

