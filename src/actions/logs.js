

// ** Action Creators **
export const setLogs = logs => {
	return {
		type: 'GET_LOGS',
		logs
	}
}

export const addLog = log => {
	return {
		type: 'CREATE_LOG',
		log
	}
}

export const editLog = log => {
	return {
		type: 'EDIT_LOG',
		log
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

// export const getLog = (logId) => {
//     return dispatch => {
//         return fetch(`http://localhost:3001/api/logs/${logId}`)
//             .then(response => response.json())
//             .then(log => dispatch(setLogs([log])))
//     };
// };

export const createLog = (log) => {
  return dispatch => {
    return fetch('http://localhost:3001/api/logs', {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            log
        })
    })
        .then(response => response.json())
				.then(log => {dispatch(addLog(log))})
	};
};

export const updateCampaign = (log) => {
  return dispatch => {
    return fetch('http://localhost:3001/api/logs', {
        method: 'PUT',
        headers: { 
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
            log
        })
    })
    .then(response => response.json())
    .then(campaign => {
        dispatch(editLog(log))})
  };
};
