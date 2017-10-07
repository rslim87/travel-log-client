export default (state = [], action) => {
	switch(action.type) {
		case 'GET_LOG_SUCCESS':
			return action.logs;

		default: 
			return state;	
	}
}