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
			return [
			...state.filter(log => log.id === !action.log.id),
			Object.assign({}, action.log)
			]

		case 'DELETE_LOG':		

		default: 
			return state;	
	}
}