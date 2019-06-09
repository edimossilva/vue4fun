import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { routes } from './routes';
import { store } from './store/store';

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.use(VueRouter);

Vue.config.productionTip = false
const router = new VueRouter({routes})

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
