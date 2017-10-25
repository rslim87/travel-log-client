
function sessionReducer(state = {session: !!sessionStorage.jwt}, action) {
  switch(action.type){
    case 'LOGIN_SUCCESS':
    	// history.push('/')
      return {session: !!sessionStorage.jwt}
    case 'LOGOUT_SUCCESS':

      return {session: !!sessionStorage.jwt}
    default: 
     	return state
  }
}

export default sessionReducer;


