import axios from 'axios';
const HOST = 'https://my-json-server.typicode.com/pedroskakum/fake-api'

class Api {
  simpleGet(resource, params) {
    let url = `${HOST}/${resource}`
    return axios.get(url, params).then(result => result);
  }
}

export default new Api();
