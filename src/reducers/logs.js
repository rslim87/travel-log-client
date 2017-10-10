export default (state = [], action) => {
	switch(action.type) {
		case 'GET_LOGS':
			return action.logs;

		case 'ADD_LOG':

		case 'EDIT_LOG':

		case 'DELETE_LOG':		

		default: 
			return state;	
	}
}