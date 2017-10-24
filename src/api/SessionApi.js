
import fetch from 'isomorphic-fetch';

class sessionApi {  
  static login(user) {
    const request = new Request('http://localhost:3001/api/login', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }), 
      body: JSON.stringify({auth: user})
    });


    return fetch(request)
    .then(response => response.json())
    .catch(error => {
      return error;
    });
  } 
}

export default sessionApi; 