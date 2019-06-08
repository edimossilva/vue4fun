import api from './api';

const GROWERS_RESOURCE = 'grower';

export default {
  createGrower(grower) {
    return api.simplePost(GROWERS_RESOURCE, grower).then(result => result.data);
  },
  deleteGrower(grower) {
    return api.simpleDelete(GROWERS_RESOURCE, grower).then(result => result);
  },
  editGrower(grower) {
    return api.simplePut(GROWERS_RESOURCE, grower).then(result => result.data);
  },
  getGrowers() {
    return api.simpleGet(GROWERS_RESOURCE).then(result => result.data);
  },

}
