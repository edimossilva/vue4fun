import api from './api';

const GROWERS_RESOURCE = 'grower';
const PROPERTIES_RESOURCE = 'properties';

export default {
  getProperties(growerId) {
    return api.nestedGet(GROWERS_RESOURCE, PROPERTIES_RESOURCE, growerId).then(result => result.data);
  },
}
