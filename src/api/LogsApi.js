class LogsApi {

  static requestHeaders() {
    return {'AUTHORIZATION': `Bearer ${sessionStorage.jwt}`}
  }

  static getLogs() {
    const headers = this.requestHeaders();
    const request = new Request('http://localhost:3001/api/logs', {
      method: 'GET',
      headers: headers
    });

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static updateLog(log) {
    const headers = Object.assign({'Content-Type': 'application/json'}, this.requestHeaders());
    const request = new Request(`http://localhost:3001/api/logs/${log.id}`, {
      method: 'PUT',
      headers: headers, 
      body: JSON.stringify(log)
    });


    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static createLog(log) {
    const headers = Object.assign({'Content-Type': 'application/json'}, this.requestHeaders());
    const request = new Request('http://localhost:3001/api/logs', {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(log)
    });


    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static deleteLog(log) {
    const headers = Object.assign({'Content-Type': 'application/json'}, this.requestHeaders());
    const request = new Request(`http://localhost:3001/api/logs/${log.id}`, {
      method: 'DELETE', 
      headers: headers
    });

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
}

export default LogsApi;
