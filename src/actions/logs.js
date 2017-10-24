import logApi from '../api/LogsApi';

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
// make async call to api, handle promise, dispatch action when promise is resolved
export const getLogs = () => {
	return dispatch => {
		return logApi.getLogs().then(logs => {
      dispatch(setLogs(logs));
    }).catch(error => {
      throw(error);
    });
	}
}

export const createLog = (log) => {
  return dispatch => {
    return logApi.createLog(log)
			.then(log => {dispatch(addLog(log))})
	};
};

export const updateLog = (log) => {
  return dispatch => {
		return logApi.createLog(log)
    	.then(log => {dispatch(editLog(log))})
  };
};


// export function deleteLog(log) {
//   return dispatch => {
//     return logApi.deleteLog(log).then(() => {
//       console.log(`Deleted ${log.id}`)
//       dispatch(deleteLog(log));
//       return;
//     }).catch(error => {
//       throw(error);
//     })
//   }
// }