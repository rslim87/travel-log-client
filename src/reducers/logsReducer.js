export default function logs(state = [], action) {
	switch(action.type) {
		case 'GET_LOGS':
			return action.logs;

		case 'CREATE_LOG':
			return [
			...state,
			Object.assign({}, action.log)
			]

		case 'EDIT_LOG':

		case 'DELETE_LOG':		

		default: 
			return state;	
	}
}