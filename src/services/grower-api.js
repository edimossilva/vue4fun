import api from './api';

const GROWERS_RESOURCE = 'grower';

export default {
  createGrower(grower) {
    return api.simplePost(GROWERS_RESOURCE, grower);
  },
  deleteGrower(grower) {
    return api.simpleDelete(GROWERS_RESOURCE, grower);
  },
  editGrower(grower) {
    return api.simplePut(GROWERS_RESOURCE, grower);
  },
  getGrowers() {
    return api.simpleGet(GROWERS_RESOURCE);
  },

}
