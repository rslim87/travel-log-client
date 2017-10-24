export const signupUser = user => {
	return {
		type: 'SIGNUP_USER',
		user
	}
}

export const setUsers = users => {
	return {
		type: 'GET_USERS',
		users
	}
} 

export const signup = (user) => {
  return dispatch => {
    return fetch('http://localhost:3001/api/signup', {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user
        })
    })
        .then(response => response.json())
				.then(user => {dispatch(signupUser(user))})
	};
};

export const getUsers = () => {
	return dispatch => {
		return fetch('http://localhost:3001/api/users')
		.then(response => response.json())
		.then(users => dispatch(setUsers(users)))
	}
}

