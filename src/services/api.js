import axios from 'axios';
const HOST = 'https://my-json-server.typicode.com/pedroskakum/fake-api'

class Api {
  simpleDelete(resource, params) {
    let url = `${HOST}/${resource}/${params.id}`
    return axios.delete(url).then(result => result);
  }
  simpleGet(resource, params) {
    let url = `${HOST}/${resource}`
    return axios.get(url, params).then(result => result);
  }
  nestedGet(mainResource, secondaryResource, id) {
    let url = `${HOST}/${mainResource}/${id}/${secondaryResource}`
    return axios.get(url).then(result => result);
  }
  simplePost(resource, params) {
    let url = `${HOST}/${resource}`
    return axios.post(url, params).then(result => result);
  }
  simplePut(resource, params) {
    let url = `${HOST}/${resource}/${params.id}`
    return axios.put(url, params).then(result => result);
  }
}

export default new Api();
