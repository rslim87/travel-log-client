import SessionApi from '../api/SessionApi';
import auth from '../auth/authenticator';

export const loginSuccess = () => {  
  return {
  	type: 'LOGIN_SUCCESS'
  }
}

export const logoutUser =() => {
  auth.logOut();
  return {
  	type: 'LOGOUT_SUCCESS'
  }
}

export function loginUser(user) {  
  return function(dispatch) {
    return SessionApi.login(user)
    	.then(response => {
      sessionStorage.setItem('jwt', response.jwt);
      dispatch(loginSuccess());
    }).catch(error => {
      throw(error);
    });
  };
}

