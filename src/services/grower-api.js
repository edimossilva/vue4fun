import api from './api';

const GROWERS_RESOURCE = 'grower';

export default {
  getGrowers() {
    return api.simpleGet(GROWERS_RESOURCE).then(result => result);
  }
}