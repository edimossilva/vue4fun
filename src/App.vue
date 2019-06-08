<template>
  <div id="app" class="app__container">
    <routes-menu :routes="routes"></routes-menu>
    <router-view></router-view>
  </div>
</template>

<script>
import { routes } from './routes';
import RoutesMenu from './components/routes-menu/RoutesMenu.vue';

export default {
  name: 'app',
  components: {
    'routes-menu': RoutesMenu,
  },
  data() {
    return {
      routes: routes,
    }
  },
}
</script>

<style>
h1 {
  margin-bottom: 24px;
  margin-top: 24px;
}
.app__container {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 16px;
}
</style>
