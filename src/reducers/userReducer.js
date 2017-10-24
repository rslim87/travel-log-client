export default function users(state = [], action) {
	switch(action.type) {
		case 'SIGNUP_USER':
			return [
			...state,
			Object.assign({}, action.user)
			]

			case 'GET_USERS':
			return action.users

		default: 
			return state;	
	}
}